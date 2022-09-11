import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Common/Header";
import WalletContainer from "../Components/WalletContainer";
import WalletItens from "../Components/WalletItens";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { itensRequest } from "../Services/UserServices";
import { Link } from "react-router-dom";


export default function WelcomePage() {
    const navigate = useNavigate();
    const { login } = useContext(UserContext);
    const [itens, setItens] = useState([]);
    function isEmpty(arr) {
        if (arr.length === 0) {
            return true;
        }
        return false;
    }
    useEffect(() => {
        const itensPromise = itensRequest();
        itensPromise.then(response => {
            setItens(response.data);
        }).catch((e) => {
            console.log(e.error);
        })
    }, []);

    let saldo = 0;
    itens.map((item, index) => {
        saldo += item.price;
    })
    /** if array.lenght===0 return não ha registros */
    const isArrEmpty = isEmpty(itens);
    console.log(login);
    return (
        <>
            <Header>
                <p>Olá, {login.name}</p>
                <ion-icon name="exit-outline"></ion-icon>
            </Header>
            <WalletContainer value={isArrEmpty}>
                <p>Não há registros de entrada ou saída</p>
                {itens.map((item, index) =>
                    <WalletItens value={isArrEmpty} date={item.date} name={item.name} price={item.price} />
                )}
                <SaldoContainer value={isArrEmpty}>
                    <h4>SALDO</h4>
                    <h5>{saldo}</h5>
                </SaldoContainer>
            </WalletContainer>
            <div className="row">
                <Link to="/entry/entrada">
                    <NewEntryButton>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova Entrada</p>
                    </NewEntryButton>
                </Link>
                <Link to="/entry/saida">
                    <NewEntryButton>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova Saída</p>
                    </NewEntryButton>
                </Link>
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
const SaldoContainer = styled.div`
    display: ${props => props.value ? "none" : "flex"};
    justify-content: space-between;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 5px;
`




