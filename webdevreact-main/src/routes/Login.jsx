import {useRef} from 'react';
import Portfolio from './Portifolio';

function Login(){

    //ele retorna uma referencia a um elemento ou componente
    const usuario=useRef();
    const senha=useRef();

    const getUsuario = sessionStorage.getItem('usuario');
    const getSenha = sessionStorage.getItem('senha');

    const handleSubmit=()=>{
        

            if(usuario.current.value == 'admin' && senha.current.value=='12345')
            {
                let token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2);

                sessionStorage.setItem("usuario","admin");
                sessionStorage.setItem("senha", token);
            }
            else{
                alert('usuario/senha invalidos');
            }

        
    }

    return(
        <>
        {getUsuario && getSenha ? (
            <Portfolio/>
        ):(
            <form  onSubmit={handleSubmit}> 
                <p>Usuario:
                    <input type="text" placeholder="Digite seu usuário" ref={usuario}></input>
                </p>
                <p>
                    Senha:
                    <input type="password" placeholder="Digite sua senha" ref={senha}></input>
                </p>
                <button type="submit">Entrar</button>  
            </form>  
        )}    
        </>
    )
}

export default Login