import { ProjectType, projectKind } from 'types/domain';
import styled from 'styled-components';
import projects from 'fixtures/projects.json';
import { useState } from 'react';
import { useEffect } from 'react';
import Categories from 'components/common/Categories';

function Project() {
  const [category, setCategory] = useState<typeof projectKind[number]>('All');
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);

  useEffect(() => {
    if (category === 'All') {
      setFilteredProjects(projects);
      return;
    }
    setFilteredProjects(projects.filter(project => project.kind === category));
  }, [category]);

  return (
    <StyledRoot>
      <StyledTitle>Project</StyledTitle>
      <Categories
        categories={projectKind}
        category={category}
        setCategory={setCategory}
        flexDirection='column'
        margin='15px 106px 0 0'
      />
      <StyledPreviewProjects>
        {filteredProjects.map(project => (
          <StyledPreviewProject key={project.id}>
            <img src={require(`assets/images/${project.artist}_thumbnail.png`)} alt='' />
          </StyledPreviewProject>
        ))}
      </StyledPreviewProjects>
    </StyledRoot>
  );
}

export default Project;

const StyledRoot = styled.div`
  display: flex;
  position: relative;
  padding-top: 212px;
  padding-left: 40px;
`;

const StyledTitle = styled.h2`
  position: absolute;
  top: 40px;
  left: 40px;
`;

const StyledCategories = styled.ul`
  margin-right: 106px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  word-break: keep-all;
  margin-top: 15px;
`;

const StyledCategory = styled.li<{ active: boolean }>`
  color: ${({ active, theme }) => (active ? theme.brandColor_1 : theme.brandColor_2)};
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;

const StyledPreviewProjects = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  height: fit-content;
`;

const StyledPreviewProject = styled.li`
  display: inline-block;
  width: fit-content;
  height: fit-content;
`;
