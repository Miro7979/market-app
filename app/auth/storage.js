import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';
const key = 'authToken';

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log('token error', error)
  }
}

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('gettoken error', error);
  }
}

const getUser = async () => {
  try {
    const token = await getToken();
    return token ? jwtDecode(token) : null;

  } catch (error) {
    console.log(error);
  }
}

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('remove token', error);

  }
}
export default {
  getToken,
  getUser,
  storeToken,
  removeToken

}