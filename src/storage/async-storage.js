import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'tasks';

const getData = async () => {
    // JSON.parse transforma textos em objetos
    let data = JSON.parse(await AsyncStorage.getItem(key));

    // Se não houverem dados, preencher e salvar um array vazio
    if (data == null) {
        data = []
        setData(data)
    }
    return data
}

const setData = async (value) => {
    // JSON.stringify transforma objetos em textos
    await AsyncStorage.setItem(key, JSON.stringify(value));
}

export {
    getData,
    setData
}