import { keyframes } from 'styled-components';

export const spinAnimation = keyframes`
{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

export const flashAnimation = keyframes`
  0% {
    transform: translateX(-105%);
  }
  100% {
    transform: translateX(105%);
  }
`;
