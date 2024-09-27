'use client'

import { defaultValues, IFormLogin } from "@/app/models/login";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "No minimo 6 caracteres"),
  })
  .required();

export const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues,
        reValidateMode: "onChange",
    });

    const buttonStatus = isValid ? 'buttonContainer' : 'button-disabled';

    const onSubmit = handleSubmit(async (formData) => {
        try{
            console.log(formData);    
        }catch(e: unknown){
            //TODO: HOUVE UM ERRO
            console.log(e);
        }
    });
    

    console.log('errors', errors);

    return (
        <>
            <div className="container">
                <div className="loginContainer">
                    <div className="column">
                        <h1 className="title">Login</h1>
                        <form onSubmit={onSubmit}>
                            <div className="spacing"></div>
                            <div className='inputContainer'>
                                <input type='email' placeholder='E-mail' required {...register('email')}/>
                            </div>
                            <p className='errorMessage'>{errors?.email?.message}</p>
                            <div className="spacing"></div>
                            <div className='inputContainer'>
                                <input type='password' placeholder='Senha' required {...register('password')}/>
                            </div>
                            <p className='errorMessage'>{errors?.password?.message}</p>
                            <div className="spacing"></div>
                            <button className={buttonStatus} type='submit'>Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
