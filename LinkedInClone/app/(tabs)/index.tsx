import { Text, View, Image, ScrollView, FlatList } from 'react-native';
import { StyleSheet, StatusBar, Platform } from 'react-native';
import { styles } from '@/components/styleSheet';
import { posts, connections } from '@/data/mockData';
import { Ionicons } from '@expo/vector-icons';


export default function HomeTab() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" }}
          style={styles.logo}
        />
        <Text style={styles.headerText}>LinkedIn Clone</Text>
      </View>

      {/* Post Section */}
      <FlatList 
        data={posts}
        keyExtractor={(post) => post.id}
        
        ListHeaderComponent={() => (
        <View> 
          <View style={styles.searchWrapper}>
            <Image 
                source={{ uri: "https://randomuser.me/api/portraits/women/0.jpg" }}
                style={styles.headerProfileImage}
              />
              <View style={styles.searchBarContainer}>
                <Text style={styles.searchText}>Search</Text>
              </View>
             <View style={styles.headerProfileImage}>
              <Ionicons name="chatbox-ellipses" size={26} color="#666" />
            </View>
            </View>
          {/* Connections Section moved inside Header*/}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            style={styles.connectionContainer}
          >
            {connections.map((connection) => (
              <View key={connection.id} style={styles.connection}>
                <Image 
                  source={{ uri: connection.image }}
                  style={styles.connectionImage}
                />
                <Text style={styles.connectionName}>{connection.name}</Text>
                <Text style={styles.connectionTitle} numberOfLines={1}>
                  {connection.title}
                </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            {/* User Info */}
            <View style={styles.userInfo}>
              <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
              <View style={styles.userDetails}>
                <Text style={styles.userName}>{item.username}</Text>
                <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                <Text style={styles.timePosted}>{item.timePosted} ago</Text>
              </View>
            </View>
            
            {/* Caption */}
            <View style={styles.captionContainer}>
              <Text style={styles.caption}>{item.caption}</Text>
            </View>

            {/* Post Image */}
            {item.postImage && (
              <Image source={{ uri: item.postImage }} style={styles.postImage} />
            )}

            {/* Engagement Stats */}
            <View style={styles.engagementStats}>
              <Text style={styles.statsText}>{item.likes} likes</Text>
              <Text style={styles.statsText}>{item.comments} comments</Text>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              <View style={styles.actionButton}>
                <Text style={styles.actionButtonText}>👍 Like</Text>
              </View>
              <View style={styles.actionButton}>
                <Text style={styles.actionButtonText}>💬 Comment</Text>
              </View>
              <View style={styles.actionButton}>
                <Text style={styles.actionButtonText}>🔄 Share</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}