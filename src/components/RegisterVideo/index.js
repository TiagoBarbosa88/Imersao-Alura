import React from "react";
import { StyledRegisterVideo } from "./styles"

// Whiteboarding
// Custom Hook
function useForm(propsDoForm){
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
                const value = evento.target.value;
                const name = evento.target.name
                // console.log(value);
                setValues({
                    ...values,
                    [name]: value,
                });                       
            },
        clearForm(){
            setValues({})
        }    
        }
    }

export default function RegisterVideo(){
    const formCadastro = useForm({
        initialValues: { titulo: "Frost punk", url: "https://youtube.com/frostpunk" }
    });
    const [formVisivel, setFormVisivel] = React.useState(false);

    /*
    ## O que precisamos para form funcionar ?
    - pegar os dados, que precisam vir do state
        - titulo
        -url do video
    - precisamos ter um onSubmit do nosso form
    - Limpar o formulário após o submit

    */

    return (

        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
        {/* Ternário */}
        {/* Operadores de curto-circuito */}
            {formVisivel 
            ? (
               <form onSubmit = {(evento) => {
                    evento.preventDefault();
                    console.log(formCadastro.values);
                    setFormVisivel(false);
                    formCadastro.clearForm();
               }}>
                    <div>
                    <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                          X
                    </button>
                    <input 
                        placeholder="Título do video" 
                        name = "titulo"
                        value={formCadastro.values.titulo} 
                        onChange={formCadastro.handleChange} 
                    />            
                   <input 
                        placeholder="URL" 
                        name= "url"
                        value={formCadastro.values.url}
                        onChange={formCadastro.handleChange} 
                   />     
                    <button type="submit">
                        Cadastrar
                    </button>       
                    </div>
                </form>
                )
            : false} 
        </StyledRegisterVideo>
    )
}

   // [x] Falta botão para adicionar
    // [x] Modal
    // [ ] Precisamos controlar o state
    // -> Formulário em si