import React, { useState, useEffect } from "react";

import {
    View, 
    Text,
    TouchableOpacity,
    FlatList,
    Linking
} from 'react-native';

import database from '../../config/firebase';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style';

export default function Consultation({ navigation }) {
    const [consultation, setConsultation] = useState([]);
   
    function deleteConsultation(id) {
      database.collection("consultations").doc(id).delete();
    }
   
    useEffect(() => {
      database.collection("consultations").onSnapshot((query) => {
        const list = [];
        query.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setConsultation(list);
      });
    }, []);

    return (
        <View style={styles.container}>
          <FlatList
            // showsVerticalScrollIndicator={false}
            data={consultation}
            renderItem={( { item } )=>{
               return(
              <View style={styles.Consultations}>
                <Text
                  style={styles.DescriptionConsultation}
                  onPress={()=>
                    navigation.navigate("Details",{
                      id: item.id,
                      description: item.description,
                      price: item.price,
                      time: item.time,
                      data: item.data,
                    })
                  }
                >
                <Text style={styles.title}>Consultation</Text>{"\n"}
                Description: {item.description} {"\n"}
                Date: {item.data} {"\n"}
                Time: {item.time} {"\n"}
                Price: R$ {item.price} 
                </Text> 
                <TouchableOpacity
                  style={styles.deleteConsultation}
                  onPress={() => {
                    deleteConsultation(item.id)
                  }}
                >
                <FontAwesome
                  name="trash"
                  size={23}
                  color="#F92e6A"
                >
                </FontAwesome>
                </TouchableOpacity> 
     
              </View>
              )
            }}
          />
          <TouchableOpacity
            style={styles.buttonNewConsultation}
            onPress={() => navigation.navigate("NewConsultation")}
          >
            <Text style={styles.iconButton}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonMessage}
            onPress={() => {
              Linking.openURL(
                'mailto: psicoclin@gmail.com'
              );
              }}
            >
            <FontAwesome
              name="envelope"
              size={23}
              color="#fff"
            >
            </FontAwesome>
          </TouchableOpacity>
        </View>
      )
    }