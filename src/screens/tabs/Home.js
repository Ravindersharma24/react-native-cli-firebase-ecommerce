import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../common/Header'
import {useNavigation} from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
  return (
    <Header 
        leftIcon={require("../../images/menu.png")}
        rightIcon={require("../../images/cart.png")}
        title={'Grocerry App'}
        onClickLeftIcon={()=>{navigation.openDrawer()}}
    />
  )
}

export default Home

const styles = StyleSheet.create({})