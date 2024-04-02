import {StyleSheet} from "react-native";

export const estilo = StyleSheet.create({
    telaI:{
        flex:1,
        backgroundColor: "#ffcad4",
        marginTop:35
    },
    
    telaII:{
     padding:20
    },

    fundo:{
        height:100,
        width:'100%',

    },
    
    
    cabecalho:{

        padding:20,
        flexDirection:'row',
        backgroundColor:'#F1C480',
        height:100,
        justifyContent:'space-around'
    },

    imgperfil:{
        justifyContent:'center',
        alignItems:'center'
    },

    imglupa:{
        height:20,
        width:20,
    },

    blupa:{

        borderRadius:50,
        backgroundColor: '#E07779',
        height:60,
        width:60,
        justifyContent:'center',
        alignItems:'center'
    },


    
    
    
    
    
    
    credo:{
        margin:1,
        borderRadius:5,
        height:'100%',
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#f1faee',
        
    },

    maiqp:{
        height:50,
        width:'95%',
        backgroundColor:'#F3A087',
        borderRadius: 5,
        padding:10,
        fontSize:25,
    },

    titulo:{
        marginTop: 30,
        fontSize:50,
        fontWeight: 'bold',
        borderRadius: 10,
        
      
    },

    sutitulo:{
        fontSize:25,
        marginTop:15,
        marginBottom:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    form:{
        flexDirection: 'row',
        width:"100%",
        backgroundColor:'#FCB595',
        padding:10,
        borderRadius:10
    },
    inputtext:{
        flex: 1,
        fontSize: 26,
        padding:15,
        backgroundColor: '#f1faee',
        borderRadius: 10,
        margin:5
    },
    botao:{
        width: 70,
        backgroundColor: '#FC9091',
        borderRadius: 10,
        display:'flex',
        justifyContent: 'center',
        alignItems: "center",
        margin: 2,
        
    },

    adicionar:{
        fontSize:40,
        
    },

    
    
    cards:{

        padding:20
    }

   

})