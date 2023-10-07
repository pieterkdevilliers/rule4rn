import React, { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import colours from '../config/colours';
import PrimaryCard from '../components/PrimaryCard';
import CustomButtonSecondary from '../components/CustomButtonSecondary';
import AOLNavigator from '../navigation/AOLNavigator';
import routes from '../navigation/routes';

function AOLListScreen({navigation, route}) {
    const { user_id } = route.params;
    const [aols, setAols] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (!user_id) {
        console.log('User ID not available');
        // User ID is not available yet, return or render a loading indicator
        return;
      }
    fetch(`https://rule4be-fc4445b7e11b.herokuapp.com/snapshots/api/v1/aols/${user_id}`)
        .then((response) => {
        // Log the response before parsing it
        console.log('Response:', response);
        return response.json();
      })
      .then((data) => {
        // Update state with fetched data
        setAols(data); // Assuming 'data' is an array of AOLs
        setIsLoading(false); // Set loading state to false
      })
      .catch((error) => {
        console.error('Error fetching AOLs:', error);
      });
  }, [user_id]);

    // Conditional rendering when user_id is not available
    if (isLoading) {
        return (
          <SafeAreaView style={styles.background}>
            <View>
              <Text style={styles.screenLabel}>AOL List Screen</Text>
            </View>
            <Text>Loading...</Text>
          </SafeAreaView>
        );
      }
    
      return (
        <SafeAreaView style={styles.background}>
          <View>
            <Text style={styles.screenLabel}>AOL List Screen</Text>
          </View>
          {/* Render AOLs and other components here */}
        </SafeAreaView>
      );
    }

//     return (
//         <SafeAreaView style={styles.background}>
//             <View>
//                 <Text style={ styles.screenLabel}>AOL List Screen</Text>
//             </View>
//             <View style={styles.aolContainer}>
//                 <PrimaryCard title="AOL 1" onPress={() => navigation.navigate(routes.TODAY)} style={styles.buttonText}/>
//             </View>
//             <View style={styles.aolContainer}>
//                 <PrimaryCard title="AOL 2" onPress={() => navigation.navigate(routes.TODAY)} style={styles.buttonText}/>
//             </View>
//             <View style={styles.aolContainer}>
//                 <PrimaryCard title="AOL 3" onPress={() => navigation.navigate(routes.TODAY)} style={styles.buttonText}/>
//             </View>
//             <View style={styles.addAOLButton}>
//             <CustomButtonSecondary title="Add New AOL" onPress={() => navigation.navigate(routes.ADD_AOL)} style={styles.buttonText} />
                
//             </View>
//         </SafeAreaView>
//     );
// }

const styles = StyleSheet.create({
    aolContainer: {
        width: '90%',
        backgroundColor: colours.primary,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,

    },

    background: {
        flex: 1,
        backgroundColor: colours.black,
    },

    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colours.white,
        padding: 20,
    },

    addAOLButton: {
        width: '80%',
        height: 70,
        backgroundColor: colours.secondary,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    
    screenLabel: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colours.white,
        padding: 20,
        alignSelf: 'center',
    },
})

export default AOLListScreen;