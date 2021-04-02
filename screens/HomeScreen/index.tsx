import * as React from 'react'
import { FlatList, Image, SafeAreaView } from 'react-native'

import styles from './styles'
import { Text, View } from '../../components/Themed'
import categories from '../../assets/data/categories'
import HomeCategory from '../../components/HomeCategory'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={categories.items}
          renderItem={({ item }) => <HomeCategory category={item} />}
        />
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen
