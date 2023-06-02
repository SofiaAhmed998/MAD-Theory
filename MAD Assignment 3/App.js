import React, { useState } from "react";
import { Button, View,Text,StyleSheet ,TextInput,TouchableOpacity,Picker} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



function HomeScreen({ navigation }) {

React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() =>  alert('Link to help')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="help-circle-outline" size={24} color="white" style={{ marginRight: 5 }} />
            <Text style={{ color: 'purple', marginRight: 10 }}></Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, 
  );
  
  return (
   <View style={styles.container}>
     <Text style={styles.text}>Welcome</Text>
    
      <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Login")}
    >
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Add Account")}
    >
      <Text style={styles.buttonText}>Create Account</Text>
    </TouchableOpacity>
    </View>
  );
}

function ProfileScreen({ route}) {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Profile Screen</Text>
    <Text>Name: {route.params.name}</Text>
    <Text>Email: {route.params.email}</Text>
    <Text>Password: {route.params.password}</Text>
    <Text>Phone No: {route.params.phone}</Text>
    <Text>Gender: {route.params.gender}</Text>
    <Text>Age: {route.params.age}</Text>
    <Text>City: {route.params.city}</Text>
  </View>
  );
}

function LoginScreen({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    // Perform login logic here
    // For now, navigate to the Profile screen with name and password as params
    navigation.navigate("Profile", { name,password});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
     />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}



function CreateAccountScreen({ navigation }) {
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const handleSignup = () => {
    // Perform signup logic here
    // For now, navigate to the Profile screen with signup information as params
    navigation.navigate("Profile", { name, email, password, phone, gender, age, city });
  };
  return (
   <View style={styles.container}>
      <Text style={styles.text}>CreateAccountScreen</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTe
        xtEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone No"
        value={phone}
        onChangeText={setPhone}
      />
      <Picker
        selectedValue={gender}
        onValueChange={setGender}
        style={styles.input}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          headerStyle: {
            backgroundColor: 'purple',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Drawer.Screen name="Profile" component={ProfileScreen}  options={{
          headerStyle: {
            backgroundColor: 'purple',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
         <Drawer.Screen name="Login" component={LoginScreen}  options={{
          headerStyle: {
            backgroundColor: 'purple',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
           <Drawer.Screen name="Create Account" component={CreateAccountScreen}  options={{
          headerStyle: {
            backgroundColor: 'purple',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
          
            



      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    width: 200,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "purple",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  
 
});