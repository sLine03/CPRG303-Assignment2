//Create new Post tab
import React, { useState } from 'react';
import { styles } from '../../components/styleSheet';
import { posts, connections } from '@/data/mockData';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const PostTab = () => {
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    // Mock posting cause im tired :(
    console.log("Post shared:", postText);
    setPostText(''); 
  };

  return (
    <SafeAreaView style={styles.post_container}>
      {/* Header Section */}
      <View style={styles.post_header}>
        <Text style={styles.post_headerTitle}>Share Post</Text>
        <TouchableOpacity 
          style={[styles.post_Button, { opacity: postText.length > 0 ? 1 : 0.5 }]} 
          disabled={postText.length === 0}
          onPress={handlePost}
        >
          <Text style={styles.post_ButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* Input Section */}
      <View style={styles.post_inputContainer}>
        <Image 
         source={{ uri: "https://randomuser.me/api/portraits/women/0.jpg" }}
          style={styles.headerProfileImage}
        />
        <TextInput
          placeholder="What do you want to talk about?"
          placeholderTextColor="#888"
          multiline
          style={styles.post_input}
          value={postText}
          onChangeText={setPostText}
        />
      </View>
    </SafeAreaView>
  );
};

export default PostTab;
