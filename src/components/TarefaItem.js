import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { removeData } from '../storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function TarefaItem(props) {

    let statusColor = 'orange';

    if (props.task.status == 'concluído') {
        statusColor = 'green';
    }

    const handleDelete = async () => {
        await removeData(props.task)
        props.setIsLoaded(true)
    }

    const navigation = useNavigation()

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => {
                navigation.navigate('NovaTarefa')
            }}
        >
            <Text style={styles.titulo}>{props.task.nome}</Text>
            <Text style={styles.data}>{props.task.data}</Text>
            <Text style={styles.categoria}>Categoria - {props.task.categoria}</Text>
            <View style={{ ...styles.status, backgroundColor: statusColor }}>
                <Text style={styles.textoStatus}>{props.task.status}</Text>
            </View>
            <TouchableOpacity style={styles.botaoExcluir} onPress={handleDelete()}>
                <MaterialCommunityIcons name="delete" size={32} color="#870d07" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18
    },
    data: {
        marginTop: 5,
        marginLeft: 3.5
    },
    categoria: {
        marginTop: 8
    },
    status: {
        backgroundColor: 'orange',
        width: 150,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 150
    },
    textoStatus: {
        color: 'white'
    },
    botaoExcluir: {
        position: 'absolute',
        right: 20,
        bottom: 35
    }
});