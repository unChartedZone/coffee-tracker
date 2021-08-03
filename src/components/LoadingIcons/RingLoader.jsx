import React from 'react';
import styled from 'styled-components';

import { spinAnimation } from '../../styles/Animation';

const LoadingStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingRing = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid var(--black);
    border-radius: 50%;
    animation: ${spinAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--black) transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
const RingLoader = () => (
  <LoadingStyled>
    <LoadingRing>
      <div />
      <div />
      <div />
      <div />
    </LoadingRing>
  </LoadingStyled>
);

export default RingLoader;
