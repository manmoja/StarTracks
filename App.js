import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import { BottomNavigation, Button, Card, Title, Paragraph, DataTable} from 'react-native-paper';
import Stars from './src/Stars'
import SearchPage from './src/SeachPage'
import {AppRegistry, Text, TextInput} from 'react-native';






const styles = StyleSheet.create({
  searchButton: {
    marginTop: 600,
    padding: 12,
    borderRadius: 300,
    backgroundColor: "red"
  },
  albumcards: {
    marginTop: 60,
    padding: 5,
    backgroundColor: "green"
  },
  table: {
    marginTop: 35,
  }
});

const MusicRoute = () => 

//<Button style={styles.searchButton} icon ='bullseye-arrow' mode="contained" onPress={() => console.log('Pressed')}>
//Search
//</Button>;

<SearchPage />;

const AlbumsRoute = () => 
<Card style= {styles.albumcards}>
  <Card.Title title="Aquemini" />
  <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/AqueminiOutKast.jpg/220px-AqueminiOutKast.jpg' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
</Card>;

const RecentsRoute = () => 

<DataTable style = {styles.table}>
<DataTable.Header>
  <DataTable.Title>Album</DataTable.Title>
  <DataTable.Title>Stars</DataTable.Title>
</DataTable.Header>

<DataTable.Row>
  <DataTable.Cell>Aquemini</DataTable.Cell>
  <DataTable.Cell ><Stars /></DataTable.Cell>
</DataTable.Row>

<DataTable.Row>
  <DataTable.Cell>Dreams</DataTable.Cell>
  <DataTable.Cell><Stars /></DataTable.Cell>
</DataTable.Row>

<DataTable.Row>
  <DataTable.Cell>The Last Man at Sea</DataTable.Cell>
  <DataTable.Cell ><Stars /></DataTable.Cell>
</DataTable.Row>

<DataTable.Row>
  <DataTable.Cell>Volcano</DataTable.Cell>
  <DataTable.Cell ><Stars /></DataTable.Cell>
</DataTable.Row>

<DataTable.Pagination
  page={1}
  numberOfPages={3}
  onPageChange={page => {
    console.log(page);
  }}
/>
</DataTable>;

const MyComponent = () => {
 
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Tracks', icon: 'music',color: 'red' },
    { key: 'albums', title: 'Albums', icon: 'album', color: 'green' },
    { key: 'recents', title: 'Recents', icon: 'history', color: 'orange'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting = 'true'
      keyboardHidesNavigationBar = 'false'
    />
  );

   
};

export default MyComponent;