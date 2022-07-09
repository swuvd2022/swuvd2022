import { ProjectType, projectKind } from 'types/domain';
import styled from 'styled-components';
import projects from 'fixtures/projects.json';
import { useState } from 'react';
import { useEffect } from 'react';
import Categories from 'components/common/Categories';
import CroppedImage from 'components/common/CroppedImage';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { categoryState } from 'atoms';
import PageTemplate from 'components/common/PageTemplate';

function Project() {
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
          flexDirection='column'
          margin='15px 106px 0 0'
        />
        <StyledPreviewProjects>
          {filteredProjects.map(({ id, title, artist }) => (
            <StyledLink key={id} to={`${id}`}>
              <CroppedImage
                src={`../images/${id}_thumbnail.png`}
                width='330px'
                ratio='66.67%'
                alt=''
              />
              <StyledHover>
                <h3>{title}</h3>
                <h4>{artist}</h4>
              </StyledHover>
            </StyledLink>
          ))}
        </StyledPreviewProjects>
      </StyledRoot>
    </PageTemplate>
  );
}

export default Project;

const StyledRoot = styled.div`
  display: flex;
  position: relative;
  padding-top: 212px;
  padding-left: 40px;
  overflow-y: scroll;
  overflow-x: scroll;
`;

const StyledTitle = styled.h2`
  position: absolute;
  top: 40px;
  left: 40px;
  color: ${({ theme }) => theme.brandColor_1};
  font-weight: 700;
`;

const StyledPreviewProjects = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  height: fit-content;
`;

const StyledLink = styled(Link)`
  position: relative;
  cursor: pointer;
  &:hover > div {
    display: flex;
  }
`;

const StyledHover = styled.div`
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2e319260;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.brandColor_3};

  & > h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 60px;
    height: 60px;
  }

  & > h4 {
    font-size: 14px;
  }
`;
