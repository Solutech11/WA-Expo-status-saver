import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';


const StatusScreen = () => {
    const [statusData, setStatusData] = useState([]);
    const getStatuses = async () => {
        const statusDirectory = `${FileSystem.cacheDirectory}WhatsApp/Media/.Statuses`;
      
        const { status } = await FileSystem.readDirectoryAsync(statusDirectory);
      
        setStatusData(status);
      };

      const downloadStatus = async (item) => {
        const statusDirectory = `${FileSystem.cacheDirectory}WhatsApp/Media/.Statuses`;
      
        const fileUri = `${statusDirectory}/${item}`;
      
        const fileExtension = item.split('.').pop();
      
        const newFileUri = `${FileSystem.documentDirectory}${item}.${fileExtension}`;
      
        await FileSystem.copyAsync({
          from: fileUri,
          to: newFileUri,
        });
      
        alert('Status downloaded!');
      };
      
      
      useEffect(() => {
        getStatuses();
      }, []);
      
  return (
    <View>
  <FlatList
    data={statusData}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => downloadStatus(item)}>
        <Image
          style={styles.statusImage}
          source={{ uri: `${FileSystem.cacheDirectory}WhatsApp/Media/.Statuses/${item}` }}
        />
      </TouchableOpacity>
    )}
  />
</View>

  )
}

export default StatusScreen

const styles = StyleSheet.create({
    statusImage: {
      width: 100,
      height: 100,
      margin: 10,
      borderRadius: 10,
    },
  });
  