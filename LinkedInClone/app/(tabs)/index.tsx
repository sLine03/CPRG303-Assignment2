import { Text, View, Image, ScrollView, FlatList } from 'react-native';
import { StyleSheet, StatusBar, Platform } from 'react-native';
import { styles } from '@/components/styleSheet';
import { posts, connections } from '@/data/mockData';

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
          /* Connections Section moved inside Header*/
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