import React from "react";
import styled from "styled-components";

const StyledPlayBtn = styled.button`
  width: 160px;
  height: 160px;
  border-radius: 999px;
  border: none;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow:  0px -4px 0px 5px #243041 inset, 0px -12px 0px 11px #9d2df5 inset;
    margin-bottom: 57px;
`;

const PlayBtn = () => {
  return (
    <StyledPlayBtn>
      <img width={52} src="/images/icon-play.svg" alt="" />
    </StyledPlayBtn>
  );
};

export default PlayBtn;
