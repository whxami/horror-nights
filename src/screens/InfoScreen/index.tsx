import { RouteProp, useRoute } from '@react-navigation/native';
import { FC, useEffect, useState } from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  Platform,
  ScrollView,
  Share,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import RNFS from 'react-native-fs';
import uuid from 'react-native-uuid';
import { zip } from 'react-native-zip-archive';
import RNFetchBlob from 'rn-fetch-blob';

import BackIcon from 'components/BackIcon';
import Button from 'components/Button';
import DownloadIcon from 'components/DownloadIcon';
import ForwardIcon from 'components/ForwardIcon';
import Header from 'components/Header';
import HeartIcon from 'components/HeartIcon';
import StarIcon from 'components/StarIcon';
import { SCREENS } from 'const/screens';
import { useThemedStyles } from 'theme/ThemeProvider';
import { InfoData, InfoScreenParams } from 'types/navigationTypes';

import { getFileExtension, getImagesWithType } from './utils';

import { CreateStyles } from './styles';

const INITIAL_INDEX = 1;

type InfoParams = Record<SCREENS.INFO, InfoScreenParams>;

type InfoScreenRouteProp = RouteProp<InfoParams, SCREENS.INFO>;

const InfoScreen: FC = () => {
  const styles = useThemedStyles(CreateStyles);
  const route = useRoute<InfoScreenRouteProp>();

  const [isDownloading, setIsDownloading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentData, setCurrentData] = useState<InfoData>();

  const { type, data, isCarousel = false, allData = [] } = route.params || {};

  useEffect(() => {
    if (isCarousel && allData.length > 0) {
      setCurrentIndex(INITIAL_INDEX);
      setCurrentData(allData[INITIAL_INDEX]);
    } else if (data) {
      setCurrentData(data);
      setCurrentIndex(0);
    }
  }, [data, isCarousel, allData]);

  const images = getImagesWithType(type);

  const showNotification = (message: string) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert('Download', message);
    }
  };

  async function createMcpackFromPng(
    pngPath: string,
    skinName: string,
  ): Promise<string> {
    const { fs } = RNFetchBlob;
    const tempDir = `${fs.dirs.CacheDir}/SkinsTemp`;
    const outputDir = `${fs.dirs.DocumentDir}/Files`;
    const mcpackPath = `${outputDir}/${skinName}.mcpack`;

    // 1. clear or create temporary directory
    const tempExists = await fs.isDir(tempDir);

    if (tempExists) {
      await fs.unlink(tempDir);
    }

    await fs.mkdir(tempDir);

    // 2. move the original .png into tempDir
    const tempPngPath = `${tempDir}/${skinName}.png`;
    await fs.mv(pngPath, tempPngPath);

    // 3. write skins.json
    const skinsJson = {
      geometry: 'skinpacks|skins.json',
      serialize_name: skinName,
      localization_name: skinName,
      skins: [
        {
          localization_name: 'current',
          geometry: 'geometry.humanoid.custom',
          texture: `${skinName}.png`,
          type: 'free',
        },
      ],
    };
    await fs.writeFile(
      `${tempDir}/skins.json`,
      JSON.stringify(skinsJson, null, 2),
      'utf8',
    );

    // 4. write manifest.json
    const headerUuid = uuid.v4() as string;
    const moduleUuid = uuid.v4() as string;
    const manifestJson = {
      format_version: 1,
      header: {
        name: skinName,
        uuid: headerUuid,
        version: [1, 0, 0],
      },
      modules: [
        {
          type: 'skin_pack',
          uuid: moduleUuid,
          version: [1, 0, 0],
        },
      ],
    };
    await fs.writeFile(
      `${tempDir}/manifest.json`,
      JSON.stringify(manifestJson, null, 2),
      'utf8',
    );

    // 5. ensure output directory exists
    const outputExists = await fs.isDir(outputDir);

    if (!outputExists) {
      await fs.mkdir(outputDir);
    }

    // 6. zip tempDir into .mcpack
    const zippedPath = await zip(tempDir, mcpackPath);

    return zippedPath;
  }

  const downloadFile = async () => {
    const fileName = `${currentData?.id}${getFileExtension(type)}`;
    const { fs } = RNFetchBlob;
    const sourcePath1 = `${RNFS.MainBundlePath}/2.png`;
    console.log(sourcePath1);

    setIsDownloading(true);

    const destPath = `${RNFS.DownloadDirectoryPath}/${fileName}`;

    try {
      if (Platform.OS === 'android') {
        await RNFS.copyFileAssets('wallpapers/2.png', destPath);
      } else {
        const sourcePath = `${RNFS.MainBundlePath}/wallpapers/2.png`;
        await RNFS.copyFile(sourcePath, destPath);
      }

      Alert.alert('Успешно', `Файл сохранён: ${destPath}`);
    } catch (error) {
      console.error(error);
      console.log('123412412421124124');

      Alert.alert('Ошибка', 'Не удалось сохранить файл');
    }

    // try {
    //   const fileData = await fs.readFile(
    //     '../../assets/wallpapers/2.png',
    //     'base64',
    //   );
    //
    //   console.log(fileData);
    //
    //   if (!fileData) throw new Error('Файл пуст или не найден в assets');
    //
    //   await fs.writeFile(destPath, fileData, 'base64');
    //
    //   const stats = await fs.stat(destPath);
    //   console.log(`✅ Файл скопирован: ${destPath} (${stats.size} байт)`);
    //
    //   setIsDownloading(false);
    //
    //   if (Platform.OS === 'android') {
    //     if (type === SCREENS.SKINS) {
    //       const skinName = currentData?.name || 'skin';
    //       try {
    //         const mcpackPath = await createMcpackFromPng(destPath, skinName);
    //         RNFetchBlob.android.actionViewIntent(
    //           mcpackPath,
    //           'application/octet-stream',
    //         );
    //       } catch (e) {
    //         console.error('❌ Ошибка создания .mcpack:', e);
    //         showNotification('Failed to create skin pack');
    //       }
    //     } else {
    //       RNFetchBlob.android.actionViewIntent(
    //         destPath,
    //         'application/octet-stream',
    //       );
    //     }
    //   } else {
    //     try {
    //       RNFetchBlob.ios.openDocument(destPath);
    //     } catch (error) {
    //       console.error('❌ Ошибка открытия файла на iOS:', error);
    //       showNotification('Failed to open file');
    //     }
    //   }
    // } catch (error) {
    //   console.error('❌ Ошибка копирования:', error);
    //   setIsDownloading(false);
    //   showNotification('Download failed');
    // }
  };

  const checkPermission = async () => {
    if (isDownloading) {
      return;
    }

    if (
      Platform.OS !== 'android' ||
      parseInt(String(Platform.Version), 10) >= 30
    ) {
      setIsDownloading(true);
      downloadFile();

      return;
    }

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'App needs access to your storage to download files',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setIsDownloading(true);
        downloadFile();
      } else {
        showNotification('Storage permission denied');
      }
    } catch {
      showNotification('Error requesting permission');
    }
  };

  const handlePrevious = () => {
    if (!isCarousel || allData.length === 0) return;

    const newIndex = currentIndex > 0 ? currentIndex - 1 : allData.length - 1;
    setCurrentIndex(newIndex);
    setCurrentData(allData[newIndex]);
  };

  const handleNext = () => {
    if (!isCarousel || allData.length === 0) return;

    const newIndex = currentIndex < allData.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setCurrentData(allData[newIndex]);
  };

  if (!currentData) {
    return;
  }

  const { extraLikes, rating, id, extraFileWeight } = currentData;

  return (
    <>
      <Header title={type} withBackButton={type !== SCREENS.WALLPAPERS} />
      <ScrollView style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <FastImage
            style={styles.image}
            source={images[id]}
            resizeMode="cover"
          />
          {isCarousel && (
            <View style={styles.arrowsContainer}>
              <TouchableOpacity
                onPress={handlePrevious}
                style={styles.arrowWrapper}
              >
                <BackIcon />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleNext}
                style={styles.arrowWrapper}
              >
                <ForwardIcon />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <StarIcon />
              <Text style={styles.infoItemText}>{rating}</Text>
            </View>
            <View style={styles.infoItem}>
              <DownloadIcon />
              <Text style={styles.infoItemText}>{extraFileWeight}</Text>
            </View>
            <View style={styles.infoItem}>
              <HeartIcon />
              <Text style={styles.infoItemText}>{extraLikes}</Text>
            </View>
          </View>
          <Button size="large" title="DOWNLOAD" onPress={checkPermission} />
        </View>
      </ScrollView>
    </>
  );
};

export default InfoScreen;
