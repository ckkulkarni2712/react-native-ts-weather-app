import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
const Weather = ({route,navigation}:any) => {
    const { capital } = route.params;
    console.log(route.params)
    const [temp, setTemp] = useState<any>();
    const [weathericon, setIcon] = useState<any>();
    const [description, setDesc] = useState<String>();
    const [pres, setPres] = useState<any>();
    const [humid, setHumid] = useState<any>();
    const [precip, setPrecip] = useState<any>();
    useEffect(() => {
        async function getData() {
            const resultSet = await axios.get(`http://api.weatherapi.com/v1/current.json?key=2378c58bc7984bdeb83144256230202&q=${capital}&aqi=no`)
            setTemp(resultSet.data.current.temp_c);
            setIcon(resultSet.data.current.condition.icon);
            console.log(weathericon);
            setDesc(resultSet.data.current.condition.text);
            setPres(resultSet.data.current.pressure_mb);
            setHumid(resultSet.data.current.humidity);
            setPrecip(resultSet.data.current.precip_mm);

        }
        if (capital)
            getData()
    })


    return (
        <View style={styles.container}>
            <View style={styles.display}>
            <Image source={{uri: `https:`+`${weathericon}`}} style={{
                width: 150,
                    height: 150,
                    padding: 5,
                    backgroundColor: 'white'
                }} />
                <View style={{
                    padding: 20
                }}>
            <Text style={styles.details}>City Name: {capital}</Text>
            <Text style={styles.details}>Temperate: {temp} °C</Text>
            <Text style={styles.details}>Description: {description}</Text>
            <Text style={styles.details}>Pressure: {pres} MB</Text>
            <Text style={styles.details}>Humidity: {humid}</Text>
            <Text style={styles.details}>Precipitation: {precip} MM</Text></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    display: {
        backgroundColor: '#EEEE',
        padding: 20,
        height: 400,
        width: 300,
        alignItems: 'center'
    },
    details: {
        padding: 5
    }

  });
export default Weather;