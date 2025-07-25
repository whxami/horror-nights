import Clipboard from '@react-native-clipboard/clipboard';
import { FC, useMemo } from 'react';
import { Text, View } from 'react-native';

import Button from 'components/Button';
import { useThemedStyles } from 'theme/ThemeProvider';

import { ServerCardProps } from './types';

import { createStyles } from './styles';

const ServerCard: FC<ServerCardProps> = (props) => {
  const { serverIp, name, limit } = props;
  const styles = useThemedStyles(createStyles);

  const currentPlayers = useMemo(() => {
    const minPlayers = Math.floor(limit * 0.2);

    return Math.floor(Math.random() * (limit - minPlayers + 1)) + minPlayers;
  }, [limit]);

  const handleCopyToClipboard = () => {
    Clipboard.setString(serverIp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.textWrapper}>
          <Text style={[styles.bigText, styles.secondaryText]}>{name}</Text>
          <Text style={[styles.smallText, styles.secondaryText]}>
            {currentPlayers}/{limit}
          </Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={[styles.smallText, styles.primaryText]}>{serverIp}</Text>
          <Text style={[styles.smallText, styles.primaryText]}>0.13.1</Text>
        </View>
      </View>
      <Button size="medium" title="COPY" onPress={handleCopyToClipboard} />
    </View>
  );
};

export default ServerCard;
