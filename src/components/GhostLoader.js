import styled from 'styled-components';

import { flashAnimation } from '../styles/Animation';

const GhostLoader = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 5;

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(
      90deg,
      rgba(211, 211, 211, 0) 0,
      rgba(211, 211, 211, 0.8) 50%,
      rgba(211, 211, 211, 0) 100%
    );

    animation: ${flashAnimation} 0.8s infinite;
  }
`;

export default GhostLoader;
