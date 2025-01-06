import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { colors } from '../../constants/Colors';
import { Header } from '@/components/header';

export default function Step(){
    return(
        <View>
           <Header step='step 1' title='Vamos Começar'/>
        </View>
    )
}