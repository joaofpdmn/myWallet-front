import Button from "../Common/Button";
import Input from "../Common/Input";
import Padding from "../Common/Padding";

export default function Login() {
    return (
        <>
            <Padding value={160} />
            <div className="main-title">
                <p>MyWallet</p>
            </div>
            <Padding value={25} />
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
            <Button type="submit">Entrar</Button>
            <a href="">Primeira vez? Cadastre-se!</a>
        </>
    )
}