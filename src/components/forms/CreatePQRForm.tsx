import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { createPQRSD } from "../../utils/request";

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
  height: 122px;
  padding: 15px 10px;
  resize: none;
  &:focus {
    box-shadow: #4d8ae5 0px 2px 0px;
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
const StyledOption = styled.option``;

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

const CreatePQRForm = () => {
  const [onLoading, setOnLoading] = useState(false);

  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [cedula, setCedula] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");

  const [applicationSite, setApplicationSite] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeCedula = (e: any) => setCedula(e.target.value);
  const handleChangeCity = (e: any) => setCity(e.target.value);
  const handleChangeTel = (e: any) => setTel(e.target.value);
  const handleChangeDescription = (e: any) => setDescription(e.target.value);
  const handleChangeType = (e: any) => setType(e.target.value);
  const handleChangeASite = (e: any) => setApplicationSite(e.target.value);
  const handleChangeAddress = (e: any) => setAddress(e.target.value);

  const handleRequest = async () => {
    setOnLoading(true);
    const req = await createPQRSD(
      cedula,
      description,
      type,
      tel,
      address,
      applicationSite,
      city
    );
    if (req.status === 200) {
      setType("");
      setCity("");
      setCedula("");
      setTel("");
      setAddress("");
      setApplicationSite("");
      setDescription("");
      setOnLoading(false);
      toast.success(`Petición exitosa.`, {
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
      toast.error(`Petición fue denegada, ${req.response.data.message}`, {
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

  return (
    <>
      <FromContainer>
        <StyledForm>
          <FormSection>
            <StyledContact>
              <StyledP>
                Formulario para Solicitud y Petición de Informes PQRSD.
              </StyledP>
            </StyledContact>
            <br />
            <br />
            <InputContainerItem>
              <InputTitle>Tipo*</InputTitle>
              <StyledSelect
                id="tipoSelect"
                onChange={handleChangeType}
                value={type}
              >
                <StyledOption value="" disabled>
                  Selecciona un Tipo
                </StyledOption>
                <StyledOption value="Peticion">Petición</StyledOption>
                <StyledOption value="Queja">Queja</StyledOption>
                <StyledOption value="Reclamo">Reclamo</StyledOption>
                <StyledOption value="Denuncia">Denuncia</StyledOption>
                <StyledOption value="Sugerencia">Sugerencia</StyledOption>
              </StyledSelect>
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Cedula*</InputTitle>

              <StyledInput
                type="text"
                placeholder="Ingresa la Cedula del Ciudadano "
                onChange={handleChangeCedula}
                value={cedula}
              />
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Telefono (opcional)</InputTitle>

              <StyledInput
                type="tel"
                placeholder="Ingresa el Telefono"
                onChange={handleChangeTel}
                value={tel}
              />
            </InputContainerItem>
            <InputContainerItem>
              <InputTitle>Dirección*</InputTitle>

              <StyledInput
                type="text"
                placeholder="Ingresa la Dirección"
                onChange={handleChangeAddress}
                value={address}
              />
            </InputContainerItem>
            <InputContainerItem>
              <InputTitle>Ciudad*</InputTitle>
              <StyledSelect
                id="citySelect"
                onChange={handleChangeCity}
                value={city}
              >
                <StyledOption value="" disabled>
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
              <InputTitle>Sitio de Aplicación*</InputTitle>
              <StyledSelect
                id="applicationSelect"
                onChange={handleChangeASite}
                value={applicationSite}
              >
                <StyledOption value="" disabled>
                  Selecciona un Lugar
                </StyledOption>
                <StyledOption value="Oficina de instrumentos publicos">
                  Oficina de instrumentos públicos
                </StyledOption>
                <StyledOption value="Notaria">Notaria</StyledOption>
                <StyledOption value="Curaduria">Curaduria</StyledOption>
                <StyledOption value="Gestor catastral">
                  Gestor Catastral
                </StyledOption>
              </StyledSelect>
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Descripción*</InputTitle>
              <StyledTextarea
                name="descripción"
                id=""
                placeholder="Ingresa una descripción"
                onChange={handleChangeDescription}
                value={description}
              />
            </InputContainerItem>
            <ButtonSpinner
              onClick={() => handleRequest()}
              load={onLoading}
              disabled={onLoading}
            >
              {onLoading ? "" : "Registrar PQRSD"}
              <Spinner load={onLoading} />
            </ButtonSpinner>
          </FormSection>
        </StyledForm>
      </FromContainer>
    </>
  );
};

export default CreatePQRForm;
