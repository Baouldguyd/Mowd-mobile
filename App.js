import React from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import MyWebComponent from './MyWebComponent';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <View style={styles.container}>
        <View style={styles.webComponentContainer}>
          <MyWebComponent />
        </View>

        <View style={styles.toolbar}>
          <TouchableOpacity style={styles.toolbarButton}>
            <Text style={styles.toolbarText}>Toolbar Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolbarButton}>
            <Text style={styles.toolbarText}>Toolbar Button 2</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webComponentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolbar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  toolbarButton: {
    padding: 10,
  },
  toolbarText: {
    fontSize: 16,
    color: '#333',
  },
});
