import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {getHeightPercentage, getWidthPercentage} from '../../utils/Dimension';
import {Formik} from 'formik';
import {Button, Dropdown, TextBox} from '../../components/main';
import {launchImageLibrary} from 'react-native-image-picker';
import {AddImage} from '../../assets/icons';
import DatePicker from 'react-native-date-picker';
import {registerSchema} from '../../utils/validation/registerSchema';

const Register = ({navigation}: any) => {
  const initialValues = {
    name: '',
    surname: '',
    country: '',
    city: '',
    idNumber: '',
    phoneNumber: '',
  };

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [imageUri, setImageUri] = useState('');

  const [data, setData] = useState(['Türkiye', 'Almanya', 'Fransa', 'İtalya']);
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <View
                style={{
                  alignItems: 'center',
                  width: '90%',
                }}>
                <Text
                  style={{
                    color: 'black',
                    backgroundColor: 'red',
                    width: '100%',
                  }}>
                  {errors.name || errors.surname || errors.idNumber}
                </Text>
                <TouchableOpacity
                  style={styles.selectImage}
                  onPress={() =>
                    launchImageLibrary({mediaType: 'photo'}, (image: any) => {
                      image.assets[0] && setImageUri(image.assets[0].uri);
                    })
                  }>
                  {imageUri ? (
                    <Image
                      source={{uri: imageUri}}
                      style={{width: 140, height: 140, borderRadius: 140}}
                    />
                  ) : (
                    <AddImage />
                  )}
                </TouchableOpacity>
                <TextBox
                  placeholder="Ad"
                  onChangeText={handleChange('name')}
                  onBlur={() => handleBlur('name')}
                  value={values.name}
                />
                <TextBox
                  placeholder="Soyad"
                  onChangeText={handleChange('surname')}
                  onBlur={() => handleBlur('surname')}
                  value={values.surname}
                />
                <View
                  style={{
                    width: getWidthPercentage(0.8),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Dropdown placeholder="Ülke" showArrow data={data} />
                  <Dropdown placeholder="Şehir" showArrow />
                </View>
                <TextBox
                  maxLength={11}
                  placeholder="T.C Kimlik Numarası"
                  onChangeText={handleChange('idNumber')}
                  onBlur={() => handleBlur('idNumber')}
                  value={values.idNumber}
                />
                <TextBox
                  placeholder="Telefon Numarası"
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={() => handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                />
                {/* <Dropdown
                  placeholder="Cinsiyet"
                  width="100%"
                  showArrow={false}
                />
                <DatePicker
                  mode="date"
                  modal
                  date={date}
                  onConfirm={date => {
                    setDate(date);
                    setShow(false);
                  }}
                  onCancel={() => setShow(false)}
                />
                <TextBox
                  placeholder="Cinsiyet"
                  onChangeText={handleChange('surname')}
                  onBlur={() => handleBlur('surname')}
                  value={values.surname}
                /> */}
              </View>
            </>
          )}
        </Formik>
        <Button
          title="Devam Et"
          onPress={() => navigation.navigate('JobInformation')}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: getHeightPercentage(0.05),
    backgroundColor: 'white',
    alignItems: 'center',
    gap: getHeightPercentage(0.04),
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Montserrat-ExtraBold',
  },
  formContainer: {
    width: getWidthPercentage(0.9),
    justifyContent: 'center',
    alignItems: 'center',
    gap: getHeightPercentage(0.03),
  },
  subText: {
    fontSize: getWidthPercentage(0.03),
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
  selectImage: {
    width: 140,
    height: 140,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 140,
  },
});
