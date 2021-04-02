import * as React from 'react'
import { Image, FlatList } from 'react-native'
import { Text } from '../../components/Themed'

import styles from './styles'

interface HomeCategoryProps {
  category: {
    id: string
    title: string
    movies: Array<{
      id: string
      poster: string
    }>
  }
}

const HomeCategory = ({ category: { title, movies } }: HomeCategoryProps) => {
  return (
    <>
      {/* List of categories */}
      <Text style={styles.title}>{title}</Text>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={movies}
        renderItem={({ item: { id, poster } }) => (
          <Image
            style={styles.image}
            source={{
              uri: poster,
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  )
}

export default HomeCategory
