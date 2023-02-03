import React, { useEffect, useState } from 'react';
import { TextInput, View, Text, Image, Button, NativeSyntheticEvent, TextInputChangeEventData, StyleSheet, Pressable } from 'react-native';
import axios from 'axios';
import {  useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

function City() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const [name, setName] = useState<String>("");
    const [capital, setCapital] = useState<String>("");
    const [pop, setPop] = useState<String>("");
    const [flag, setFlag] = useState<any>();
    const [lat, setLat] = useState<number>();
    const [lng, setLng] = useState<number>();
    const [search, setSearch] = useState<any>();
    useEffect(() => {
        async function getData() {
            console.log(search)
            const resulSet = await axios.get(`https://restcountries.com/v3/name/${search}`);
            const data = resulSet.data[0];
            setName(data.name.official);
            setCapital(data.capital);
            setPop(data.population);
            setFlag(data.flags[1]);
            console.log(flag);
            setLat(data.latlng[0]);
            setLng(data.latlng[1]);
        } if(search)
            getData();
    },[search])
    
    
    function searchData({
        nativeEvent: {text},
    }: NativeSyntheticEvent<TextInputChangeEventData>) {
       setName(text);
    }

    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: '#EEEEEE',
                padding: 20,
                width: 350
           }}>
           
           
            <Image source={{
                uri: `${flag}`
            }} style={styles.imagestyling} />
                <View style={{
                    padding: 20,
                    alignItems: 'center'
                }}>
            <Text style={{padding: 5}}>Official Name: {name}</Text>
            <Text style={{padding: 5}}>Capital City: {capital}</Text>
            <Text style={{ padding: 5 }}>Population: {pop}</Text>
            <Text  style={{ padding: 5 }}>Latitude: {lat}</Text>
            <Text  style={{ padding: 5 }}>Longitude: {lng}</Text></View>
            <TextInput placeholder='Enter the name of the Country' onChange={searchData} style={styles.inputstlyling}  /></View>
            <Pressable onPress={() => setSearch(name)} style={styles.button1}>
                <Text style={{
                    color: 'white'
                }}>Submit</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Weather', { capital: capital })} style={styles.button2}>
            <Text style={{
                    color: 'white'
                }}>Get Capital Weather</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      alignItems: 'center',
        justifyContent: 'center',
    },
    button1: {
        backgroundColor: 'purple',
        width: 250,
        padding: 4,
        height: 30,
        alignItems: 'center',
        marginTop: 10
    },
    button2: {

        backgroundColor: 'purple',
        width: 250,
        padding: 4,
        height: 30,
        alignItems: 'center',
        marginTop: 10
        
    },
    inputstlyling: {
        padding: 7,
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 1,

    },
    imagestyling: {
        width: 150,
        height: 100,
        marginLeft: 80
    }

  });
export default City;