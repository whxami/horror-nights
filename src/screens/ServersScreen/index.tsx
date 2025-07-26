import { FC } from 'react';
import { ScrollView, View } from 'react-native';

import serverData from 'assets/servers/servers.json';
import NothingFound from 'components/NothingFound';
import ServerCard from 'components/ServerCard';
import { useFilteredData } from 'hooks/useFilteredData';
import { useThemedStyles } from 'theme/ThemeProvider';

import Header from 'components/Header';
import { SCREENS } from 'const/screens';

import { createStyles } from './styles';

const ServersScreen: FC = () => {
  const styles = useThemedStyles(createStyles);
  const filteredServersData = useFilteredData(serverData);

  if (!filteredServersData.length) {
    return <NothingFound />;
  }

  return (
    <>
      <Header title={SCREENS.SERVERS} withSearch />
      <ScrollView>
        <View style={styles.container}>
          {filteredServersData.map((server) => (
            <ServerCard key={server.id} {...server} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default ServersScreen;
