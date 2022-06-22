import { categoryState } from 'atoms';
import Categories from 'components/common/Categories';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { projectKind, ProjectType } from 'types/domain';
import projects from 'fixtures/projects.json';
import { Link } from 'react-router-dom';
import CroppedImage from 'components/common/CroppedImage';
import PageTemplate from 'components/common/PageTemplate';

const ProjectMobile = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);

  useEffect(() => {
    if (category === 'All') {
      setFilteredProjects(projects);
      return;
    }
    setFilteredProjects(projects.filter(project => project.kind === category));
  }, [category]);

  return (
    <PageTemplate>
      <StyledRoot>
        <StyledTitle>Project</StyledTitle>
        <Categories
          categories={projectKind}
          category={category}
          setCategory={setCategory}
          flexDirection='row'
          margin='15px 0 0 0'
        />
        <StyledPreviewProjects>
          {filteredProjects.map(project => (
            <StyledLink key={project.id} to={`${project.id}`}>
              <CroppedImage
                src={require(`assets/images/${project.artist}_thumbnail.png`)}
                width='100%'
                ratio='66.67%'
                alt=''
              />
              <h3>{project.title}</h3>
              <h4>{project.artist}</h4>
            </StyledLink>
          ))}
        </StyledPreviewProjects>
      </StyledRoot>
    </PageTemplate>
  );
};

export default ProjectMobile;

const StyledRoot = styled.div`
  position: relative;
  padding: 0 20px 20px;
  overflow-y: scroll;
`;

const StyledTitle = styled.h2`
  font-weight: 700;
  margin: 11px 0 8px;
  font-size: 18px;
`;

const StyledPreviewProjects = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  margin-top: 30px;
`;

const StyledLink = styled(Link)`
  position: relative;
  cursor: pointer;
  width: 50%;

  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:nth-of-type(odd) {
    padding-right: 10px;
  }

  &:nth-of-type(even) {
    padding-left: 10px;
  }

  & > h4 {
    font-weight: 400;
  }
`;
