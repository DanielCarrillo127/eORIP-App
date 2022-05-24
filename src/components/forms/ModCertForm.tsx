import React from "react";
import styled from "styled-components";

const FromContainer = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
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
// const ContainerWidget = styled.div`
//   background-color: rgb(255, 255, 255);
//   border-radius: 0.5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding-top: 1rem;
//   margin-top: 1rem;
//   padding-bottom: 1rem;
//   padding-left: 1.5rem;
//   padding-right: 1.5rem;
//   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
//     rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
// `;

const StyledInput = styled.input`
  outline: 0px;
  background: rgb(242, 242, 242);
  width: 100%;
  border: 1px;
  border-radius: 14px;
  margin: 0px 10px 15px 0px;
  cursor: pointer;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  font-size: 16px;
  &:focus {
    box-shadow: #4d8ae5 0px 2px 0px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const FormSection = styled.section`
  box-sizing: border-box;
  width: 25rem;
  padding: 20px;
  margin: 20px;
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  @media (max-width: 1220px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    margin-top: 10px;
    // border-top-right-radius:  0rem;
    // border-top-left-radius:  0rem;
    // border-bottom-right-radius:  0rem;
    // border-bottom-left-radius:  0rem;
  }
`;

const InputTitle = styled.label`
  box-sizing: border-box;
  display: block;
  margin-bottom: 4px;
  font-size: 16px;
  color: rgb(53, 60, 78);
`;

const InputContainerItem = styled.div`
  box-sizing: border-box;
  padding: 5px;
`;

const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 5px 10px;
  border-radius: 0.5rem;
  border: none;
  background: rgb(242, 242, 242);
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  outline: none;
  height: 122px;
  padding: 15px 10px;
  resize: none;
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

const StyledContact = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 0.875rem;
  float: left;
  padding-bottom: 1em;
`;
const StyledP = styled.p``;

const ModCertForm = () => {
  return (
    <>
      <FromContainer>
        <StyledContact>
          <StyledP>
            Formulario para Modificar Certificado de Transacciones.
          </StyledP>
        </StyledContact>
        <StyledForm action="">
          <FormSection>
            <InputContainerItem>
              <InputTitle>Consultar Matriculas de la Transacciones*</InputTitle>

              <StyledInput
                type="text"
                placeholder="Ingresa la cedula del ciudadano"
              />
              <Button>Consultar</Button>
            </InputContainerItem>
          </FormSection>
          <FormSection>
            <InputContainerItem>
              <InputTitle>Cedula del ciudadano nuevo*</InputTitle>
              <StyledInput
                type="text"
                placeholder="Ingresa la Cedula del ciudadano "
              />
            </InputContainerItem>
            <InputContainerItem>
              <InputTitle>Cedula del ciudadano actual*</InputTitle>
              <StyledInput
                type="text"
                placeholder="Ingresa la Cedula del ciudadano "
              />
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Costo*</InputTitle>

              <StyledInput type="text" placeholder="Ingresa el costo " />
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Descripción*</InputTitle>
              <StyledTextarea
                name="comments"
                id=""
                placeholder="Ingresa la Descripción"
              />
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Enrollment Number*</InputTitle>

              <StyledInput
                type="text"
                value={"rf4po4j54p54opfo4fpofj3f4fp44"}
              />
            </InputContainerItem>

            <Button>Registrar Modificación</Button>
          </FormSection>
        </StyledForm>
      </FromContainer>
    </>
  );
};

export default ModCertForm;
