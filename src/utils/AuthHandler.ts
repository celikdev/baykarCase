import AsyncStorage from "@react-native-async-storage/async-storage"

const getData = async (key: string) => {
    const data = await AsyncStorage.getItem(key)
    return data
}

const setData = async (value: string, key: string) => {
    await AsyncStorage.setItem(key, value)
}

const clearStorage = async () => {
    await AsyncStorage.clear()
}

export { getData, setData, clearStorage }
