import React from 'react'
import { Icon } from '../ButtonAdd/styles'
import { Container, Content, Input } from './styles'


export function CPF() {
    return(
        <Container>
            <Content>
                <Input type="text" placeholder="CPF"/>
                
            </Content>
        </Container>
    )
}