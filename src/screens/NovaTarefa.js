import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { addData } from '../storage/async-storage';
import MaskInput from 'react-native-mask-input';

export default function NovaTarefa() {

    const navigation = useNavigation();

    const [ nome, setNome ] = useState('')
    const [ categotia, setCategotia ] = useState('prova')
    const [ descricao, setDescricao ] = useState('')
    const [ data, setData ] = useState('')

    const handleSave = async () => {
        const tarefa = {
            nome: nome,
            categoria: categotia,
            data: data,
            descricao: descricao,
            status: 'A fazer'
        };

        if (nome.trim() == '') {
            alert("Campo nome não preenchido")            
        }
        else if (descricao.trim() == '') {
            alert("Campo descrição não preenchido") 
        }
        else if (data.trim() == '') {
            alert("Campo data não preenchido") 
        }
        else {
            await addData(tarefa)
            alert("Nova tarefa cadastrada!")
            navigation.navigate('Home')
        }
    }

    return (
        <View>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Adicionar Tarefa</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.texto}>Nome da Tarefa:</Text>
                <TextInput style={styles.textInput} value={nome} onChangeText={texto => setNome(texto)} />

                <Text style={styles.texto}>Categotia da Tarefa:</Text>
                <Picker style={styles.textInput} selectedValue={categotia} onValueChange={texto => setCategotia(texto)}>
                    <Picker.Item label="Estudo" value="estudo" />
                    <Picker.Item label="Trabalho" value="trabalho" />
                    <Picker.Item label="Reunião" value="reuniao" />
                    <Picker.Item label="Prova" value="prova" />
                    <Picker.Item label="Aula" value="aula" />
                </Picker>

                <Text style={styles.texto}>Descrição da Tarefa:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Value'
                    multiline
                    numberOfLines={3}
                    value={descricao} onChangeText={texto => setDescricao(texto)}
                />

                <MaskInput 
                    style={styles.textDate}
                    placeholder='dd/mm/yyyy'
                    value={data} onChangeText={texto => setData(texto)}
                    mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                />

                <View style={styles.containerBotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
                        <Text style={styles.botaoTexto}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={() => {
                        handleSave()
                    }}>
                        <Text style={styles.botaoTexto}>OK</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cabecalho: {
        backgroundColor: 'blue',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    titulo: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    body: {
        padding: 15,
    },
    texto: {
        marginBottom: 5
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 15
    },
    textDate: {
        height: 60,
        borderWidth: 3,
        borderColor: 'indigo',
        borderRadius: 5,
        margin: 40,
        marginVertical: 30,
        padding: 15,
        backgroundColor: 'white'
    },
    containerBotao: {
        flexDirection: 'row',
        justifyContent: 'end'
    },
    botao: {
        padding: 15
    },
    botaoTexto: {
        color: 'indigo'
    }
});