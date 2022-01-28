import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from '../../config/firebase.js'
import styles from "./style";

export default function NewConsultation({ navigation }, props) {
 
    const [description, setDescription] = useState(null);
   
    function addConsultation(){
      database.collection('consultations').add({
        description: description,
        status: false
      })
      navigation.navigate("Consultation");
    }

    return(
        <View style={styles.container}>
          <Text style={styles.label}>Description</Text>
          <TextInput
          style={styles.input}
          placeholder="Informe uma descrição"
          onChangeText={setDescription}
          value={description}
          />
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