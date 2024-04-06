import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <view style= {{flex: 1, backgroundColor: 'blue', width: '100%'}}>
        <text>Header</text>
      </view>

     
      <ScrollView style={{flex:8, backgroundColor: 'green'}}>
        <text> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus dignissimos vero dolores temporibus consequuntur modi nemo repudiandae autem, dolorem quos! Blanditiis minima nobis modi culpa officiis, iusto veritatis dolorem!</text>
        </ScrollView>
        
      <view style= {{flex: 1, backgroundColor: 'red', width: '100%'}}>
      <text> footer</text>
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
});
