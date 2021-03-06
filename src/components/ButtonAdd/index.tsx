import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { Container, Icon } from './styles'


export function ButtonAdd({ ...rest}: TouchableOpacityProps) {
    return (
        <Container {...rest}>
            <Fontisto name="toggle-off" size={24} color="black" />
        </Container>
    )
}