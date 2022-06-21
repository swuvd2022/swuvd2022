import React from 'react';
import styled from 'styled-components';
const FirstWrapper = styled.div`
  height: 100vh;

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
`;

function First() {
  return (
    <FirstWrapper>
      <img src='../images/하이_1.png' alt='이미지' />
    </FirstWrapper>
  );
}

export default First;
