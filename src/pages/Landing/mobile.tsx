import styled from 'styled-components';
import PageTemplate from '../../components/common/PageTemplate';
import 화살표모바일 from '../../components/svg/화살표모바일';
const Container = styled.div`
  display: flex;

  flex-direction: column;

  color: ${({ theme }) => theme.brandColor_1};

  min-width: 360px;
`;

const FirstWrapper = styled.div`
  height: 90vh;

  & > img {
    width: 100%;

    min-height: 80vh;
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

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SecondWrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  & > section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & > section > p {
    line-height: 32px;
  }

  gap: 34px;

  padding: 24px;
`;

const Title = styled.h1`
  font-size: 1rem;

  line-height: 32px;
`;

const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(6, 1fr);

  gap: 10px;
`;

const GridNameText = styled.span`
  word-break: keep-all;
`;

const ProfessorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 20px;

  & > div {
    width: 100%;
    display: flex;

    justify-content: space-between;
  }
`;

const ProfessorName = styled.div`
  display: flex;

  word-break: keep-all;

  gap: 10px;

  & > h3 {
    font-size: 1rem;
  }

  & > span {
    white-space: nowrap;
  }
`;

const WaitingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    display: flex;

    flex-wrap: wrap;

    gap: 15px;
  }

  & > div > section {
    display: flex;

    justify-content: space-between;

    flex-wrap: nowrap;
    gap: 10px;
  }

  & h3 {
    font-size: 1rem;

    white-space: nowrap;

    width: 20px;

    margin-right: 60px;
  }
`;

const DeveloperContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    & > :first-child {
      margin-right: 20px;
    }
    & > h3 {
      font-size: 1rem;
      width: 20px;
      font-weight: 500;

      word-break: keep-all;
    }
    & > span {
      word-break: keep-all;
    }
  }

  & .up {
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
      transform: rotate(180deg);
    }
  }
`;

function LandingMobile() {
  return (
    <PageTemplate>
      <Container>
        <FirstWrapper>
          <img src='../images/세로.png' alt='이미지' />

          <화살표모바일 />
        </FirstWrapper>
        <SecondWrapper>
          <section>
            <Title>Identity</Title>

            <p>
              <b>고도순화 高度馴化</b> : 비로소 도달하여 우리는 흘러간다
              <br />
              우리는 같은 시작점에서 출발하지만, 결국 각자 예측불가한 루트로 자신이 선택한 ___를
              책임진다. 때때로 변하는 환경에 적응하려 하지만, 언제나 예측 불가의 상황에 놓이게 된다.
              두려움과 좌절감이 수시로 엄습하지만 고도의 변화에 따른 환경에 순차적으로 적응하고,
              비로소 고도순화를 거쳐 안정된 고지에 다다르게 된다.
              <br /> 우리는 평화롭게 흩어지는 구름처럼 각자 자유롭게 펼쳐나간다.
            </p>
          </section>

          <section>
            <Title>Credits</Title>

            <Title>참여학생</Title>

            <Grid>
              <GridNameText>강례모</GridNameText>
              <GridNameText>기유림</GridNameText>
              <GridNameText>김서진</GridNameText>
              <GridNameText>김수민</GridNameText>
              <GridNameText>김수빈</GridNameText>
              <GridNameText>김수빈</GridNameText>
              <GridNameText>김수현</GridNameText>
              <GridNameText>김제균</GridNameText>
              <GridNameText>김주연</GridNameText>
              <GridNameText>김찬미</GridNameText>
              <GridNameText>김희진</GridNameText>
              <GridNameText>노은채</GridNameText>
              <GridNameText>박온유</GridNameText>
              <GridNameText>박채린</GridNameText>
              <GridNameText>백송현</GridNameText>
              <GridNameText>변아현</GridNameText>
              <GridNameText>신재은</GridNameText>
              <GridNameText>안예린</GridNameText>
              <GridNameText>양현지</GridNameText>
              <GridNameText>윤선희</GridNameText>
              <GridNameText>이사라</GridNameText>
              <GridNameText>이성현</GridNameText>
              <GridNameText>이승미</GridNameText>
              <GridNameText>이유빈</GridNameText>
              <GridNameText>이윤주</GridNameText>
              <GridNameText>이재연</GridNameText>
              <GridNameText>이정진</GridNameText>
              <GridNameText>이지나</GridNameText>
              <GridNameText>이지민</GridNameText>
              <GridNameText>이청아</GridNameText>
              <GridNameText>이혜나</GridNameText>
              <GridNameText>이혜지</GridNameText>
              <GridNameText>이혜나</GridNameText>
              <GridNameText>전혜정</GridNameText>
              <GridNameText>정민혜</GridNameText>
              <GridNameText>정연수</GridNameText>
              <GridNameText>정희수</GridNameText>
              <GridNameText>조유은</GridNameText>
              <GridNameText>진영지</GridNameText>
              <GridNameText>최유리</GridNameText>
              <GridNameText>최혜수</GridNameText>
            </Grid>
          </section>

          <section>
            <Title>Thanks to</Title>

            <Title>졸업준비위원회</Title>

            <WaitingContainer>
              <div>
                <section>
                  <h3>위원장</h3>
                  <span>이지나</span>
                </section>

                <section>
                  <h3>부위원장</h3>
                  <span>이재연</span>
                </section>
              </div>

              <div>
                <section>
                  <h3>그래픽 팀장</h3>
                  <span>이정진</span>
                </section>

                <section>
                  <h3>도록 팀장</h3>
                  <span>양현지</span>
                </section>

                <section>
                  <h3>설치 팀장</h3>
                  <span>이윤주</span>
                </section>
              </div>

              <div>
                <section>
                  <h3>영상 팀장</h3>
                  <span>김서진</span>
                </section>

                <section>
                  <h3>웹 팀장</h3>
                  <span>이유빈</span>
                </section>

                <section>
                  <h3>회계 팀장</h3>
                  <span>이혜지</span>
                </section>
              </div>

              <div>
                <section>
                  <h3>행사 팀장</h3>
                  <span>이청아</span>
                </section>
              </div>
            </WaitingContainer>

            <Title>지도교수</Title>

            <ProfessorContainer>
              <div>
                <span>이재원 교수</span>
                <span>이규락 교수</span>
                <span>최장섭 교수</span>
              </div>
              <div>
                <span>유영재 교수</span>
                <span>민병걸 교수</span>
                <span>한재준 교수</span>
              </div>
            </ProfessorContainer>

            <Title>웹사이트 제작</Title>

            <DeveloperContainer>
              <div>
                <h3>디자인</h3>
                <span>김수빈</span>
                <span>안예린</span>
                <span>이성현</span>
                <span>이유빈</span>
                <span>정민혜</span>
                <span>최유리</span>
              </div>
              <div>
                <h3>개발</h3>
                <span>김의진</span>
              </div>

              <div className='up'>
                <화살표모바일 />
              </div>
            </DeveloperContainer>
          </section>
        </SecondWrapper>
      </Container>
    </PageTemplate>
  );
}

export default LandingMobile;
