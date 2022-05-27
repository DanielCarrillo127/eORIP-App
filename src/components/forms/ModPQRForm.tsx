import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { consultDocumentsOwnerId } from "../../utils/request";

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

const TableContainer = styled.div`
  padding-top: 10px;
  @media (max-width: 600px) {
    width: auto;
    height: 500px;
    overflow-y: scroll;
  }
`;

const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  @media (max-width: 600) {
    border: 0;
  }
`;

const THead = styled.thead`
  @media (max-width: 600px) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

const TBody = styled.tbody`
  @media (max-width: 600) {
  }
`;

const TableHead = styled.th`
  padding: 0.625em;
  text-align: center;
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: #4d8ae5;
  @media (max-width: 800px) {
    font-size: 0.6em;
  }
`;
const TableItemRow = styled.td`
  padding: 0.625em;
  text-align: center;
  text-overflow: clip;
  overflow: hidden;
  white-space: initial;
  font-size: 0.8em;
  &:hover {
    white-space: initial;
    overflow: scroll;
    // background-color:#fff;
  }
  @media (max-width: 600px) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
    text-overflow: ellipsis;
    overflow: hidden;
    &:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    &:last-child {
      border-bottom: 0;
    }
  }
`;
const TableItem = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
  @media (max-width: 600px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`;
const ButtonDownload = styled.button`
  background: linear-gradient(
    305.36deg,
    #226fe1 10.86%,
    rgba(34, 111, 225, 0.4) 93.49%
  );
  color: white;
  border-radius: 10px;
  outline: none;
  border: none;
  height: 32px;
  width: 62px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
    color: #fff;
    text-decoration: none;
  }
  @media (max-width: 600px) {
    float: right;
    width: auto;
  }
`;

const StyledOption = styled.option``;

interface loading {
  readonly loading: boolean;
}

const Spinner = styled.div<loading>`
  ${(props) =>
    props.loading
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

const ButtonSpinner = styled.button<loading>`
  background: ${(props) =>
    props.loading
      ? `#d4d5d6`
      : `linear-gradient(
    305.36deg,
    #226fe1 10.86%,
    rgba(34, 111, 225, 0.4) 93.49%
  )`};
  color: ${(props) => (props.loading ? `#000` : `#fff`)};
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
    props.loading
      ? ``
      : `&:hover {
    transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
    color: #fff;
    text-decoration: none;
  }`};
`;


const ModPQRForm = () => {
  const [cedula, setCedula] = useState("");
  const [status, setStatus] = useState("");
  const [EnrollmentNumber, setEnrollmentNumber] = useState("");
  const [data, setData] = useState([]);

  const [onLoading, setOnLoading] = useState(false);

  const handleChangeCedula = (e: any) => setCedula(e.target.value);
  const handleChangeStatus = (e: any) => setStatus(e.target.value);

  const handleRequest = async () => {
    const req = await consultDocumentsOwnerId(cedula);
    if (req.status === 200) {
      setData(req.data.certificados);
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
      toast.error(`${req.response.data} ,error.`, {
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

  const handleTable = () => {
    if (data.length > 0) {
      return (
        <>
          <TableContainer>
            <Table>
              <THead>
                <TableItem>
                  <TableHead scope="col">No. Matricula</TableHead>
                  <TableHead scope="col">Status</TableHead>
                  <TableHead scope="col">Fecha</TableHead>
                  <TableHead scope="col">Acciones</TableHead>
                </TableItem>
              </THead>

              <TBody>
                {data.map((value, index) => {
                  if (value[`type`] === "PQRSD") {
                    return (
                      <TableItem key={index}>
                        <TableItemRow data-label="No. Matricula">
                          {value[`enrollmentNumber`]}
                        </TableItemRow>
                        <TableItemRow data-label="Status">
                          {value[`status`]}
                        </TableItemRow>
                        <TableItemRow data-label="Fecha">
                          {value[`timeStamp`]}
                        </TableItemRow>
                        <TableItemRow data-label="Acciones">
                          <ButtonDownload
                            onClick={() =>
                              setEnrollmentNumber(value[`enrollmentNumber`])
                            }
                          >
                            Modificar
                          </ButtonDownload>
                        </TableItemRow>
                      </TableItem>
                    );
                  }
                })}
              </TBody>
            </Table>
          </TableContainer>
        </>
      );
    } else {
      return <></>;
    }
  };

  //set state spinner in modification
  const handleRequestModifications = async () => {};

  return (
    <>
      <FromContainer>
        <StyledForm>
          <FormSection>
            <StyledContact>
              <StyledP>Formulario para Modificar Informes PQRSD.</StyledP>
            </StyledContact>
            <InputContainerItem>
              <InputTitle>Consultar PQRSD Registrada*</InputTitle>

              <StyledInput
                type="text"
                placeholder="Ingresa la cedula del cliente"
                onChange={handleChangeCedula}
              />
              <Button onClick={() => handleRequest()}>Consultar</Button>
              {handleTable()}
            </InputContainerItem>
          </FormSection>
          <FormSection>
            <InputContainerItem>
              <InputTitle>Status*</InputTitle>
              <StyledSelect id="statusSelect" onChange={handleChangeStatus}>
                <StyledOption value="" selected disabled hidden>
                  Selecciona el Nuevo Status
                </StyledOption>
                <StyledOption value="creado">Creado</StyledOption>
                <StyledOption value="en proceso">En proceso</StyledOption>
                <StyledOption value="resuelto">Resuelto</StyledOption>
              </StyledSelect>
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Enrollment Number*</InputTitle>

              <StyledInput type="text" value={EnrollmentNumber} />
            </InputContainerItem>

            <ButtonSpinner onClick={() => handleRequestModifications()} loading={onLoading}
              disabled={onLoading}>
              {onLoading?'':'Registrar Modificación'}
              <Spinner loading={onLoading}/>
            </ButtonSpinner>
          </FormSection>
        </StyledForm>
      </FromContainer>
    </>
  );
};

export default ModPQRForm;
