import React, { useState } from "react"
import {View, Text, TextInput, TouchableOpacity}  from "react-native"
 
import database from "../../config/firebase"
import styles from "./style"

export default function Details({navigation, route}){
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const idConsultation = route.params.id
   
    function editConsultation(description, id){
      database.collection("consultations").doc(id).update({
        description: description,
      })
      navigation.navigate("Consultation")
    }

    return(
        <View style={styles.container}>
          <Text style={styles.label}>Description</Text>
          <TextInput
          style={styles.input}
          placeholder="Informe a descrição"
          onChangeText={setDescriptionEdit}
          value={descriptionEdit}
          />
          <TouchableOpacity 
            style={styles.buttonNewConsultation}
            onPress={()=>{
              editConsultation(descriptionEdit, idConsultation)
            }}
          >
            <Text style={styles.iconButton}>Save</Text>
          </TouchableOpacity>
        </View>
      )
    }