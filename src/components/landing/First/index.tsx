import React from 'react';
import styled from 'styled-components';
import { Down, Up } from '../../../pages/Landing';
import 화살표 from '../../svg/화살표';
const FirstWrapper = styled.div`
  height: 100vh;
  min-width: 900px;

  & > img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: top;
  }

  animation: fade 1s ease-in;

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  position: relative;
`;

function First() {
  return (
    <FirstWrapper>
      <img src='../images/하이_1.png' alt='이미지' />

      <Down>
        <화살표 />
      </Down>
    </FirstWrapper>
  );
}

export default First;
