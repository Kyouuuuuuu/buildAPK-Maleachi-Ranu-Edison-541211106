import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const Basketball = () => {
  const [data, setData] = useState([]);
  const [kelas, setKelas] = useState('');
  const [nama, setNama] = useState('');
  const [tugas, setTugas] = useState('');
  const [pembimbing, setPembimbing] = useState('');
  const [waktu, setWaktu] = useState('');
  const [updateMode, setUpdateMode] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);

  const addOrUpdateData = () => {
    if (updateMode && updateIndex !== null) {
      const updatedData = [...data];
      updatedData[updateIndex] = { kelas, nama, tugas, pembimbing, waktu };
      setData(updatedData);
      setUpdateMode(false);
      setUpdateIndex(null);
    } else {
      const newData = { kelas, nama, tugas, pembimbing, waktu };
      setData([...data, newData]);
    }

    setKelas('');
    setNama('');
    setTugas('');
    setPembimbing('');
    setWaktu('');
  };

  const deleteData = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const updateData = (index) => {
    const itemToUpdate = data[index];
    setKelas(itemToUpdate.kelas);
    setNama(itemToUpdate.nama);
    setTugas(itemToUpdate.tugas);
    setPembimbing(itemToUpdate.pembimbing);
    setWaktu(itemToUpdate.waktu);
    setUpdateMode(true);
    setUpdateIndex(index);
  };

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
     
        <View style={styles.formContainer}>
          <Text style={styles.heading}>Bukti Kumpulkan Tugas Basketball</Text>
          <TextInput
            style={styles.input}
            placeholder="Kelas"
            value={kelas}
            onChangeText={(text) => setKelas(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nama"
            value={nama}
            onChangeText={(text) => setNama(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Tugas"
            value={tugas}
            onChangeText={(text) => setTugas(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Pembimbing"
            value={pembimbing}
            onChangeText={(text) => setPembimbing(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Waktu"
            value={waktu}
            onChangeText={(text) => setWaktu(text)}
          />

          <Button title={updateMode ? 'Update Data' : 'Add Data'} onPress={addOrUpdateData} />
          

          {data.map((item, index) => (
            <Card key={index} style={styles.card}>
              <Card.Content>
                <Text style={styles.cardText}>{`Kelas: ${item.kelas}`}</Text>
                <Text style={styles.cardText}>{`Nama: ${item.nama}`}</Text>
                <Text style={styles.cardText}>{`Tugas: ${item.tugas}`}</Text>
                <Text style={styles.cardText}>{`Pembimbing: ${item.pembimbing}`}</Text>
                <Text style={styles.cardText}>{`Waktu: ${item.waktu}`}</Text>
              </Card.Content>
              <Card.Actions>
                <TouchableOpacity onPress={() => deleteData(index)}>
                  <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateData(index)}>
                  <MaterialIcons name="update" size={24} color="black" />
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  card: {
    marginVertical: 10,
    elevation: 2,
    borderRadius: 8,
  },
  cardText: {
    marginBottom: 5,
  },
});

export default Basketball;
