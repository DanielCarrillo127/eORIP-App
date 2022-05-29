import React, { useState } from "react";
import styled from "styled-components";

const FromContainer = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: 56rem;
  min-width: 36rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  @media (max-width: 908px) {
    min-width: 0rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
  }
`;

const ContainerWidget = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
const StyledContact = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 0.875rem;
  float: left;
  padding-bottom: 1em;
`;

const StyledInput = styled.input`
  outline: 0px;
  background: rgb(242, 242, 242);
  width: 100%;
  border: 1px;
  border-radius: 14px;
  margin: 0px 10px 15px 0px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  &:focus {
    box-shadow: #4d8ae5 0px 2px 0px;
  }
`;

const Button = styled.button`
  background: linear-gradient(
    305.36deg,
    #226fe1 10.86%,
    rgba(34, 111, 225, 0.4) 93.49%
  );
  color: white;
  border-radius: 10px;
  outline: none;
  border: none;
  height: 42px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 12px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
    color: #fff;
    text-decoration: none;
  }
`;

const StyledP = styled.p``;

const Answer = styled.p`
margin: 0px;
padding: 0px;
letter-spacing: 1px;
text-align: justify;
text-justify: inter-word;
`;

const AdminForm = () => {
  const [cedula, setCedula] = useState("");
  const [success, setSuccess] = useState(false);
  const handleChangeUser = (e: any) => setCedula(e.target.value);

  const handleRequest = async (username: string) => {
    // const req = await consultDocumentsOwnerId(username);
    // if (req.status === 200) {
      // setCedula("");
    //   setSuccess(true);
    // }
  };

  return (
    <>
      <FromContainer>
        <ContainerWidget>
          <StyledContact>
            <StyledP>
              Formulario para Solicitud de Nuevos Administradores.
            </StyledP>
          </StyledContact>
          <StyledInput
            type="text"
            placeholder="Ingresa la Cédula del Ciudadano"
            onChange={handleChangeUser}
            required
          />
          {/* </StyledForm> */}
          <Button onClick={() => handleRequest(cedula)}>Consultar</Button>
          <br></br>
          <Answer>
            {success
              ? "Su solicitud ha sido procesada satisfactoriamente, Estamos validando su información para aceptar/Denegar su solicutd. De ser procesada satisfactoriamente su cuenta recibirá los permisos necesarios para acceder a recursos de administrador y enviaremos una notificación oficial via correo electrónico."
              : ""}
          </Answer>
        </ContainerWidget>
      </FromContainer>
    </>
  );
};

export default AdminForm;
