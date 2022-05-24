import React, { useState } from "react";
// import { toast } from "react-toastify";
import styled from "styled-components";

import { VscFilePdf } from "react-icons/vsc";
import { toast } from "react-toastify";
import { consultDocumentsEnrollmentNumber, consultDocumentsOwnerId } from "../../utils/request";

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
const StyledP = styled.p``;

// const StyledForm = styled.form``;

const FromContainerWidget = styled.div`
  display: flex;
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
  &:focus{
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

const TableContainer = styled.div`
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
  text-transform: uppercase;
  background-color: #4D8AE5;
  @media (max-width: 800px) {
    font-size: 0.60em;
  }
`;

const TableItemRow = styled.td`
  padding: 0.625em;
  text-align: center;
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

const PdfContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
  @media (max-width: 1200px) {
    display: none;
  }
`;
const DownloadATag = styled.a`
  font-size: 0.875rem;
  float: left;
  padding: 15px 0 0 0;
  display: none;
  @media (max-width: 1200px) {
    display: contents;
  }
`;

const ConsultForm = () => {
  const [cedula, setCedula] = useState("");
  const [EnrollmentNumber, setEnrollmentNumber] = useState("");

  const handleChangeUser = (e: any) => setCedula(e.target.value);

  const handleRequestEnrollmentNumber = async (EnrollmentNumber: string) => {
    const req = await consultDocumentsEnrollmentNumber(EnrollmentNumber);
    if (req.status === 200) {
      console.log(req);
      toast.success(`✅ exitoso.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    } else {
      console.log(req.response.data);
      toast.error(`${''} ,error.`, {
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

  const handleRequest = async (username: string) => {
    const req = await consultDocumentsOwnerId(username);
    if (req.status === 200) {
      console.log(req.data.certificados);
      toast.success(`✅ exitoso.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    } else {
      console.log(req.response.data);
      toast.error(`${''} ,error.`, {
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
          <TableContainer>
            <Table>
              <THead>
                <TableItem>
                  <TableHead scope="col">Column 1</TableHead>
                  <TableHead scope="col">Column 2</TableHead>
                  <TableHead scope="col">Column 3</TableHead>
                  <TableHead scope="col">Column 4</TableHead>
                  <TableHead scope="col">Column 5</TableHead>
                  <TableHead scope="col">Column 6</TableHead>
                </TableItem>
              </THead>

              <TBody>
                <TableItem>
                  <TableItemRow
                    data-label="Column 1"
                    onClick={() => console.log("click")}
                  >
                    data1
                  </TableItemRow>
                  <TableItemRow data-label="Column 2">data2</TableItemRow>
                  <TableItemRow data-label="Column 3">data3</TableItemRow>
                  <TableItemRow data-label="Column 4">data4</TableItemRow>
                  <TableItemRow data-label="Column 5">data5</TableItemRow>
                  <TableItemRow data-label="Column 6">
                    <VscFilePdf size={22} />
                  </TableItemRow>
                </TableItem>
                <TableItem>
                  <TableItemRow
                    data-label="Column 1"
                    onClick={() => console.log("click")}
                  >
                    data1
                  </TableItemRow>
                  <TableItemRow data-label="Column 2">data2</TableItemRow>
                  <TableItemRow data-label="Column 3">data3</TableItemRow>
                  <TableItemRow data-label="Column 4">data4</TableItemRow>
                  <TableItemRow data-label="Column 5">data5</TableItemRow>
                  <TableItemRow data-label="Column 6">
                    <VscFilePdf size={22} />
                  </TableItemRow>
                </TableItem>
                <TableItem>
                  <TableItemRow
                    data-label="Column 1"
                    onClick={() => console.log("click")}
                  >
                    data1
                  </TableItemRow>
                  <TableItemRow data-label="Column 2">data2</TableItemRow>
                  <TableItemRow data-label="Column 3">data3</TableItemRow>
                  <TableItemRow data-label="Column 4">data4</TableItemRow>
                  <TableItemRow data-label="Column 5">data5</TableItemRow>
                  <TableItemRow data-label="Column 6">
                    <VscFilePdf size={22} />
                  </TableItemRow>
                </TableItem>
                <TableItem>
                  <TableItemRow
                    data-label="Column 1"
                    onClick={() => console.log("click")}
                  >
                    data1
                  </TableItemRow>
                  <TableItemRow data-label="Column 2">data2</TableItemRow>
                  <TableItemRow data-label="Column 3">data3</TableItemRow>
                  <TableItemRow data-label="Column 4">data4</TableItemRow>
                  <TableItemRow data-label="Column 5">data5</TableItemRow>
                  <TableItemRow data-label="Column 6">
                    <VscFilePdf size={22} />
                  </TableItemRow>
                </TableItem>
              </TBody>
            </Table>
          </TableContainer>

          <PdfContainer>
            <object id="pdf" aria-labelledby="PdfObject"
              data={require("../../assets/salida.pdf")}
              type="application/pdf"
              width={850}
              height={850}
            ></object>
          </PdfContainer>
          <DownloadATag
            href={require("../../assets/salida.pdf")}
            download="archivo.pdf"
          >
            Tu dispositivo no puede visualizar los documentos, Click aqui para
            descargar.
          </DownloadATag>
        </ContainerWidget>
      </FromContainer>
    </>
  );
};

export default ConsultForm;

{
  /* {data.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value}</td>
                    <td>{value}</td>
                    <td>{value}</td>
                    <td>{value}</td>
                    <td></td>
                  </tr>
                );
              })}  */
}
