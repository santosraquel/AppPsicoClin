import React, { useState } from "react"
import {View, Text, TextInput, TouchableOpacity, ScrollView}  from "react-native"
 
import database from "../../config/firebase"
import styles from "./style"

export default function Details({navigation, route}){
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const [dataEdit, setDataEdit] = useState(route.params.data)
    const [timeEdit, setTimeEdit] = useState(route.params.time)
    const [priceEdit, setPriceEdit] = useState(route.params.price)
    const idConsultation = route.params.id
   
    function editConsultation(description, data, time, price, id){
      database.collection("consultations").doc(id).update({
        description: description,
        data: data,
        time: time,
        price: price,
      })
      navigation.navigate("Consultation")
    }

    return(
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.label}>Description</Text>
              <TextInput
              style={styles.input}
              placeholder="Informe a descrição"
              onChangeText={setDescriptionEdit}
              value={descriptionEdit}
              />
              <Text style={styles.label}>Date</Text>
              <TextInput
              style={styles.input}
              placeholder="DD/MM/AAAA"
              onChangeText={setDataEdit}
              value={dataEdit}
              />
              <Text style={styles.label}>Time</Text>
              <TextInput
              style={styles.input}
              placeholder="00:00"
              onChangeText={setTimeEdit}
              value={timeEdit}
              />
              <Text style={styles.label}>Price</Text>
              <TextInput
              style={styles.input}
              placeholder="R$00,00"
              onChangeText={setPriceEdit}
              value={priceEdit}
              />
          </ScrollView>
          <TouchableOpacity 
            style={styles.buttonNewConsultation}
            onPress={()=>{
              editConsultation(descriptionEdit, dataEdit, timeEdit, priceEdit, idConsultation)
            }}
          >
            <Text style={styles.iconButton}>Save</Text>
          </TouchableOpacity>
        </View>
      )
    }