import React from 'react';
import { theme } from '../../global/styles/theme'
import { 
    Container,
    AvatarImage
} from './styles';

interface AvatarProps {
    urlImage: string;
}

export function Avatar({ urlImage }: AvatarProps) {
    const { text, white } = theme.colors
    return (
        <Container
            colors={[text, white]}
        >
            <AvatarImage 
                source={ { uri: urlImage } }
            />

        </Container>
    )
}