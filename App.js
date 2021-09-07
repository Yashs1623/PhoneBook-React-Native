import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from './screens/ProfilePage'
import MyContacts from './screens/MyContacts'
import Profile from './screens/Profile'

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ProfilePage'>
        <Stack.Screen name='User Profile' component={ProfilePage}>
        </Stack.Screen>
        <Stack.Screen name='MyContacts' component={MyContacts}>
        </Stack.Screen>
        <Stack.Screen name='Profile' component={Profile}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

// const ProfilePage = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [address, setAddress] = useState('');
//   const [emailId, setEmailId] = useState('');
//   const [phoneNumbers, setPhoneNumbers] = useState('');
//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder='FirstName'
//           placeholderTextColor="white"
//           value={firstName}
//           onChangeText={(text) => setFirstName(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder='LastName'
//           placeholderTextColor="white"
//           value={lastName}
//           onChangeText={(text) => setLastName(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder='Address'
//           placeholderTextColor="white"
//           value={address}
//           onChangeText={(text) => setAddress(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder='EmailId'
//           placeholderTextColor="white"
//           value={emailId}
//           onChangeText={(text) => setEmailId(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder='Phone No.'
//           placeholderTextColor="white"
//           value={phoneNumbers}
//           onChangeText={(text) => setPhoneNumbers(text)}
//         />
//       </View>
//       <View style={styles.inputContainer}>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#0A0E21'
//   },
//   inputContainer: {
//     padding: 10,
//     margin: 10,
//   },
//   input: {
//     color: 'white',
//     borderBottomWidth: 0.5,
//     borderBottomColor: 'white',
//     padding: 10
//   }
// })

// export default ProfilePage