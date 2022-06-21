import styled, { css } from 'styled-components';

interface PaginationProps {
  currentPage: number;
  lastIndex: number;
  handleChange: (number: number) => () => void;
  pageStartNumber: number;
  count: number;
}

const Pagination = ({ currentPage, handleChange, count, lastIndex }: PaginationProps) => {
  return (
    <StyledRoot>
      {Array.from({ length: count }, (_, index: number) => {
        let page: number;
        if (currentPage < Math.floor((1 + count) / 2)) {
          page = index + 1;

          const shouldShowPage = page <= lastIndex;

          if (!shouldShowPage) return null;
        } else if (currentPage > lastIndex - Math.floor((1 + count) / 2)) {
          page = lastIndex - (count - index - 1);
        } else {
          page = currentPage - (Math.floor((1 + count) / 2) - 1) + index;
        }

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
      {}
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
