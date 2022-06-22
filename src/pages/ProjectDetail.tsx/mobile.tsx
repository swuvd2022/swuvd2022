import styled from 'styled-components';
import projects from 'fixtures/projects.json';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { categoryState } from 'atoms';
import NotFound from 'pages/NotFound/NotFound';
import CroppedImage from 'components/common/CroppedImage';
import GuestBook from 'components/common/GuestBook';
import PageTemplate from 'components/common/PageTemplate';

const ProjectDetailMobile = () => {
  const projectId = Number(useParams().projectId);
  const [category, setCategory] = useRecoilState(categoryState);

  const project = projects.find(project => project.id === projectId);
  if (!project) return <NotFound />;

  const { title, artist, email, description, imageCount } = project;

  return (
    <PageTemplate>
      <StyledProject>
        <StyledTexts>
          <h3>{title}</h3>
          <h4>{artist}</h4>
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
        <GuestBook />
      </StyledProject>
    </PageTemplate>
  );
};

export default ProjectDetailMobile;

const StyledProject = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: scroll;
  padding: 0 20px 20px;
`;

const StyledTexts = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  font-size: 14px;
  & > h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  & > h4 {
    font-size: 14px;
    margin-bottom: 30px;
  }
  & > p {
    font-size: 14px;
    margin-bottom: 40px;
  }
`;

// const StyledLeft = styled.div`
//   & > h3 {
//     font-size: 24px;
//     font-weight: 700;
//     margin-bottom: 20px;
//   }
//   & > h4 {
//     margin-bottom: 6px;
//   }
// `;
