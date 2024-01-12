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
      // If update mode is active, update the existing data
      const updatedData = [...data];
      updatedData[updateIndex] = { kelas, nama, tugas, pembimbing, waktu };
      setData(updatedData);
      setUpdateMode(false);
      setUpdateIndex(null);
    } else {
      // If update mode is not active, add new data
      const newData = { kelas, nama, tugas, pembimbing, waktu };
      setData([...data, newData]);
    }

    // Clear input fields
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
          <Text style={styles.heading}>Bukti Kumpulkan Tugas Eskul Volley</Text>
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
                <Text>{`Kelas: ${item.kelas}`}</Text>
                <Text>{`Nama: ${item.nama}`}</Text>
                <Text>{`Tugas: ${item.tugas}`}</Text>
                <Text>{`Pembimbing: ${item.pembimbing}`}</Text>
                <Text>{`Waktu: ${item.waktu}`}</Text>
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
  },
  formContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  card: {
    marginVertical: 10,
  },
});

export default Basketball;
