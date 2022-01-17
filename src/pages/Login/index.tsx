import { Flex, Heading, toast, VStack } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../context/Auth.Context";
import { useState } from "react";
import { Sign } from "crypto";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();
  const { signIn } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    setLoading(true);
    signIn(data)
      .then((_) => {
        history.push("/dashboard");
        setLoading(false);
      })
      .catch((err) => {
        toast({
          title: "Conta não encontrada.",
          description: "Tente se registrar clicando no botão Cadastro",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setLoading(false);
        reset();
      });
  };

  return (
    <Flex
      bgGradient="white"
      alignItems="center"
      justifyContent="center"
      height={["auto", "auto", "100vh", "100vh"]}
    >
      <Flex>
        <LoginForm
          errors={errors}
          handleSignIn={handleSubmit(handleSignIn)}
          loading={loading}
          register={register}
        />
        <VStack>
          <Heading>Aqui2</Heading>
        </VStack>
      </Flex>
    </Flex>
  );
};
