import React from 'react';
import styled from 'styled-components';

import { device } from '../helpers/device';

const ContainerStyled = styled.div`
  max-width: 640px;

  @media ${device.mobile} {
    max-width: 1024px;
  }

  @media ${device.tablet} {
    max-width: 1280px;
  }

  @media ${device.laptop} {
    max-width: 1536px;
  }
`;

const Container = ({ children, className }) => (
  <>
    <ContainerStyled className={className}>{children}</ContainerStyled>
  </>
);

export default Container;
