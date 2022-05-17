import styled from "styled-components";
import Card from '../../components/reusables/Card';
import { GrCertificate } from "react-icons/gr";
import { GrDocumentPpt } from "react-icons/gr";

const StyledMenuIcon = styled.a`
  background-color: transparent;
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  color: inherit;
  text-decoration: inherit;
`;

const StyledDiv_22 = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const StyledDiv_23 = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  margin-left: auto;
  margin-right: auto;
  max-width: 56rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const StyledDiv_24 = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
`;

const StyledDiv_25 = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const StyledDiv_26 = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
`;

const StyledH2 = styled.h2`
  box-sizing: inherit;
  margin: 0px;
  border: 0px solid rgb(226, 232, 240);
  font-size: inherit;
  font-weight: inherit;
  font-size: 1.125rem;
`;

const StyledDiv_27 = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  margin-top: 0.5rem;
  color: rgb(74, 85, 104);
  font-size: 0.875rem;
`;

const StyledDiv_28 = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  margin-top: 1rem;
`;

const StyledDiv_29 = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  background-color: rgb(255, 255, 255);
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const StyledDiv_30 = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: uppercase;
`;

const StyledP = styled.p`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
`;

const StyledDiv_31 = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  font-weight: 600;
  margin-left: 0.75rem;
  color: rgb(113, 128, 150);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Services = () => {
  return (
    <>
      <StyledDiv_22>
        <StyledDiv_23>
          <StyledDiv_24>
            <StyledDiv_25>
              <StyledDiv_26>
                <StyledH2>
                  Panel de servicios
                </StyledH2>
                
              </StyledDiv_26>

              {/**/}
            </StyledDiv_25>

            <StyledDiv_28>
              <StyledDiv_29>
                <Card title="Certificados de tradición y libertad" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque augue." icon={<GrCertificate size={30}/>} />
                {/* <Card title="PQRSD" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque augue." icon={<GrDocumentPpt size={30}/>} /> */}
              </StyledDiv_29>
            </StyledDiv_28>
            

          </StyledDiv_24>
        </StyledDiv_23>
      </StyledDiv_22>
    </>
  );
};

export default Services;