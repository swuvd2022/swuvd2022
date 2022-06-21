import { useState } from 'react';

interface PaginationProps {
  count: number;
  lastIndex: number;
}

const usePagination = ({ count, lastIndex }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageStartNumber = Math.floor((currentPage - 1) / count) * count;

  const handleChange = (page: number) => () => {
    if (page === currentPage || page < 1 || page > lastIndex) return;
    setCurrentPage(page);
  };

  return {
    currentPage,
    pageStartNumber,
    handleChange,
  };
};

export default usePagination;
