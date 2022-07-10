import { Up } from 'pages/Landing';
import React from 'react';
import styled from 'styled-components';
import 화살표 from '../../svg/화살표';

function Third() {
  return (
    <div style={{ position: 'relative' }}>
      <Up>
        <화살표 />
      </Up>
      <ThirdWrapper>
        <div>
          <h1>Credits</h1>
          <SubContentWrapper>
            <h2>참여학생</h2>
            <StudentList>
              <span>강례모</span>
              <span>기유림</span>
              <span>김서진</span>
              <span>김수민</span>
              <span>김수빈</span>
              <span>김수빈</span>
              <span>김수현</span>
              <span>김제균</span>
              <span>김주연</span>
              <span>김찬미</span>
              <span>김희진</span>
              <span>노은채</span>
              <span>박온유</span>
              <span>박채린</span>
              <span>백송현</span>
              <span>변아현</span>
              <span>신재은</span>
              <span>안예린</span>
              <span>양현지</span>
              <span>윤선희</span>
              <span>이사라</span>
              <span>이성현</span>
              <span>이승미</span>
              <span>이유빈</span>
              <span>이윤주</span>
              <span>이재연</span>
              <span>이정진</span>
              <span>이지나</span>
              <span>이지민</span>
              <span>이청아</span>
              <span>이혜나</span>
              <span>이혜지</span>
              <span>이혜나</span>
              <span>전혜정</span>
              <span>정민혜</span>
              <span>정연수</span>
              <span>정희수</span>
              <span>조유은</span>
              <span>진영지</span>
              <span>최유리</span>
              <span>최혜수</span>
            </StudentList>
          </SubContentWrapper>
        </div>
        <div>
          <h1>Thanks to</h1>
          <SubContentWrapper style={{ justifyContent: 'space-between' }}>
            <h2 style={{ width: '30%' }}>졸업준비위원회</h2>
            <PrepareWrapper style={{ width: '70%' }}>
              <div>
                <NameTitleWrapper>
                  <h3>위원장</h3>
                  <span>이지나</span>
                </NameTitleWrapper>
                <NameTitleWrapper>
                  <h3>부위원장</h3>
                  <span>이재연</span>
                </NameTitleWrapper>
              </div>
              <div>
                <NameTitleWrapper>
                  <h3>그래픽 팀장</h3>
                  <span>이정진</span>
                </NameTitleWrapper>
                <NameTitleWrapper>
                  <h3>도록 팀장</h3>
                  <span>양현지</span>
                </NameTitleWrapper>
                <NameTitleWrapper>
                  <h3>설치 팀장</h3>
                  <span>이윤주</span>
                </NameTitleWrapper>
              </div>
              <div>
                <NameTitleWrapper>
                  <h3>영상 팀장</h3>
                  <span>김서진</span>
                </NameTitleWrapper>
                <NameTitleWrapper>
                  <h3>웹 팀장</h3>
                  <span>이유빈</span>
                </NameTitleWrapper>
                <NameTitleWrapper>
                  <h3>회계 팀장</h3>
                  <span>이혜지</span>
                </NameTitleWrapper>
              </div>
              <div>
                <NameTitleWrapper>
                  <h3>행사 팀장</h3>
                  <span>이청아</span>
                </NameTitleWrapper>
              </div>
            </PrepareWrapper>
          </SubContentWrapper>
          <SubContentWrapper>
            <h2 style={{ width: '30%' }}>지도교수</h2>
            <ProfessorList style={{ width: '70%' }}>
              <span>이재원 교수</span>
              <span>이규락 교수</span>
              <span>최장섭 교수</span>
              <span>유영재 교수</span>
              <span>민병걸 교수</span>
              <span>한재준 교수</span>
            </ProfessorList>
          </SubContentWrapper>
          <SubContentWrapper>
            <h2 style={{ width: '30%' }}>웹 사이트 제작</h2>
            <DeveloperList style={{ width: '70%' }}>
              <DeveloperListWrapper>
                <h3>디자인</h3>
                <span>김수빈</span>
                <span>안예린</span>
                <span>이성현</span>
                <span>이유빈</span>
                <span>정민혜</span>
                <span>최유리</span>
              </DeveloperListWrapper>
              <DeveloperListWrapper>
                <h3>개발</h3>
                <span>김의진</span>
              </DeveloperListWrapper>
            </DeveloperList>
          </SubContentWrapper>
        </div>
      </ThirdWrapper>
    </div>
  );
}

const ThirdWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 1100px;

  padding: 0 50px;

  & > div {
    margin-top: 100px;

    flex: 1;

    & > h1 {
      font-size: 1.5rem;

      margin-bottom: 40px;
    }

    gap: 50px;
    display: flex;
    flex-direction: column;

    min-width: 50%;
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

const SubContentWrapper = styled.div`
  width: 100%;

  display: flex;

  gap: 30px;

  & > h2 {
    font-size: 1rem;

    white-space: nowrap;
    width: 80px;
  }

  & > div {
    min-width: 200px;
  }
`;

const PrepareWrapper = styled.div`
  display: flex;

  flex-direction: column;

  gap: 25px;

  & > div {
    display: flex;

    flex-wrap: wrap;

    gap: 50px;
  }
`;

const NameTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;

  & > h3 {
    font-size: 1rem;
  }
`;

const StudentList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 16px;
`;

const ProfessorList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 15px;

  & > span {
    display: inline;
  }
`;

const DeveloperList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

const DeveloperListWrapper = styled.div`
  display: flex;

  gap: 15px;

  flex-wrap: wrap;

  & > h3 {
    font-size: 1rem;
    width: 50px;
  }
`;

export default Third;
