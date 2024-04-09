import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/nactive';

export default function App() {
  return (
    <View style={styles.container}>

      <view  style={styles.header}>
        <text>Header</text>
      </view>

      <ScrollView style={styles.main}>
        <text> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus dignissimos vero dolores temporibus consequuntur modi nemo repudiandae autem, dolorem quos! Blanditiis minima nobis modi culpa officiis, iusto veritatis dolorem!</text>
        </ScrollView>
        
      <view style={styles.footer}>
      <text > footer</text>""
      </view>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  header: {
    flex: 0.2,
     backgroundColor: 'blue',
      width: '100%'
    },
    main: {
      flex: 1, 
      backgroundColor: 'green',
      width: '100%'
    },

      footer: {
        flex: 0.1,
         backgroundColor: 'red',
          width: '100%'}

          
});
