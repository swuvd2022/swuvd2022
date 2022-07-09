import styled from 'styled-components';
import projects from 'fixtures/projects.json';
import { Link, useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound';
import CroppedImage from 'components/common/CroppedImage';
import GuestBook from 'components/common/GuestBook';
import PageTemplate from 'components/common/PageTemplate';
import CroppedVideo from 'components/common/CroppedVideo';
import { getDesignerByName } from 'util/designers';

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
              <Link key={index} to={`/designer/${getDesignerByName(artist[index]).id}`}>
                <span>{artist[index]}</span>
              </Link>
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
        {isImage && <CroppedImage src={`../images/${id}_detail_1.png`} ratio='37.5%' alt='' />}
        {video && <CroppedVideo width='100%' ratio='56.25%' src={video} />}
        {isImage && <img src={`../images/${id}_detail_2.png`} alt='' width='100%' />}
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
  margin-bottom: 30px;
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

  & > p {
    font-size: 14px;
    margin-bottom: 40px;
  }

  & > div {
    display: flex;
    margin-bottom: 26px;

    & > a > span {
      font-size: 14px;
      font-weight: 400;
    }

    & > a + a {
      margin-left: 8px;
    }
  }
`;
