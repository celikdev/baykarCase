import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, TextBox} from '../../components/main';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {getHeightPercentage} from '../../utils/Dimension';

const {width, height} = Dimensions.get('window');

interface LoginProps {
  navigation: any;
}

const Login = ({navigation}: LoginProps) => {
  const isAuth = useSelector((state: any) => state.auth.isAuth);

  console.log(isAuth);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      <View style={styles.formContainer}>
        <Formik
          initialValues={{phoneNumber: '', password: ''}}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <View>
                <TextBox
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={() => handleBlur('email')}
                  value={values.email}
                />
                <TextBox
                  placeholder="Şifre"
                  onChangeText={handleChange('password')}
                  onBlur={() => handleBlur('password')}
                  value={values.password}
                />
              </View>
              <Button title="Giriş Yap" onPress={handleSubmit} />
            </>
          )}
        </Formik>
        <Text style={styles.subText}>veya</Text>
        <Button title="Kayıt Ol" onPress={() => console.log('Asd')} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: getHeightPercentage(0.1),
    alignItems: 'center',
    gap: getHeightPercentage(0.04),
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Montserrat-ExtraBold',
  },
  formContainer: {
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    gap: getHeightPercentage(0.03),
  },
  subText: {
    fontSize: width * 0.03,
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
});
