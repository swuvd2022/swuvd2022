import { categoryState } from 'atoms';
import Categories from 'components/common/Categories';
import { useRecoilState } from 'recoil';
import { projectKind } from 'types/domain';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import projects from 'fixtures/projects.json';
import NotFound from 'pages/NotFound/NotFound';
import CroppedImage from 'components/common/CroppedImgae';

const ProjectDetail = () => {
  const projectId = Number(useParams().projectId);
  const [category, setCategory] = useRecoilState(categoryState);

  const project = projects.find(project => project.id === projectId);
  if (!project) return <NotFound />;

  const { title, artist, email, description, imageCount } = project;

  return (
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
            <h4>{artist}</h4>
            <div>{email}</div>
          </StyledLeft>
          <p>{description}</p>
        </StyledTexts>
        {Array(imageCount)
          .fill('')
          .map((_, index) => (
            <CroppedImage
              key={index}
              src={require(`assets/images/${artist}_detail_${index + 1}.png`)}
              ratio='37.5%'
              alt=''
            />
          ))}
      </StyledProject>
    </StyledRoot>
  );
};

export default ProjectDetail;

const StyledRoot = styled.div`
  display: flex;
  position: relative;
  padding-top: 212px;
  padding-left: 40px;
  width: 100%;
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
  & > h4 {
    margin-bottom: 6px;
  }
`;
