import React, { useEffect, useState , useMemo} from "react";
import { View , StyleSheet, Text} from "react-native";
import { Button, TextInput } from "react-native-paper";


const UseMemo = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const add = (a, b) =>{
        return a + b;
    };

    useEffect( () => {
        
    },[result]);

    const result= useMemo(() => add(a, b), [a, b]);

    return(
        <View style={styles.container}>
            
            <View style={styles.viewButtons}>

                <TextInput 
                    style={styles.buttons}
                    value={a}
                    onChangeText={(a) => a.length ? setA(parseInt(a)) : setA(0)}
                    mode="contained"
               />
               <TextInput 
                    style={styles.buttons}
                    value={b}
                    onChangeText={(b) => b.length ? setB(parseInt(b)) : setB(0)}
                    mode="contained"
               />
                             
            </View>
            <View style={styles.viewButtons}>
             <Text style={styles.text}>Soma:{result}</Text>
            </View>
            
        </View>
)
}

export default UseMemo;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        margin:4
    },
    buttons:{
        margin: 1,
        flexDirection:'row',
        

    },
    viewButtons:{
        flex: 0.1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:4
    }
  });
  