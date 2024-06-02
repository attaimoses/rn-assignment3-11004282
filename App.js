import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.tasks}>14 tasks today</Text>
        </View>
        <Image source={require('./assets/person.png')} style={styles.avatar} />
      </View>

      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('./assets/Group 2.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categories}>
        <View style={styles.category}>
          <Image source={require('./assets/young woman working online.png')} style={styles.categoryImage} />
          <Text style={styles.categoryTitle}>Exercise</Text>


          
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </View>
        <View style={styles.category}>
          <Image source={require('./assets/young woman working at desk.png')} style={styles.categoryImage} />
          <Text style={styles.categoryTitle}>Study</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <View style={styles.task}>
        <Text>Mobile App Development</Text>
      </View>
      <View style={styles.task}>
        <Text>Web Development</Text>
      </View>
      <View style={styles.task}>
        <Text>Push Ups</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f4ee',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tasks: {
    color: 'gray',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  filterButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#ff6347',
    borderRadius: 10,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    margin: 5,
  },
  categoryImage: {
    width: 50,
    height: 50,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTasks: {
    color: 'gray',
  },
  task: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginVertical: 5,
  },
});
