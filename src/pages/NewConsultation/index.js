import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import database from '../../config/firebase.js'
import styles from "./style";

export default function NewConsultation({ navigation }, props) {
 
    const [description, setDescription] = useState(null);
    const [data, setData] = useState(null);
    const [time, setTime] = useState(null);
    const [price, setPrice] = useState(null);
   
    function addConsultation(){
      database.collection('consultations').add({
        description: description,
        data: data,
        time: time,
        price: price,
        status: false
      })
      navigation.navigate("Consultation");
    }

    return(
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.label}>Description</Text>
            <TextInput
            style={styles.input}
            placeholder="Insert in description"
            onChangeText={setDescription}
            value={description}
            />
            <Text style={styles.label}>Date</Text>
            <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            onChangeText={setData}
            value={data}
            />
            <Text style={styles.label}>Time</Text>
            <TextInput
            style={styles.input}
            placeholder="00:00"
            onChangeText={setTime}
            value={time}
            />
            <Text style={styles.label}>Price</Text>
            <TextInput
            style={styles.input}
            placeholder="R$ 00,00"
            onChangeText={setPrice}
            value={price}
            />
          </ScrollView>

          <TouchableOpacity 
            style={styles.buttonNewConsultation}
            onPress={()=>{
              addConsultation()
            }}
          >
            <Text style={styles.iconButton}>Save</Text>
          </TouchableOpacity>
        </View>
      )
    }