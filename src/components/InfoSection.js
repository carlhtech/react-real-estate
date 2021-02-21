import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Section = styled.section``;
const Conatiner = styled.div``;
const ColumnLeft = styled.div``;
const ColumnRight = styled.div``;

const InfoSection = () => {
  return (
    <Section>
      <Conatiner>
        <ColumnLeft>
          <h1>heading</h1>
          <p>paragraph</p>
          <p>paragraph</p>
          <Button to="/homes">label</Button>
        </ColumnLeft>
        <ColumnRight>
        <img src="" alt="home" />
        </ColumnRight>
      </Conatiner>
    </Section>
  );
};

export default InfoSection;
