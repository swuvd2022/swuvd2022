import styled from 'styled-components';
import projects from 'fixtures/projects.json';
import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound';
import CroppedImage from 'components/common/CroppedImage';
import GuestBook from 'components/common/GuestBook';
import PageTemplate from 'components/common/PageTemplate';
import CroppedVideo from 'components/common/CroppedVideo';

const ProjectDetailMobile = () => {
  const projectId = Number(useParams().projectId);

  const project = projects.find(project => project.id === projectId);
  if (!project) return <NotFound />;

  const { id, title, artist, description, video, isImage } = project;

  return (
    <PageTemplate>
      <StyledProject>
        <StyledTexts>
          <h3>{title}</h3>
          <div>
            {artist.map((_, index) => (
              <h4 key={index}>{artist[index]}</h4>
            ))}
          </div>
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
            <CroppedImage src={require(`assets/images/${id}_detail_1.png`)} ratio='37.5%' alt='' />
            <img src={require(`assets/images/${id}_detail_2.png`)} alt='' width='100%' />
          </>
        )}
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

  & > div {
    display: flex;
    margin-bottom: 26px;

    & > h4 {
      font-weight: 400;
    }

    & > h4 + h4 {
      margin-left: 8px;
    }
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
