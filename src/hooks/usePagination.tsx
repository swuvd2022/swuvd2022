import { useState } from 'react';

interface PaginationProps {
  count: number;
}

const usePagination = ({ count }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageStartNumber = Math.floor((currentPage - 1) / count) * count;

  const handleChange = (page: number) => () => {
    if (page === currentPage) return;
    setCurrentPage(page);
  };

  return {
    currentPage,
    pageStartNumber,
    handleChange,
  };
};

export default usePagination;
