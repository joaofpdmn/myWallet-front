import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Common/Button";
import Input from "../Common/Input";
import Padding from "../Common/Padding";
import UserContext from "../Context/UserContext";
import { setUserData } from "../Services/UserData";
import { LoginRequest } from "../Services/UserServices";

export default function Login() {
    const { login, setLogin } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (login !== null) {
            alert('Login encontrado! Estamos te transferindo para a tela inicial!');
            navigate('/home');
        }
    }, []);


    function handleSubmit(e) {
        e.preventDefault();
        const body = {
            email: email,
            password: password
        };
        const loginPromise = LoginRequest(body);
        loginPromise.then(response => {
            setLogin(response.data);
            setUserData(response.data);
            alert('Login realizado com sucesso!');
            navigate('/home');
        }).catch(e => {
            alert('Login inválido!');
            window.location.reload();
        })
    }

    return (
        <>
            <Padding value={160} />
            <div className="main-title">
                <p>MyWallet</p>
            </div>
            <Padding value={25} />
            <form onSubmit={handleSubmit}>
                <Input placeholder="E-mail" type="email" onChange={e => setEmail(e.target.value)} />
                <Input placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} />
                <Button type="submit">Entrar</Button>
            </form>
            <Link to='/signup'><a href="">Primeira vez? Cadastre-se!</a></Link>
        </>
    )
}