import styled, { keyframes } from 'styled-components';

const flash = keyframes`
  0% {
    transform: translateX(-105%);
  }
  100% {
    transform: translateX(105%);
  }
`;

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

    animation: ${flash} 0.8s infinite;
  }
`;

export default GhostLoader;
