import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Common/Button";
import Input from "../Common/Input";
import Padding from "../Common/Padding";
import { signUpRequest } from "../Services/UserServices";

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const body = {
            name: name,
            email: email,
            password: password,
            repeatPassword: repeatPassword, 
            token: ''
        };
        const signUpPromise = signUpRequest(body);
        signUpPromise.then(response => {
            alert('Seu cadastro foi concluído. Estaremos retornando à tela de login!');
            navigate('/');
        }).catch(() => {
            alert('Erro, não conseguimos fazer seu cadastro. Tente novamente!');
        })
    }


    return (
        <>
            <Padding value={95} />
            <div className="main-title">
                <p>MyWallet</p>
            </div>
            <Padding value={25} />
            <form onSubmit={handleSubmit}>
                <Input placeholder="Nome" type="text" onChange={e => setName(e.target.value)}/>
                <Input placeholder="E-mail" type="email" onChange={e => setEmail(e.target.value)} />
                <Input placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)}/>
                <Input placeholder="Confirme a senha" type="password" onChange={e => setRepeatPassword(e.target.value)} />
                <Button type="submit">Cadastrar</Button>
            </form>
            <Link to='/'><a>Já tem uma conta? Entre agora!</a></Link>
        </>
    )
}