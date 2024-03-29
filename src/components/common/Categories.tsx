import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from 'route';
import styled, { css } from 'styled-components';

interface CategoriesProps {
  categories: readonly string[];
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  flexDirection: 'column' | 'row';
  margin: string;
}

const Categories = ({
  categories,
  category,
  setCategory,
  flexDirection,
  margin,
}: CategoriesProps) => {
  const navigate = useNavigate();

  return (
    <StyledCategories flexDirection={flexDirection} margin={margin}>
      {categories.map(item => (
        <StyledCategory
          key={item}
          onClick={() => {
            setCategory(item);
            navigate(ROUTE.Project);
          }}
          active={item === category}
          flexDirection={flexDirection}
        >
          {item}
        </StyledCategory>
      ))}
    </StyledCategories>
  );
};

export default Categories;

const StyledCategories = styled.ul<{ flexDirection: 'column' | 'row'; margin: string }>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  ${({ flexDirection }) =>
    flexDirection === 'row'
      ? css`
          justify-content: space-between;
        `
      : css`
          gap: 30px;
        `}
  margin: ${({ margin }) => margin};

  word-break: keep-all;
`;

const StyledCategory = styled.li<{ active: boolean; flexDirection: 'column' | 'row' }>`
  color: ${({ active, theme }) => (active ? theme.brandColor_1 : theme.brandColor_2)};
  font-size: ${({ flexDirection }) => (flexDirection === 'column' ? '24px' : '14px')};
  font-weight: 700;
  cursor: pointer;
`;
