import React from 'react'
import { StyleSheet, Text, Pressable ,View,ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

const StartScreen = () => {
  const navigation = useNavigation()
  return (
    <LinearGradient
      colors={['#fafbffff', '#7a7a7cff', '#000000ff']}
      start={[1, 0]}
      end={[1, 1]}
      style={styles.container}
    >
      <Text style={styles.title}>Тэмүүлэн</Text>
      <View style={styles.taniltuulga}>
        <Text style={styles.taniltuulgaText}>Намайг Тэмүүлэн гэдэг.</Text>
         <Text style={styles.taniltuulgaText}>Нас : 17</Text>
         <Text style={styles.taniltuulgaText}>Би мк технологийн коллеж кут-ын 3-дугаар күрсийн оюутан.</Text>
      </View>
      <View styles={styles.buttonContainer}>
        <Pressable onPress={() => navigation.navigate('Hobby')} style={styles.button}>
        <Text style={styles.buttonText}>Хобби</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Capable')} style={styles.button}>
        <Text style={styles.buttonText}>Ур чадвар</Text>
      </Pressable>
      </View>
    </LinearGradient>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
   
  },
  title: { 
    color: 'black', 
    fontSize: 24,
     marginTop: 10,
    },
  button: { 
        marginTop: 10,
    backgroundColor: '#0044ff85',
    padding: 10,
    borderRadius: 8 
    },
  buttonText: { 
    color: 'white', 
    fontWeight: 'bold' 
    },
  taniltuulga: { 
    justifyContent: 'start',
    alignItems: 'start',
    padding: 10,
    height: '200px',
    },
  taniltuulgaText: {
     color: 'black', 
     fontSize: 14,
     marginTop: 20,
     textAlign: 'center'
     },
     buttonContainer:{
        flex:1,
      flexDirection:'row',
      justifyContent:'start',
      width: '100%',
    },
  }
)