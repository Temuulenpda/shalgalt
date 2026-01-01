import { StyleSheet, Text, View,FlatList ,Image, Pressable} from 'react-native'
import React, { useState, useEffect } from "react";
import { getCapabilities } from "../fireBaseConfig";

const Capable = () => {
  const [capabilities, setCapabilities] = useState([]);

  useEffect(() => {
    const fetchCapabilities = async () => {
      try {
        const capabilitiesData = await getCapabilities();
        setCapabilities(capabilitiesData);
      } catch (error) {
        console.error("Error fetching capabilities:", error);
      }
    };

    fetchCapabilities();
  }, []);

  return (
    <View style={styles.container}>
        <FlatList
            data={capabilities}
            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
            renderItem={({ item }) => (
              <View style={styles.capItem}>
                <View style={styles.imageContainer}>
                  {item.zurag ? (
                    <Image 
                      source={{ uri: item.zurag }} 
                      style={styles.image}
                      onError={(e) => console.log("Image error:", item.zurag, e.nativeEvent.error)}
                      onLoad={() => console.log("Image loaded:", item.zurag)}
                    />
                  ) : (
                    <Text style={styles.error}>No image URL</Text>
                  )}
                  <View style={styles.titleBox}>
                    <Text style={styles.imageTitle} numberOfLines={2}>{item.chadvar}</Text>
                  </View>
                </View>
              </View>
            )}
          />
            
        </View>
  )
}

export default Capable
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  capItem: {
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
    color: '#f18c19f6',
    fontSize: 16,
    fontWeight: 'bold',
  },
   
  error: {
    color: 'red',
    fontSize: 12,
  },
})