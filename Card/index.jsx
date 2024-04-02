import { View,Text,TouchableOpacity, Image } from "react-native"
import {estile} from "./styles"

export default function Card({name}){
    return(

<View >
        <View>
            <View style = {estile.caixinha}>
            <View style ={estile.excruir}>
 <Image  source={require('../../assets/heart.png')} style={estile.heart}/>
        </View>
               
        <Text style = {estile.nominho}>
                {name}
        </Text>
             
            </View>
            </View> 
         
        </View>
       
    )
}