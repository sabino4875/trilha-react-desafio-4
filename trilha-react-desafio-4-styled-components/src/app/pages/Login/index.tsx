'use client'

import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";
import { ErrorMessage, Form, Input, InputContainer } from "@/app/components/Input/styles";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "No minimo 6 caracteres"),
  })
  .required();

const Login = () => {
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

  const onSubmit = handleSubmit(async (formData) => {
    try{
        console.log(formData);    
    }catch(e: unknown){
        //TODO: HOUVE UM ERRO
        console.log(e);
    }
  });

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Form onSubmit={onSubmit}>
            <InputContainer>
              <Input type="email" placeholder="E-mail" {...register('email')}/>
            </InputContainer>
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
            <Spacing />
            <InputContainer>
              <Input type="password" placeholder="Senha" {...register('password')}/>
            </InputContainer>
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
            <Spacing />
            <Button isValid={isValid} title="Entrar" />
          </Form>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
