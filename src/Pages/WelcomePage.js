import React from "react";
import styled from "styled-components";
import Header from "../Common/Header";
import WalletContainer from "../Common/WalletContainer";

export default function WelcomePage() {
    return (
        <>
            <Header>
                <p>Teste</p>
                <ion-icon name="exit-outline"></ion-icon>
            </Header>
            <WalletContainer>
                <p>teste</p>
            </WalletContainer>
            <div className="row">
                <NewEntryButton>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova Entrada</p>
                </NewEntryButton>
                <NewEntryButton>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova Saída</p>
                </NewEntryButton>
            </div>
        </>
    );
}

const NewEntryButton = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 155px;
height: 114px;
background-color: #A328D6;
margin-top: 15px;
border-radius: 5px;
color: white;
box-sizing: border-box;
padding: 10px;

p{
    font-weight: 700;
    display: flex;
    word-wrap: wrap;
    max-width: 64px;
}
`


