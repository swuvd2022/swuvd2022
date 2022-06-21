import styled, { css } from 'styled-components';

interface PaginationProps {
  currentPage: number;
  lastIndex: number;
  handleChange: (number) => () => void;
  pageStartNumber: number;
  count: number;
}

const Pagination = ({
  currentPage,
  handleChange,
  pageStartNumber,
  count,
  lastIndex,
}: PaginationProps) => {
  return (
    <StyledRoot>
      {Array.from({ length: count }, (_, index: number) => {
        const page = pageStartNumber + index + 1;
        const shouldShowPage = page <= lastIndex;

        if (!shouldShowPage) return null;

        return (
          <StyledPageIndicator
            key={index}
            selected={currentPage === page}
            onClick={handleChange(page)}
          >
            {page}
          </StyledPageIndicator>
        );
      })}
    </StyledRoot>
  );
};

export default Pagination;

const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 5rem;
  width: 100%;
  margin: auto;
  position: absolute;
  bottom: 26px;
  left: 0;
`;

const StyledPageIndicator = styled.button<{ selected?: boolean }>`
  ${({ selected, theme }) =>
    selected &&
    css`
      text-decoration: ${theme.brandColor_1} underline 2px;
    `}

  font-size: 18px;
  line-height: 20px;
  background-color: inherit;
  color: ${({ theme }) => theme.brandColor_1};
`;
