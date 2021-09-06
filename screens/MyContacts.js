import React, { useState, useEffect } from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    PermissionsAndroid,
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Contacts from 'react-native-contacts'
import { useIsFocused } from '@react-navigation/native'
import ContactCard from '../Components/ContactCard'


function MyContacts({ navigation }) {
    const [MyContacts, setMyContacts] = useState([]);
    const isFocused = useIsFocused(); //true or false deta hai ye function

    useEffect(() => {
        getAllContacts();
    }, [isFocused])

    async function getAllContacts() {
        try {
            const permission = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS
            );
            if (permission === 'granted') {
                const contacts = await Contacts.getAll();
                const sort_contact=contacts.sort((a, b) =>
                    a.displayName.toLowerCase() > b.displayName.toLowerCase()
                );
                setMyContacts(sort_contact);
            }
        } catch (error) {
            console.log(error);
        }
    }
    function createContact() {
        Contacts.openContactForm(Contacts);
    }
    return (
        <View style={styles.container}>
            <Ionicons
                name='add-circle'
                size={62}
                color='deepskyblue'
                style={styles.addIcon}
                onPress={() => { createContact(); }}>
            </Ionicons>
            <FlatList
                data={MyContacts}
                keyExtractor={(item) => item.recordID}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Profile', {
                        contactInfo: { id: item.recordID }
                    })} >
                        <ContactCard contactInfo={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0E21',
    },
    addIcon: {
        bottom: 20,
        right: 20,
        position: 'absolute',
        zIndex: 1,
    }
});

export default MyContacts