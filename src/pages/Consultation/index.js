import React, { useState, useEffect } from "react";

import {
    View, 
    Text,
    TouchableOpacity,
    FlatList
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
            showsVerticalScrollIndicator={false}
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
                {item.description} {"\n"}
                Data: {item.date} {"\n"}
                Hora: {item.time} {"\n"}
                Valor: R$ {item.price} {"\n"}
                </Text> 
              </View>
              )
            }}
          />
          <TouchableOpacity style
            style={styles.buttonNewConsultation}
            onPress={() => navigation.navigate("NewConsultation")}
          >
            <Text style={styles.iconButton}>+</Text>
          </TouchableOpacity>
        </View>
      )
    }