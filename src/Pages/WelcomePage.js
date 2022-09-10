import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Common/Header";
import WalletContainer from "../Components/WalletContainer";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import WalletItens from "../Components/WalletItens";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { itensRequest } from "../Services/UserServices";
import { Link } from "react-router-dom";


export default function WelcomePage() {
    const navigate = useNavigate();
    const { login } = useContext(UserContext);
    const [items, setItems] = useState([]);
    dayjs.extend(customParseFormat);
    function timeCalculator() {
        return dayjs().format("DD/MM");
    }
    function isEmpty(arr) {
        if (arr.length === 0) {
            return true;
        }
        return false;
    }
    useEffect(() => {
        const itensPromise = itensRequest();
        itensPromise.then(response => {
            setItems(response.data);
        }).catch((e) => {
            console.log(e.error);
        })
    }, []);

    /** if array.lenght===0 return não ha registros */
    const itens = [{
        date: timeCalculator(),
        name: "salario",
        valor: Number(800),
        type: "entry"
    },
    {
        date: timeCalculator(),
        name: "camisa time",
        valor: Number(-75),
        type: "debt"
    }, {
        date: timeCalculator(),
        name: "maraca",
        valor: Number(-50),
        type: "debt"
    }];
    const isArrEmpty = isEmpty(itens);
    itens.map((item, index) => {
        if (item.valor < 0) {
            return item.valor * (-1);
        }
    })
    /**if entry === green
     * if saida === red
     */
    return (
        <>
            <Header>
                <p>Teste</p>
                <ion-icon name="exit-outline"></ion-icon>
            </Header>
            <WalletContainer value={isArrEmpty}>
                <p>Não há registros de entrada ou saída</p>
                {itens.map((item, index) =>
                    <WalletItens value={isArrEmpty} date={item.date} name={item.name} price={item.valor} type={item.type} />
                )}
                <div className="row-justify-content">
                    <h4>SALDO</h4>
                    <h5>500,45</h5>
                </div>
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




