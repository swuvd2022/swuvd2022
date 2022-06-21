import React from 'react';
import styled from 'styled-components';
const SecondWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;

  & > img {
    width: 50%;
    object-fit: fill;
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

const DescriptionWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  flex-direction: column;

  padding: 80px;
`;

const Title = styled.h1`
  margin-bottom: 72px;
`;

const Item = styled.div`
  display: flex;

  & > span:first-child {
    font-weight: bold;
  }

  gap: 16px;

  margin-bottom: 38px;
`;

const Description = styled.p`
  line-height: 2.58;
`;

function Second() {
  return (
    <SecondWrapper>
      <img src='../images/세로.png' alt='gkdl' />
      <DescriptionWrapper>
        <Title>Identity</Title>
        <Item>
          <span>고도순화 高度馴化</span>
          <span>:</span>
          <span>비로소 도달하여 우리는 흘러간다</span>
        </Item>
        <Description>
          우리는 같은 시작점에서 출발하지만, 결국 각자 예측불가한 루트로 자신이 선택한 ___를
          책임진다.
          <br />
          때때로 변하는 환경에 적응하려 하지만, 언제나 예측 불가의 상황에 놓이게 된다.
          <br />
          두려움과 좌절감이 수시로 엄습하지만 고도의 변화에 따른 환경에 순차적으로 적응하고,
          <br />
          비로소 고도순화를 거쳐 안정된 고지에 다다르게 된다.
          <br />
          우리는 평화롭게 흩어지는 구름처럼 각자 자유롭게 펼쳐나간다.
        </Description>
      </DescriptionWrapper>
    </SecondWrapper>
  );
}

export default Second;
