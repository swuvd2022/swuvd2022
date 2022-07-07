import { categoryState } from 'atoms';
import Categories from 'components/common/Categories';
import { useRecoilState } from 'recoil';
import { projectKind } from 'types/domain';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import projects from 'fixtures/projects.json';
import NotFound from 'pages/NotFound/NotFound';
import CroppedImage from 'components/common/CroppedImage';
import GuestBook from 'components/common/GuestBook';
import PageTemplate from 'components/common/PageTemplate';
import CroppedVideo from 'components/common/CroppedVideo';

const ProjectDetail = () => {
  const projectId = Number(useParams().projectId);
  const [category, setCategory] = useRecoilState(categoryState);

  const project = projects.find(project => project.id === projectId);
  if (!project) return <NotFound />;

  const { id, title, artist, email, description, isImage, video } = project;

  return (
    <PageTemplate>
      <StyledRoot>
        <Categories
          categories={projectKind}
          category={category}
          setCategory={setCategory}
          flexDirection='column'
          margin='15px 106px 0 0'
        />
        <StyledProject>
          <StyledTexts>
            <StyledLeft>
              <h3>{title}</h3>
              {artist.map((_, index) => (
                <div key={index}>
                  <h4>{artist[index]}</h4>
                  <div>{email[index]}</div>
                </div>
              ))}
            </StyledLeft>
            <p>
              {description.split('\n').map(line => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </StyledTexts>
          {video && (
            <CroppedVideo
              width='100%'
              ratio='56.25%'
              src='https://www.youtube.com/embed/wa6I_tqpvZU'
            />
          )}
          {isImage && (
            <>
              <CroppedImage
                src={require(`assets/images/${id}_detail_1.png`)}
                ratio='37.5%'
                alt=''
              />
              <img src={require(`assets/images/${id}_detail_2.png`)} alt='' width='100%' />
            </>
          )}

          <GuestBook />
        </StyledProject>
      </StyledRoot>
    </PageTemplate>
  );
};

export default ProjectDetail;

const StyledRoot = styled.div`
  display: flex;
  position: relative;
  padding-top: 212px;
  padding-left: 40px;
  padding-right: 120px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: scroll;
`;

const StyledProject = styled.div`
  width: 100%;
`;

const StyledTexts = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 102px;
`;

const StyledLeft = styled.div`
  & > h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  & > div > h4 {
    margin-bottom: 6px;
  }

  & > div + div {
    margin-top: 29px;
  }
`;
