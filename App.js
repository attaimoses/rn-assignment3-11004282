import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';
import { Avatar, IconButton, Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#f5f7fa', '#c3cfe2']}
        style={styles.background}
      >
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Avatar.Icon size={40} icon="account" style={styles.avatar} />
        </View>
        <Text style={styles.taskCount}>14 tasks today</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" />
          <IconButton
            icon="filter-variant"
            size={24}
            style={styles.filterButton}
          />
        </View>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categories}>
          <Card style={styles.categoryCard}>
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Exercise</Text>
            <Text style={styles.taskCount}>12 Tasks</Text>
          </Card>
          <Card style={styles.categoryCard}>
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Study</Text>
            <Text style={styles.taskCount}>12 Tasks</Text>
          </Card>
        </View>
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        <View style={styles.ongoingTask}>
          <Card style={styles.taskCard}>
            <Text style={styles.taskText}>Mobile App Development</Text>
          </Card>
          <Card style={styles.taskCard}>
            <Text style={styles.taskText}>Web Development</Text>
          </Card>
          <Card style={styles.taskCard}>
            <Text style={styles.taskText}>Push Ups</Text>
          </Card>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    padding: 20,
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
  avatar: {
    backgroundColor: '#f8b400',
  },
  taskCount: {
    marginTop: 5,
    fontSize: 16,
    color: '#555',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  filterButton: {
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    padding: 10,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ongoingTask: {
    marginTop: 20,
  },
  taskCard: {
    padding: 20,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
});
