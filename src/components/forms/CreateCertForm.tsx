import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { createCertificateTIL } from "../../utils/request";
import { ContextActions, DataContext } from "../../utils/userContext";

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

const StyledSelect = styled.select`
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

const StyledForm = styled.div`
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
  height: 202px;
  padding: 15px 10px;
  resize: none;
  &:focus {
    box-shadow: #4d8ae5 0px 2px 0px;
  }
`;

// interface loading {
//   readonly loading: Boolean;
// }

interface load {
  readonly load: Boolean;
}

const Spinner = styled.div<load>`
  ${(props) =>
    props.load
      ? `
border-width: 4px; 
border-style: solid; 
border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgb(0, 153, 255);
 border-image: initial; 
 width: 26px; 
 height: 26px;
  border-radius: 50%; 
  animation: spin 1s ease infinite;  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }`
      : ``}
`;

const ButtonSpinner = styled.button<load>`
  background: ${(props) =>
    props.load
      ? `#d4d5d6`
      : `linear-gradient(
    305.36deg,
    #226fe1 10.86%,
    rgba(34, 111, 225, 0.4) 93.49%
  )`};
  color: ${(props) => (props.load ? `#000` : `#fff`)};
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
  ${(props) =>
    props.load
      ? ``
      : `&:hover {
    transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
    color: #fff;
    text-decoration: none;
  }`};
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

const StyledOption = styled.option``;

const CreateCertForm = () => {
  const { user } = React.useContext(DataContext) as ContextActions;
  const [onLoading, setOnLoading] = useState(false);

  const [cedulaOwner, setCedulaOwner] = useState("");
  const [cedulaAdmin, setCedulaAdmin] = useState(`${user?.cedula}`);
  const [valor, setValor] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeCedulaOwner = (e: any) => setCedulaOwner(e.target.value);
  const handleChangeCedulaAdmin = (e: any) => setCedulaAdmin(e.target.value);
  const handleChangeValor = (e: any) => setValor(e.target.value);
  const handleChangeCity = (e: any) => setCity(e.target.value);
  const handleChangeDescription = (e: any) => setDescription(e.target.value);

  const handleRequest = async () => {
    if (
      cedulaOwner !== "" &&
      cedulaAdmin !== "" &&
      valor !== "" &&
      city !== "" &&
      description !== ""
    ) {
       setOnLoading(true)
      const req = await createCertificateTIL(
        cedulaOwner,
        cedulaAdmin,
        description,
        valor,
        city
      );
      if (req.status === 201) {
        setCedulaOwner("");
        setValor("");
        setCity("");
        setDescription("");
        setOnLoading(false);
        toast.success(`✅ Certificado creado de forma exitoso.`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      } else {
        setOnLoading(false);
        toast.error(`${req.response.data.message}, error.`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error(
        `Debes completar todos los campos marcados con (*) para crear un Certificado.`,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  return (
    <>
      <FromContainer>
        <StyledForm>
          <FormSection>
            <StyledContact>
              <StyledP>
                Formulario para Crear Certificado de Transacciones.
              </StyledP>
            </StyledContact>
            <br/><br/>
            <InputContainerItem>
              <InputTitle>Cedula del ciudadano*</InputTitle>

              <StyledInput
                type="number"
                placeholder="Ingresa la cedula del Ciudadano"
                onChange={handleChangeCedulaOwner}
                value={cedulaOwner}
              />
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Cedula del administrador*</InputTitle>

              <StyledInput
                type="number"
                placeholder="Ingresa la cedula del Administrador"
                onChange={handleChangeCedulaAdmin}
                value={cedulaAdmin}
              />
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Valor del acto*</InputTitle>

              <StyledInput
                type="number"
                placeholder="Ingresa el valor de la Transacciones"
                onChange={handleChangeValor}
                value={valor}
              />
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Ciudad*</InputTitle>
              <StyledSelect id="citySelect" onChange={handleChangeCity} value={city}>
                <StyledOption value=""disabled >
                  Selecciona un Ciudad
                </StyledOption>
                <StyledOption value="Arauca">Arauca</StyledOption>
                <StyledOption value="Armenia">Armenia</StyledOption>
                <StyledOption value="Barranquilla">Barranquilla</StyledOption>
                <StyledOption value="Bogotá">Bogotá</StyledOption>
                <StyledOption value="Bucaramanga">Bucaramanga</StyledOption>
                <StyledOption value="Cali">Cali</StyledOption>
                <StyledOption value="Cartagena">Cartagena</StyledOption>
                <StyledOption value="Cúcuta">Cúcuta</StyledOption>
                <StyledOption value="Florencia">Florencia</StyledOption>
                <StyledOption value="Ibagué">Ibagué</StyledOption>
                <StyledOption value="Leticia">Leticia</StyledOption>
                <StyledOption value="Manizales">Manizales</StyledOption>
                <StyledOption value="Medellín">Medellín</StyledOption>
                <StyledOption value="Mitú">Mitú</StyledOption>
                <StyledOption value="Mocoa">Mocoa</StyledOption>
                <StyledOption value="Montería">Montería</StyledOption>
                <StyledOption value="Neiva">Neiva</StyledOption>
                <StyledOption value="Pasto">Pasto</StyledOption>
                <StyledOption value="Pereira">Pereira</StyledOption>
                <StyledOption value="Popayán">Popayán</StyledOption>
                <StyledOption value="Puerto Carreño">
                  Puerto Carreño
                </StyledOption>
                <StyledOption value="Puerto Inírida">
                  Puerto Inírida
                </StyledOption>
                <StyledOption value="Quibdó">Quibdó</StyledOption>
                <StyledOption value="Riohacha">Riohacha</StyledOption>
                <StyledOption value="San Andrés">San Andrés</StyledOption>
                <StyledOption value="San José del Guaviare">
                  San José del Guaviare
                </StyledOption>
                <StyledOption value="Santa Marta">Santa Marta</StyledOption>
                <StyledOption value="Sincelejo">Sincelejo</StyledOption>
                <StyledOption value="Tunja">Tunja</StyledOption>
                <StyledOption value="Valledupar">Valledupar</StyledOption>
                <StyledOption value="Villavicencio">Villavicencio</StyledOption>
                <StyledOption value="Yopal">Yopal</StyledOption>
              </StyledSelect>
            </InputContainerItem>
          </FormSection>
          <FormSection>
            <InputContainerItem>
              <InputTitle>Descripción de la Transacción*</InputTitle>
              <StyledTextarea
                name="DesTran"
                id="destran"
                placeholder="Ingresa la descripción de la Transacción "
                onChange={handleChangeDescription}
                value={description}
              />
            </InputContainerItem>

            <ButtonSpinner
              onClick={() => handleRequest()}
              load={onLoading}
              disabled={onLoading}
            >
              {onLoading ? "" : "Registrar Transacción"}
              <Spinner load={onLoading} />
            </ButtonSpinner>
          </FormSection>
        </StyledForm>
      </FromContainer>
    </>
  );
};

export default CreateCertForm;
