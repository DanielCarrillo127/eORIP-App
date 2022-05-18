import React, { useState } from "react";
// import { toast } from "react-toastify";
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
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
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
const StyledP = styled.p``;

// const StyledForm = styled.form``;

const FromContainerWidget = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
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

const ConsultForm = () => {
  const [cedula, setCedula] = useState("");

  const handleChangeUser = (e: any) => setCedula(e.target.value);

  const handleRequest = async (username: string) => {
    // const req = await login(username, password);
    // if (req.status === 200) {
    //   toast.success(`✅ exitoso.`, {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: false,
    //     draggable: true,
    //     progress: undefined,
    //     });
    // } else {
    //   console.log();
    //   toast.error(`${''} ,error.`, {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: false,
    //     draggable: true,
    //     progress: undefined,
    //     });
    // }
  };

  return (
    <>
      <FromContainer>
        <ContainerWidget>
          <StyledContact>
            <StyledP>Formulario para Consultar de certificados.</StyledP>
          </StyledContact>
          <FromContainerWidget>
            {/* <StyledForm id="FormConsult"> */}
              <StyledInput
                type="text"
                placeholder="Ingresa la Cédula del Ciudadano"
                onChange={handleChangeUser}
                required
              />
            {/* </StyledForm> */}
            <Button onClick={() => handleRequest(cedula)}>Consultar</Button>

          </FromContainerWidget>
        </ContainerWidget>
      </FromContainer>
    </>
  );
};

export default ConsultForm;
