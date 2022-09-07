import Button from "../Common/Button";
import Input from "../Common/Input";
import Padding from "../Common/Padding";

export default function SignUp() {
    return (
        <>
            <Padding value={95} />
            <div className="main-title">
                <p>MyWallet</p>
            </div>
            <Padding value={25} />
            <Input placeholder="Nome" />
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
            <Input placeholder="Confirme a senha" />
            <Button>Cadastrar</Button>
            <a href="">Já tem uma conta? Entre agora!</a>
        </>
    )
}