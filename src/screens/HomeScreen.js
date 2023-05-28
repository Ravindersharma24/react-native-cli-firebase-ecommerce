import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import React,{useState} from 'react';
import Header from '../common/Header';
import Home from './tabs/Home';
import Search from './tabs/Search';
import Wishlist from './tabs/Wishlist';
import Notification from './tabs/Notification';
import User from './tabs/User';

const HomeScreen = () => {

    const[selecetedTab,setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>

    {/* bottom navigation */}
        {selecetedTab==0?(<Home/>):
        selecetedTab==1?(<Search/>):
        selecetedTab==2?(<Wishlist/>):
        selecetedTab==3?(<Notification/>):
        (<User/>)
    }
    <View style={styles.bottomView}>
        <TouchableOpacity 
            style={styles.bottomTab}
            onPress={()=>{
                setSelectedTab(0)
            }}
        >
            <Image 
                source={selecetedTab == 0 ? require("../images/home_fill.png") : require("../images/home.png")}
                style={styles.bottomTabIcon}
            />
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.bottomTab}
            onPress={()=>{
                setSelectedTab(1)
            }}
        >
            <Image 
                source={require("../images/search.png")}
                style={styles.bottomTabIcon}
            />
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.bottomTab}
            onPress={()=>{
                setSelectedTab(2)
            }}
        >
            <Image 
                source={selecetedTab == 2 ? require("../images/wishlist_fill.png") : require("../images/wishlist.png")}
                style={styles.bottomTabIcon}
            />
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.bottomTab}
            onPress={()=>{
                setSelectedTab(3)
            }}
        >
            <Image 
                source={selecetedTab == 3 ? require("../images/noti_fill.png") : require("../images/noti.png")}
                style={styles.bottomTabIcon}
            />
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.bottomTab}
            onPress={()=>{
                setSelectedTab(4)
            }}
        >
            <Image 
                source={selecetedTab == 4 ? require("../images/user_fill.png") : require("../images/user.png")}
                style={styles.bottomTabIcon}
            />
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bottomView:{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:70,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    bottomTab:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    bottomTabIcon:{
        width:24,
        height:24,
    }
})