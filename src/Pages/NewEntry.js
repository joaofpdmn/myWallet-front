import React, { useContext, useState } from "react";
import Header from "../Common/Header";
import Input from "../Common/Input";
import Button from "../Common/Button";
import Padding from "../Common/Padding";
import { useNavigate, useParams } from "react-router-dom";
import { itensEntryRequest } from "../Services/UserServices";
import UserContext from "../Context/UserContext";

export default function NewEntry() {
    const { id } = useParams();
    const [price, setPrice] = useState([]);
    const [name, setName] = useState([]);
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    Number(price);

    function handleSubmit(e){
        e.preventDefault();
        const body = {
            price: Number(price),
            name: name,
        };
        console.log(login.email);
        const entryPromise = itensEntryRequest(body, id);
        entryPromise.then(() => {
            alert(`${id} adicionada!`);
            navigate('/home/:id');
        }).catch(e => {
            console.log(e.error);
        });
    }
    return (
        <>
            <Header>
                <p>Nova {id}</p>
            </Header>
            <Padding value={40}/>
            <form onSubmit={handleSubmit}>
                <Input placeholder="Valor" type="number" onChange={e => setPrice(Number(e.target.value))}/>
                <Input placeholder="Descrição" type="text" onChange={e => setName(e.target.value)}/>
                <Button type="submit">Salvar {id}</Button>
            </form>
        </>
    )
}