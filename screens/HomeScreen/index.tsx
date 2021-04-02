import * as React from 'react'
import { FlatList, Image, SafeAreaView } from 'react-native'

import styles from './styles'
import { Text, View } from '../../components/Themed'
import categories from '../../assets/data/categories'

const firstCategory = categories.items[0]

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* <Image
          style={styles.image}
          source={{
            uri: 'https://pics.filmaffinity.com/Hate-391751524-large.jpg',
          }}
        /> */}
        <Text style={styles.title}>{firstCategory.title}</Text>
        <FlatList
          data={firstCategory.movies}
          renderItem={({ item: { id, poster } }) => (
            <Image
              style={styles.image}
              source={{
                uri: poster,
              }}
            />
          )}
          horizontal
        />
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen
