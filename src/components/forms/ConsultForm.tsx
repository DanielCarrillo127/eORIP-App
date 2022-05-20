import React, { useState } from "react";
// import { toast } from "react-toastify";
import styled from "styled-components";

import { VscFilePdf } from "react-icons/vsc";


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
  @media (max-width: 768px) {
    min-width: 0rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
  @media (max-width: 900px) {
    min-width: 0rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
  @media (max-width: 557px) {
    width: 70%;
    min-width: 0rem;
    margin-left: 1rem;
    margin-right: 1rem;
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
  box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
  @media (max-width: 767px) {
    &:before {
      content: "Scroll horizontally >";
      text-align: right;
      font-size: 12px;
      padding: 5px 10px 5px;
    }
  }
  @media (max-width: 507px) {
    width: 100%;
  }
`;

const Table = styled.table`
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
  @media (max-width: 767px) {
    display: block;
    width: 100%;
  }
`;

const TableHead = styled.th`
  text-align: center;
  padding: 8px;
  color: #000;
  background: #5992e5;

  &:nth-child(odd) {
    color: #000;
    background: #ccdce6;
  }
  @media (max-width: 767px) {
    display: block;
    &:last-child {
      border-bottom: none;
    }
    padding: 20px 0.625em 0.625em 0.625em;
    height: 60px;
    vertical-align: middle;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    width: 120px;
    font-size: 13px;
    text-overflow: ellipsis;
    text-align: left;
    border-bottom: 1px solid #f7f7f9;
  }
`;

const THead = styled.thead`
  color: #ffffff;
  background: #5992e5;

  &:nth-child(odd) {
    color: #ffffff;
    background: #ccdce6;
  }
  @media (max-width: 767px) {
    display: block;
    float: left;
  }
`;
const TBody = styled.tbody`
  @media (max-width: 767px) {
    display: block;
    width: auto;
    position: relative;
    overflow-x: auto;
  }
`;

const TableItemRow = styled.td`
  text-align: center;
  padding: 8px;
  border-right: 1px solid #f8f8f8;
  font-size: 12px;
  @media (max-width: 767px) {
    padding: 20px 0.625em 0.625em 0.625em;
    height: 60px;
    vertical-align: middle;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    width: 120px;
    font-size: 13px;
    text-overflow: ellipsis;

    &:nth-child(odd) {
      background: #f8f8f8;
      border-right: 1px solid #e6e4e4;
    }
    &:nth-child(even) {
      border-right: 1px solid #e6e4e4;
    }
    display: block;
    text-align: center;
  }
`;

const TableItem = styled.tr`
  &:nth-child(even) {
    background: #f8f8f8;
  }
  @media (max-width: 767px) {
    display: table-cell;
    &:nth-child(odd) {
      background: none;
    }
    &:nth-child(even) {
      background: transparent;
    }
  }
`;

const PdfContainer = styled.div`
  width: "100%";
  height: "100%";
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
          <TableContainer>
            <Table>
              <THead>
                <TableItem>
                  <TableHead>Column 1</TableHead>
                  <TableHead>Column 2</TableHead>
                  <TableHead>Column 3</TableHead>
                  <TableHead>Column 4</TableHead>
                  <TableHead>Column 5</TableHead>
                  <TableHead>Column 6</TableHead>
                </TableItem>
              </THead>

              <TBody>
                <TableItem>
                  <TableItemRow onClick={() => console.log("click")}>
                    data1
                  </TableItemRow>
                  <TableItemRow>data2</TableItemRow>
                  <TableItemRow>data3</TableItemRow>
                  <TableItemRow>data4</TableItemRow>
                  <TableItemRow>data5</TableItemRow>
                  <TableItemRow>
                    <VscFilePdf size={22} />
                  </TableItemRow>
                </TableItem>
                <TableItem>
                  <TableItemRow onClick={() => console.log("click")}>
                    data1
                  </TableItemRow>
                  <TableItemRow>data2</TableItemRow>
                  <TableItemRow>data3</TableItemRow>
                  <TableItemRow>data4</TableItemRow>
                  <TableItemRow>data5</TableItemRow>
                  <TableItemRow>
                    <VscFilePdf size={22} />
                  </TableItemRow>
                </TableItem>
                <TableItem>
                  <TableItemRow onClick={() => console.log("click")}>
                    data1
                  </TableItemRow>
                  <TableItemRow>data2</TableItemRow>
                  <TableItemRow>data3</TableItemRow>
                  <TableItemRow>data4</TableItemRow>
                  <TableItemRow>data5</TableItemRow>
                  <TableItemRow>
                    <VscFilePdf size={22} />
                  </TableItemRow>
                </TableItem>
                <TableItem>
                  <TableItemRow onClick={() => console.log("click")}>
                    data1
                  </TableItemRow>
                  <TableItemRow>data2</TableItemRow>
                  <TableItemRow>data3</TableItemRow>
                  <TableItemRow>data4</TableItemRow>
                  <TableItemRow>data5</TableItemRow>
                  <TableItemRow>
                    <VscFilePdf size={22} />
                  </TableItemRow>
                </TableItem>
              </TBody>
            </Table>
          </TableContainer>

          <PdfContainer>
            <object
              data={require("../../assets/salida.pdf")}
              type="application/pdf"
              width={800}
              height={800}
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
