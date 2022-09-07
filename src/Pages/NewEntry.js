import React from "react";
import Header from "../Common/Header";
import Input from "../Common/Input";
import Button from "../Common/Button";
import Padding from "../Common/Padding";

export default function NewEntry({ text }){
    return(
        <>
        <Header>
            <p>Nova {text}</p>
        </Header>
        <Padding value={40}/>
        <Input placeholder="Valor"/>
        <Input placeholder="Descrição"/>
        <Button>Salvar {text}</Button>
        </>
    )
}