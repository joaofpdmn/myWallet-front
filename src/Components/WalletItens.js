import React from "react";
import styled from "styled-components";

export default function WalletItens({ value, name, type, date, price }) {
    if (value) {
        return;
    }
    return (
        <Container> 
            <div>
                <h1>{date}</h1>
                <h2>{name}</h2>
            </div>
            <div><h3>{price}</h3></div>
        </Container>
    )
}

const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: space-between;
align-items: center;
font-size: 16px;

div{
    display: flex;
}

h1{
    color: #C6C6C6;
    padding-inline-end: 5px;
}

h3{
    color: ${props => props.type === 'debt' ? '#C70000' : '#03AC00'};
}

`