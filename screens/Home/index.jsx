import { View, TextInput, TouchableOpacity, FlatList, Image } from "react-native"
import { estilo } from "./styles"
import Card from "../../components/Card"
export default function Home(){

    const Lista = ["Yaya","Bruno","Anna","Lele", 
                  "Keket","Lulu","Tiko", "Papapito"]

    return(
<View style = {estilo.telaI}>

        <View>
    <Image source={require('../../assets/fundo.jpg')} style={estilo.fundo} />
                
            <View style ={estilo.cabecalho}>

                   
                <View style={estilo.credo}>
                <TextInput style = {estilo.maiqp}>
                    sinceramente, eu não aguento mais.
                </TextInput>
                    </View>
                    
                    <TouchableOpacity style ={estilo.blupa}>
                    <Image source={require('../../assets/pesquisar.png')} style={estilo.imglupa}  />
                    </TouchableOpacity>

                </View>
            </View>

           
             <FlatList
           data={Lista}
           keyExtractor={item => item}
           renderItem={({item} )=>(
            <Card key={item} name={item}/>
           )} 

           style ={estilo.cards}
          
           />
        </View>
    
)}