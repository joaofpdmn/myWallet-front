import styled from "styled-components"
//flexstart

const WalletContainer = styled.div`
display: flex;
justify-content: ${props => props.value ? "center" : "flex-start" };
align-items: ${props => props.value ? "center" : "flex-start" };
width: 326px;
min-height: 486px;
background-color: white;
margin-top: 22px;
border-radius: 5px;
box-sizing: border-box;
padding: 10px;
flex-direction: column;

p{
    font-size: 20px;
    color: #868686;
    max-width: 180px;
    display: ${props => props.value ? "flex" : "none" };
}

h4{
    font-weight: 700;
    font-size: 17px;
}
`

export default WalletContainer;