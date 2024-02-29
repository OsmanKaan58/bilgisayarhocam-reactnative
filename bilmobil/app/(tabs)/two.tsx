import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import * as Font from "expo-font";
import  RobotoStyledText  from '@/components/RobotoStyledText';
import getBitcoinData from '@/APIfunctions/bitcoin';
import { useState,useEffect } from 'react';

export default function TabTwoScreen() {
  let [bitcoinData, setBitcoin] = useState({
    usdRate: "",
    eurRate: "",
    gbpRate: ""
  });
  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => response.json())
      .then(data => {
        setBitcoin({
          usdRate: data.bpi.USD.rate,
          eurRate: data.bpi.EUR.rate,
          gbpRate: data.bpi.GBP.rate
        })
      })
  },[])
  let chartName = ""; 
  getBitcoinData().then((data) => {
    chartName = data;
  });
  return (
    <View >
      <View className='h-full flex items-center justify-center'>
      <RobotoStyledText className='text-xl'>Bitcoin Values</RobotoStyledText>
        <RobotoStyledText>USD: {bitcoinData.usdRate}</RobotoStyledText>
        <RobotoStyledText>EURO: {bitcoinData.eurRate}</RobotoStyledText>
        <RobotoStyledText>GBP: {bitcoinData.gbpRate}</RobotoStyledText>
        </View>
    </View>
  );
}


