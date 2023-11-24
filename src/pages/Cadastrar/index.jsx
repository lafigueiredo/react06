

import axios from "axios"
import { useEffect, useState } from "react"

export const Cadastrar = () =>{

    const [usuario, setUsuario] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [confirmarSenha, setConfirmarSenha] = useState()
    const  [senhaIncompativel, setSenhaIncompativel] = useState(false)
    const  [senhaFraca, setSenhaFraca] = useState(false)


    async function submitar(e){
        e.preventDefault()

        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        if(!regex.test(senha)){
            setSenhaFraca(true)
        }

        if(senha !== confirmarSenha){
            setSenhaIncompativel(true)
        }

        try{
            const {data} = await axios.post("http://127.0.0.1:5000/inserir_usuario", {nome:usuario, email:email, senha: senha})
            console.log(data);
        }
            catch(error){
            console.log(error);}

    }

    useEffect(()=>{
        setSenhaIncompativel(false)
        setSenhaFraca(false)
    },[senha, confirmarSenha])
    

    return(
        <form onSubmit={submitar}>
            <div>
                <label htmlFor="usuario">Usuário</label>
                <input onChange={(e)=> setUsuario(e.target.value)} type="text" name="usuario" id="usuario" placeholder="Digite seu usuário"/>
            </div>

            <div>
                <label htmlFor="email">E-mail</label>
                <input onChange={(e)=> setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Digite seu e-mail"/>
            </div>

            <div>
                <label htmlFor="senha">Senha</label>
                <input onChange={(e)=> setSenha(e.target.value)} type="password" name="senha" id="senha" placeholder="Digite sua senha"/>
            </div>
            {senhaFraca && <p>Senha fraca</p>}
            <div>
                <label htmlFor="confirmar">Confirmar Senha</label>
                <input onChange={(e)=> setConfirmarSenha(e.target.value)} type="password" name="confirmar" id="confirmar" placeholder="Digite novamente sua senha"/>
            </div>

            {senhaIncompativel && <p>Senhas incompatíveis</p>}

            <button>Enviar</button>
        </form>
    )
}
