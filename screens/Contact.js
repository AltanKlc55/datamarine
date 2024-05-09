import { Text, TouchableOpacity, View, ScrollView, Linking, TextInput } from "react-native";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import styles from "./screens.styles";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Contact = () => {
  const [data, setData] = useState([]);
  const [nameSurname, setNameSurname] = useState('');
  const [email, setEmail] = useState('');
  const [workPhone, setWorkPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sendStatus, setSendStatus] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch('http://api.datamarine.com/settings');
      const result = await response.json();
      setData(result.slice(-20));
    } catch (error) {
      console.error('Veri alınırken hata oluştu:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  function removeHtmlTags(text) {
    if (!text) return '';
    return text.replace(/\<[^>]*>/g, '');
  }

  const sendMessageHandler = async () => {
    console.log('in')
    try {
      const response = await fetch('http://api.datamarine.com/send-contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameSurname,
          email: email,
          work_phone: workPhone,
          subject: subject,
          message: message
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }else{
        setSendStatus(true);
      }
  
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  console.log(data);

  return (
    <View>
              <View style={styles.upperTitle}>
                   <Text style={styles.upperTitleText}>Contact</Text>
              </View>
      <View style={styles.contactZone}>
        <View style={styles.contentCard}>
          <TouchableOpacity style={styles.contentInner} onPress={() => Linking.openURL('whatsapp://send?phone=' + data[0]?.whatsapp)}>
            <FontAwesome name="whatsapp" size={45} color="#041a72" />
            <Text style={styles.cardBtnTxt}>Whatsapp</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentCard}>
          <TouchableOpacity style={styles.contentInner} onPress={() => Linking.openURL('tel:' + data[0]?.telefon)}>
            <FontAwesome name="phone" size={45} color="#041a72" />
            <Text style={styles.cardBtnTxt}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formZone}>

        <TextInput
          style={styles.input}
          onChangeText={setNameSurname}
          value={nameSurname}
          placeholder="Name Surname"
        />

        <TextInput
          style={styles.input}
          onChangeText={setWorkPhone}
          value={workPhone}
          placeholder="Work Phone"
        />

        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />

        <TextInput
          style={styles.input}
          onChangeText={setSubject}
          value={subject}
          placeholder="Subject"
        />

        <TextInput
          style={styles.input}
          onChangeText={setMessage}
          value={message}
          placeholder="Message"
        />

      </View>
       {sendStatus === true ? (<Text style={{textAlign:'center',paddingBottom:10,color:'green'}}>Your Message Has Been Sent Successfully</Text>) : null}
      <View style={styles.btnZone}>
        <TouchableOpacity style={styles.sendContactBtn} onPress={sendMessageHandler}>
          <Text style={styles.inputTxtBtn}>Send Message</Text>
          <Ionicons name="send" size={18} color="white" />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Contact;