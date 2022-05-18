import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, ScrollView,} from 'react-native';
import React from "react";
import { AntDesign,  MaterialIcons, Ionicons, } from '@expo/vector-icons';



const Discover =(props)=>{
    return(
        <ScrollView>
        <View style={styles.container}>
 <View style={styles.icons}>
     <View style={styles.beauty}>
     <TouchableOpacity onPress={()=>{props.navigation.navigate("Beauty")}}>
     <MaterialIcons name="arrow-back-ios" size={40} color="black" />
     </TouchableOpacity>
         <Text style={{color: "black", top: 10,  fontWeight: "bold",}}>Beauty</Text>
         </View>
         <Ionicons name="md-headset-outline" size={24} color="black" />
         <MaterialIcons name="favorite-border" size={24} color="black" />
         <AntDesign name="sharealt" size={24} color="black" /> 
         </View>
         <View style={styles.img}>
         <Image style= {styles.image} source={require("../assets/fo4.jpg")}></Image>
         </View>
         <View style={{top:20, paddingLeft: 10,}}>
             <Text style={{color: "black", top: 10,  fontWeight: "bold",}}>Focus On Learning and Creating Rather Than Entertainment and Distraction
             Focus On Learning and Creating Rather Than Entertainment and Distraction</Text>
         </View>
         <View style= {styles.det}>
            <Image style= {styles.lov} source={require("../assets/sml3.jpg")}></Image>
            <Text style={{paddingLeft: 5,top: 4,}}>Williams Daka    . 4 min read</Text>
            </View>
            <View>
                <Text style={{top: 40,}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
</Text>

<Text style={{top: 60,}}>
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.

                </Text>
            </View>
            <View>
             <Text style={styles.round}></Text>
         </View>
         </View>
         </ScrollView>
    );
}
        
export default Discover;

 const styles = StyleSheet.create({
    container: {
      flex: 10,
      backgroundColor: "white",
    },

    image: {
        height: 300,
        width: 300,
        },

 img: {
       marginTop: 50,
       paddingLeft: 50,
       paddingRight: 50,
         },

    icons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 20,
        top: 40,
        },

        beauty:{
            flexDirection: "row",
            backgroundColor:"#696969",
            height: 90,
            width:150,
        },

        det: {
            flexDirection: "row",
            top: 40,
            paddingLeft: 10,
        },
        
            lov:{
                height: 30,
                 width: 30,
                  borderRadius: 15 
            },

            round: {
            width: 100,
            height: 5,
            backgroundColor: "#696969",
             marginTop:70,
            borderRadius: 5,
            marginLeft: 150,
        },
        








})
