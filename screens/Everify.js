import { Text, TouchableOpacity, View, ScrollView, Linking, TextInput } from "react-native";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import styles from "./screens.styles";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Evreify = () => {
    const [everify, setEverify] = useState('');
    const [documentData, setDocumentData] = useState([]);

    const formatInputText = (text) => {
        let formattedText = text.replace(/\D/g, '');
        if (formattedText.length > 0) {
            formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join('-');
        }

        setEverify(formattedText);
    };

    const searchTrackingId = async () => {
        console.log('in')
        try {
            const response = await fetch('http://api.datamarine.com/get-document', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: everify,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setDocumentData(jsonResponse);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    return (
        <View>
            <View style={styles.upperTitle}>
                <Text style={styles.upperTitleText}>E-Verify</Text>
            </View>

            <View style={styles.formZone}>
                <TextInput
                    style={styles.input}
                    onChangeText={formatInputText}
                    value={everify}
                    placeholder="Enter Number"
                    maxLength={14}
                />
            </View>

            <View style={styles.btnZone}>
                <TouchableOpacity style={styles.sendContactBtn} onPress={searchTrackingId}>
                    <Text style={styles.inputTxtBtn}>Search Document</Text>
                    <Ionicons name="search" size={18} color="white" />
                </TouchableOpacity>
            </View>

            {documentData?.length > 0 ?
                (
                    <View style={styles.docInfoZone}>
                        <Text>Title : {documentData[0]?.title}</Text>
                        <Text>Certificate : {documentData[0]?.certificate}</Text>
                        <Text>Imo Number : {documentData[0]?.imo_number}</Text>
                        <Text>Start Date : {documentData[0]?.start_date}</Text>
                        <Text style={{paddingBottom:15}}>End Date : {documentData[0]?.end_date}</Text>

                        <View style={styles.btnZone}>
                            <TouchableOpacity style={styles.seenCertBtn} onPress={() => Linking.openURL('https://datamarine.com/yonetim/uploads/documents_v/'+documentData[0]?.img_url)}>
                                <Text style={styles.inputTxtBtn}>See Sertificate</Text>
                                <Ionicons name="eye" size={18} color="white" />
                            </TouchableOpacity>
                        </View>

                    </View>
                )
                : null}

        </View>
    )
}


export default Evreify;