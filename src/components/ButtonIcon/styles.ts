import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100px;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.text};
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.main};
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
`

export const ButtonText = styled.Text`
    width: 350px;
    height: 50px;
    flex-direction: row;
    align-items: center;
    
`

export const Imagem = styled.Image`
    width: 24px;
    height: 24px;
`

/* export const Title = styled.Text`
    flex: 1px;
    font-size: 15px;
    text-align: center;
    color: ${({ theme }) => theme.colors.heading};
` */