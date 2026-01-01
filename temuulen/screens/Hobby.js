import { StyleSheet, Text, View,FlatList ,Image, Pressable} from 'react-native'
import React, { useState, useEffect } from "react";
import { getHobbies } from "../fireBaseConfig";

const Hobby = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    const loadHobbies = async () => {
      const data = await getHobbies();
      console.log("Data received in Hobby:", JSON.stringify(data, null, 2));
      if (data && data.length > 0) {
        console.log("First hobby imageUrl:", data[0].imageUrl);
        console.log("Image URL type:", typeof data[0].imageUrl);
      }
      setHobbies(data);
    };
    loadHobbies();
  }, []);

  return (
    <View style={styles.container}>
    <FlatList
        data={hobbies}
        keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
        renderItem={({ item }) => (
          <View style={styles.hobbyItem}>
            <View style={styles.imageContainer}>
              {item.imageUrl ? (
                <Image 
                  source={{ uri: item.imageUrl }} 
                  style={styles.image}
                  onError={(e) => console.log("Image error:", item.imageUrl, e.nativeEvent.error)}
                  onLoad={() => console.log("Image loaded:", item.imageUrl)}
                />
              ) : (
                <Text style={styles.error}>No image URL</Text>
              )}
              <View style={styles.titleBox}>
                <Text style={styles.imageTitle} numberOfLines={2}>{item.title}</Text>
              </View>
            </View>
          </View>
        )}
      />
        
    </View>
  );
}
export default Hobby;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hobbyItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  titleBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  imageTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
   
  error: {
    color: 'red',
    fontSize: 12,
  },
})