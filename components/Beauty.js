import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, ScrollView, } from 'react-native';
import {  MaterialIcons,EvilIcons,Foundation, AntDesign, Ionicons, } from '@expo/vector-icons';
  import React from "react";
import { FlatList } from 'react-native';


const Beauty =(props)=>{
    return(
        <ScrollView>
        <View style={styles.container}>
         <View style={styles.icons}>
         <Foundation name="die-six" size={45} color="black" />
         <Text style={{fontWeight: "bold", fontSize: 20,}}>DISCOVER</Text>
         <EvilIcons name="search" size={40} color="black" />
         </View>
       

         <View style={styles.inf}>
             <View style= {styles.img}>
            <Image style= {styles.image} source={require("../assets/fo1.jpg")}></Image>
            </View>
             <View style= {styles.details}>
            <Text style={{fontSize: 22,}}>Does dry is january actully improve your health?</Text>
            <View style= {styles.det}>
            <Image style= {styles.lov} source={require("../assets/sml3.jpg")}></Image>
            <Text style={{paddingLeft: 5,top: 4,}}>Williams Daka    . 4 min read</Text>
            </View>
            </View> 
         </View>



         <View style={styles.inf}>
             <View style= {styles.img}>
            <Image style= {styles.image} source={require("../assets/fo2.jpg")}></Image>
            </View>
             <View style= {styles.details}>
            <Text style={{fontSize: 22,}}>How to seem like your always have your short togather.</Text>
            <View style= {styles.det}>
            <Image style= {styles.lov} source={require("../assets/sm1.jpg")}></Image>
            <Text style={{paddingLeft: 5,top: 4,}}>Akua Lovina...    .just now</Text>
            </View>
            </View> 
         </View>



         <View style={styles.inf}>
             <View style= {styles.img}>
            <Image style= {styles.image} source={require("../assets/fo3.jpg")}></Image>
            </View>
             <View style= {styles.details}>
            <Text style={{fontSize: 22,}}>Does dry is january actully improve your health?</Text>
            <View style= {styles.det}>
            <Image style= {styles.lov} source={require("../assets/sml2.jpg")}></Image>
            <Text style={{paddingLeft: 5,top: 4,}}>Afia Sika    . 2 min read</Text>
            </View>
            </View> 
         </View>

          <View  style= {styles.imj}>
              <TouchableOpacity onPress={()=>{props.navigation.navigate("Discover")}}>
         <AntDesign name="home" size={24} color="black" />
         </TouchableOpacity>
         <AntDesign name="folderopen" size={24} color="black" />
         <MaterialIcons name="favorite-border" size={24} color="black" />
         <Ionicons name="person-outline" size={24} color="black" />
         <AntDesign name="setting" size={24} color="black" />
         </View> 

         
       

        </View>
        </ScrollView>
       
    
            );
        }

        export default Beauty;

const styles = StyleSheet.create({
    container: {
      flex: 10,
      backgroundColor: "#fffff0",
    },

     imj:{
         flexDirection: "row",
       backgroundColor: "white",
       justifyContent: "space-around",
       top: 5,
     },
    

det: {
    flexDirection: "row",
    top: 20,
    paddingLeft: 10,
},

    lov:{
        height: 30,
         width: 30,
          borderRadius: 15 
    },

    image: {
        height: 100,
        width: 150,
          top: 20,
         borderRadius: 20, 
          

    },

 img: {
    backgroundColor: "white",
    marginLeft: 1,
    marginTop: 5,
  borderRadius: 30, 
 
 },


icons: {
flexDirection: "row",
justifyContent: "space-between",
 alignItems: "center",
top: 5,
// marginLeft: 20,
backgroundColor: "white",
height: 80,
width: "100%",
},

text: {
    fontSize: 20,
    paddingTop: 30,
    marginLeft: 20,
    fontWeight: "bold",
},

round: {
    width: "80%",
    height: 50,
    backgroundColor: "white",
    marginLeft: 20,
    marginTop: 30,
    borderRadius: 50,
},

 me:{
 marginLeft: 10,
 marginStart: 20,
 paddingTop: 20,

 },

 me1:{
    marginLeft: 10,
    marginEnd: 20,
    paddingTop: 20,
    color: "blue",
 },

smallcontainer:{
    flexDirection: "row",
    justifyContent: "space-between",
},

inf: {
    flexDirection: "row",
     justifyContent: "space-around",
     top: 10,
    
    // backgroundColor: "white",
    
},

 details: {
     
     marginRight: 10,
     marginTop: 60,
     backgroundColor: "white",
     height:120,
     width: "60%",
    
 },

})
