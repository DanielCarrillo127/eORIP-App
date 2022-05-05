import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../utils/auth";
import { login } from "../utils/request";
import logo from "../assets/svgs/logo.svg";
import { useNavigate } from "react-router-dom";


const LoginPage = styled.div`
  width: 100%;
  padding: 8% 0px 0px;
  background: linear-gradient(#226FE1, #fff); 
  margin: auto;
  @media (max-width: 768px) {
    padding: 40% 0px 0px;
  }
`;

const LoginForm = styled.div`
  position: relative;
  z-index: 1;
  background: rgb(255, 255, 255);
  max-width: 360px;
  margin: 0px auto 100px;
  border-radius: 14px;
  padding: 45px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px 0px,
    rgba(0, 0, 0, 0.24) 0px 5px 5px 0px;
`;

const StyledForm = styled.form``;

const StyledInput = styled.input`
  outline: 0px;
  background: rgb(242, 242, 242);
  width: 100%;
  border: 0px;
  border-radius: 14px;
  margin: 0px 0px 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;

const StyledButton = styled.button`
  text-transform: uppercase;
  width: 80%;
  border-radius: 14px;
  outline: none;
  border: none;
  padding: 15px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  cursor: pointer;
  background: linear-gradient(
    305.36deg,
    #226fe1 10.86%,
    rgba(34, 111, 225, 0.4) 93.49%
  );
  &:hover {
    background: #3270c3;
    color: #fff;
    text-decoration: none;
  }
`;

const StyledP = styled.p`
  margin: 15px 0px 0px;
  color: rgb(179, 179, 179);
  font-size: 12px;
  cursor: pointer;
`;

const StyledA = styled.a`
  color: #4d8ae5;
  text-decoration: none;
  cursor: pointer;
`;

const ContainerName = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 22px;
  color: #4d8ae5;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center:
  display: flex;
  justify-content: center;
`;

const LogoName = styled.div`
  padding-top: 50px;
  padding-left: 10px;
`;

const Img = styled.img`
  margin-top: 10px;
  padding-top: 5px;
  width: 100px;
  height: 100px;
`;

const Title = styled.h1`
font-style: normal;
font-weight: 500;
font-size: 26px;
line-height: 22px;
color: #4D8AE5;
`;

const Login = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [cedula, setCedula] = useState("");

  const [change, setChange] = useState(false);

  const handleChangeUser = (e: any) => setUsername(e.target.value);
  const handleChangePassword = (e: any) => setPassword(e.target.value);
  const handleChangeNick = (e: any) => setNickname(e.target.value);
  const handleChangeEmail = (e: any) => setEmail(e.target.value);
  const handleChangeCedula = (e: any) => setCedula(e.target.value);


  const handleLogin = async (username: string, password: string) => {
    const req = await login(username, password);
    console.log(req);
    if (req.status === 200) {
      auth(req.data.data.token, false);
      navigate("/userDashboard");
    }
  };

  const handleRegister = async (username: string, password: string,nickname: string, email: string, cedula: string) => {

    // const req = await login(username, password);
    // console.log(req);
    // if (req.status === 200) {
    //   auth(req.data.data.token, false);
    //   navigate("/userDashboard");
    // }
  };

  return (
    <LoginPage>
      <LoginForm>
        <ContainerName>
          <Img src={logo} />
          <LogoName>
            eORIP <br /> OFFICE
          </LogoName>
        </ContainerName>
        {change ? (
          <>
          <Title> |Registro</Title>
            {" "}
            <StyledForm id="register">
              <StyledInput type="text" placeholder="Nombre & Apellido" required onChange={handleChangeUser}/>
              <StyledInput type="text" placeholder="Username" required onChange={handleChangeNick}/>
              <StyledInput type="password" placeholder="Contraseña" required onChange={handleChangePassword}/>
              <StyledInput type="email" placeholder="Correo electrónico" required onChange={handleChangeEmail}/>
              <StyledInput type="text" placeholder="Cedula" required onChange={handleChangeCedula}/>
              <StyledButton onClick={() => handleRegister(username, password,nickname,email,cedula)} >Crear Cuenta</StyledButton>
              <StyledP>
                Ya estas registrado?{" "}
                <StyledA onClick={() => setChange(!change)}>Inicia sesión</StyledA>
              </StyledP>
              <StyledP onClick={() => navigate("/")}>Vuelve al inicio</StyledP>
            </StyledForm>
          </>
        ) : (
          <>
            <Title>|Inicio de sesión</Title>
            <StyledForm id="login">
              <StyledInput
                type="text"
                placeholder="Nombre de usuario/cedula"
                onChange={handleChangeUser}
              />
              <StyledInput
                type="password"
                placeholder="Contraseña"
                onChange={handleChangePassword}
              />
              <StyledButton onClick={() => handleLogin(username, password)}>
                Iniciar sesión
              </StyledButton>
              <StyledP>
                No estas registrado?{" "}
                <StyledA onClick={() => setChange(!change)}>
                  Crea una cuenta
                </StyledA>
              </StyledP>
              <StyledP onClick={() => navigate("/")}>Vuelve al inicio</StyledP>
            </StyledForm>
          </>
        )}
      </LoginForm>
    </LoginPage>
  );
};

export default Login;
