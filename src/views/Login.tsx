import React, { useState } from "react";
import styled from "styled-components";
import { login, createUser } from "../utils/request";
import logo from "../assets/svgs/logo.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validator from "validator";
import { ContextActions, DataContext } from "../utils/userContext";

const LoginPage = styled.div`
  width: 100%;
  padding: 8% 0px 0px;
  background: linear-gradient(#226fe1, #fff);
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
  border: 1px;
  border-radius: 14px;
  margin: 0px 0px 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  &:focus{
    box-shadow: #4d8ae5 0px 2px 0px;
  }
`;
const StyledInputPassword = styled.input`
  outline: 0px;
  background: rgb(242, 242, 242);
  width: 100%;
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
  color: #4d8ae5;
`;

const ValidateMessage = styled.p`
  margin: 0px 0px 15px 10px;
  font-size: 12px;
  float: left;
`;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [cedula, setCedula] = useState("");
  const [validateP, setValidateP] = useState("");
  const [passwordValidation, setpasswordValidation] = useState(false);
  const [change, setChange] = useState(false);

  const handleChangeUser = (e: any) => setUsername(e.target.value);
  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
    validate(e.target.value);
  };
  const handleChangeNick = (e: any) => setNickname(e.target.value);
  const handleChangeEmail = (e: any) => setEmail(e.target.value);
  const handleChangeCedula = (e: any) => setCedula(e.target.value.toString());

  const { saveUser } = React.useContext(DataContext) as ContextActions;

  const validate = (value: string) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setpasswordValidation(true);
      setValidateP("La Contraseña es Segura. ✅");
    } else {
      setpasswordValidation(false);
      setValidateP("🚫 Debe contener al menos 8 Caracteres [a-A],Por lo menos 1 Numero [0-9] y un Carácter especial.");
    }
  };

  const handleLogin = async (username: string, password: string) => {
    const req = await login(username, password);
    if (req.status === 200) {
      saveUser(req.data.accesToken,req.data.info.cedula);
      toast.success(`✅ Bienvenido,${req.data.info.name} ${req.data.info.surnames}.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
      navigate("/userDashboard");
    } else {
      toast.warn(`${req.response.data.data} ,Revisa los datos ingresados.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
  };

  const handleRegister = async (
    username: string,
    password: string,
    nickname: string,
    email: string,
    cedula: string
  ) => {
    var emailValidation = false;
    var cedulaValidation = false;
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailValidation = true;
    } else {
      //toast email incorrect
        toast.error(`📬 Cuenta de correo Incorrecta.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
    if (4 < cedula.length && cedula.length <= 10) {
      cedulaValidation = true;
    } else {
      toast.error(`🪪 Cédula incorrecta,Verifica tu identificación`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
    if (
      emailValidation === true &&
      passwordValidation === true &&
      cedulaValidation === true
    ) {
      const surnames = username.split(" ");
      if (surnames.length > 2) {
        surnames[1] = surnames[1] + " " + surnames[2];
      }
      const req = await createUser(
        surnames[0],
        surnames[1],
        nickname,
        password,
        email,
        cedula
      );
      console.log(req);
      if (req.status === 201) {
        saveUser(req.data.token,cedula);
        navigate("/userDashboard");
      } else {
        //toast user already exist
        toast.error(`📑 Este ciudadano ya se encuentra registrado.`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          });
      }
    }
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
            <Title> Registro</Title>{" "}
            <StyledForm id="register">
              <StyledInput
                type="text"
                placeholder="Nombre & Apellido"
                required
                onChange={handleChangeUser}
              />
              <StyledInput
                type="text"
                placeholder="Username"
                required
                onChange={handleChangeNick}
              />
              {/* box message to inform the password structure */}
              <StyledInputPassword
                type="password"
                placeholder="Contraseña"
                required
                id="password"
                title="Username should only contain lowercase letters. e.g. john"
                onChange={handleChangePassword}
                style={{ borderColor: passwordValidation ? 'forestgreen' : 'red'}}
              />
              <ValidateMessage style={{ color: passwordValidation ? 'forestgreen' : 'red' }}>{validateP}</ValidateMessage> 
              <StyledInput
                type="email"
                placeholder="Correo electrónico"
                required
                onChange={handleChangeEmail}
              />
              <StyledInput
                type="number"
                placeholder="Cedula"
                required
                onChange={handleChangeCedula}
              />
            </StyledForm>
            <StyledButton
              onClick={() =>
                handleRegister(username, password, nickname, email, cedula)
              }
            >
              Crear Cuenta
            </StyledButton>
            <StyledP>
              Ya estas registrado?{" "}
              <StyledA onClick={() => setChange(!change)}>
                Inicia sesión
              </StyledA>
            </StyledP>
            <StyledP onClick={() => navigate("/")}>Vuelve al inicio</StyledP>
          </>
        ) : (
          <>
            <Title>Inicio de sesión</Title>
            <StyledForm id="login">
              <StyledInput
                type="text"
                placeholder="Nombre de usuario"
                onChange={handleChangeUser}
                required
              />
              <StyledInput
                type="password"
                placeholder="Contraseña"
                onChange={handleChangePassword}
                required
              />
            </StyledForm>
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
          </>
        )}
      </LoginForm>
    </LoginPage>
  );
};

export default Login;
