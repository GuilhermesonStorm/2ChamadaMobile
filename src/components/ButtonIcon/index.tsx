import React from "react";
import { TouchableOpacityProps } from 'react-native'
import arrow from '../../../assets/arrow.png';


import { 
    Container,
    ButtonText,    
    Imagem,
    
} from "./styles";

interface Props extends TouchableOpacityProps {
    title?: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <>
            <Container {...rest}>
                <ButtonText>
                    Acessar {'\n'}
                    sua conta

                </ButtonText>

            
            </Container>
            <Container {...rest}>
                <ButtonText>
                    Atendimento

                </ButtonText>

            
            </Container>
            <Container {...rest}>
                <ButtonText>
                   ID Santander

                </ButtonText>

        
            </Container>
        </>
    )
}