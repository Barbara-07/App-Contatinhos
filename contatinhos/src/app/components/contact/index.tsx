import { Text, TouchableOpacity } from "react-native"
import { styles } from './styles'
import { Avatar } from '../avatar'

export function Contact(){
    return  <TouchableOpacity style={styles.container}>
         <Avatar name="Pedroso"/>
         <Text style={styles.name}>Pedro</Text>
    </TouchableOpacity>
}


