import React, { useState } from "react";

const Pagination: React.FC = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemPerPage = 5;

  const totalPages = Math.ceil(data.length / itemPerPage);
  const strtIndx = (currentPage - 1) * itemPerPage;
  const currentItems = data.slice(strtIndx, strtIndx + itemPerPage);
  const goToPage = (pgno: number) => {
    setCurrentPage(pgno);
  };
  return (
    <div>
      <ul>
        {currentItems.map((i) => {
          return <li key={i}>{i}</li>;
        })}
      </ul>
      <div>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="border px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>
        {currentPage}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="border px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
