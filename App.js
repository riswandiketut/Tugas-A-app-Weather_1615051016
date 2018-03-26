import React, {} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  TextInput,
  View } from 'react-native';

export default class AppWeather1615051105 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city: '-',
      //cari: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0
      }
    };
  }

  getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='
    + this.state.city +
    '&appid=757e1816fb20afc0f606154b0fbe94ff&units=metric';
    fetch (url)
    .then ((response) => response.json())
    .then ((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
  }

  render() {
    return (
      <View style={styles.containerMain}>
       <View style={styles.box1}>
         <Text style={styles.text}>Prakiraan Cuaca</Text>
       </View>

       <View style={styles.box2}>
        <Text style = {{fontSize: 20}}>Masukkan nama kota</Text>
          <TextInput style = {{height: 50, width: 200, textAlign: 'center', backgroundColor: 'white', margin: 20}}
            onChangeText={(city)=>this.setState({city})}
            keyboardType = 'ascii-capable'
          />
          <Button
            onPress={()=> this.getWeather({})}
            title="Lihat"
            accessibilityLabel="lihat"
          />
       </View>

       <View style={styles.box3}>
       <Text style = {{padding: 20, fontSize: 25}} >
          Kota: {this.state.city}{"\n\n"}
          Suhu : {this.state.forecast.temp}{"\n\n"}
          Cuaca :  {this.state.forecast.main} {"\n\n"}
          Deskripsi :  {this.state.forecast.description}
       </Text>
       </View>

       <View style={styles.box4}>
        <Text style={{ padding: 30, fontSize: 15, color: 'black', textAlign: 'center' }}>
        copyright @febrianadiah</Text>
       </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#E8EAF6',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.4,
    marginTop: 15,
    backgroundColor: '#9FA8DA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    flex: 1.3,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    flexDirection: 'column',
    backgroundColor: '#7986CB',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    flex: 2,
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    flexDirection: 'row',
    //justifyContent: 'space-around',
    backgroundColor: '#8C9EFF',
    //alignItems: 'center'
  },
  box4: {
    flex: 0.4,
    backgroundColor: '#9FA8DA',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 25
  },
});
AppRegistry.registerComponent('AppForm2', () => AppWeather1615051105);
