import React from "react";
import styled from "styled-components";
import PlayBtn from "./PlayBtn";
import Button from "../../../general/components/Button";

const StyledContainer = styled.div`
  min-height: 100%;
  padding-left: 25px;
  padding-right: 26px;
  background: url("/images/background-mobile.svg") no-repeat center/cover;
`;

const Menu = styled.div`
  border-radius: 72px;
  background: linear-gradient(180deg, #344aba 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow: 0px 6px 0px 8px #2463ff inset, 0px -8px 0px 4px #140e66 inset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Bu alohida bir container sifatida kelyapti
const Img = styled.img`
  position: absolute;
  top: -50px;
`;

const Home = () => {
  return (
    // Betta o'sha containerlar ishlatilyapti yani nomi bilan
    <StyledContainer>
        {/* Bu qamrovchi container */}
      <Menu>
        <img width={255} src="/images/logo.svg" alt="" />
        {/* Bu bizda yangi yaratilgan button */}
        <PlayBtn />
        <Button variant={"circular"}>how to play</Button>
      </Menu>
    </StyledContainer>
  );
};

export default Home;
