import { StyleSheet, Text, View, StatusBar, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'

// Create Mock Data for Main Page
// Connections (LinkedIn's version of stories)
const connections = [
  {
    id: "1",
    name: "Sarah Chen",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    title: "Software Engineer",
  },
  {
    id: "2",
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    title: "Product Manager",
  },
  {
    id: "3",
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    title: "UX Designer",
  },
  {
    id: "4",
    name: "James Wilson",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    title: "Data Scientist",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    title: "HR Manager",
  },
  {
    id: "6",
    name: "David Martinez",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    title: "Marketing Lead",
  },
];

// Posts
const posts = [
  {
    id: "1",
    username: "Sarah Chen",
    profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
    jobTitle: "Software Engineer at Google",
    postImage:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 245,
    comments: 18,
    caption: "Learning a new experience in our tech world! 🚀 #TechLife #Innovation",
    timePosted: "2h",
  },
  {
    id: "2",
    username: "Michael Brown",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    jobTitle: "Product Manager at Microsoft",
    postImage:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 189,
    comments: 24,
    caption: "Great team meeting today discussing our Q1 roadmap. Collaboration is key! 💼 #ProductManagement #Teamwork",
    timePosted: "5h",
  },
];

const MainPage = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={{uri:"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"}}
          style={styles.logo}
        />
        <Text style={styles.headerText}>LinkedIn Clone</Text>
      </View>

      {/* Connections Section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.connectionContainer}>
        {
          connections.map((connection) => (
            <View key={connection.id} style={styles.connection}>
              <Image 
                source={{ uri: connection.image}}
                style={styles.connectionImage}
              />
              <Text style={styles.connectionName}>{connection.name}</Text>
              <Text style={styles.connectionTitle}>{connection.title}</Text>
            </View>
          ))
        }
      </ScrollView>

      {/* Post Section */}
      <FlatList 
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({item}) => (
          <View style={styles.postContainer}>
            {/* User Info */}
            <View style={styles.userInfo}>
              <Image source={{uri: item.profileImage}} style={styles.profileImage} />
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
              <Image source={{uri: item.postImage}} style={styles.postImage} />
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
{/*updating */}
export default MainPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#F3F2EF",
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    marginRight: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0A66C2",
  }, 
  connectionContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  connection: {
    alignItems: "center",
    marginRight: 15,
    width: 80,
  },
  connectionImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#0A66C2",
    resizeMode: "cover",
  },
  connectionName: {
    marginTop: 5,
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
    width: 75,
  },
  connectionTitle: {
    fontSize: 9,
    textAlign: "center",
    color: "#666",
    width: 75,
    marginTop: 2,
  },
  postContainer: {
    marginBottom: 8,
    backgroundColor: "#fff",
    paddingBottom: 10,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  userName: {
    fontWeight: "600",
    fontSize: 15,
    color: "#000",
  },
  jobTitle: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  timePosted: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 12,
    marginBottom: 8,
  },
  userDetails: {
    flex: 1,
  },
  captionContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  caption: {
    fontSize: 14,
    color: "#000",
    lineHeight: 20,
  },
  postImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  engagementStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  statsText: {
    fontSize: 12,
    color: "#666",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 15,
    paddingTop: 8,
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  actionButtonText: {
    fontSize: 13,
    color: "#666",
    fontWeight: "500",
  },
})