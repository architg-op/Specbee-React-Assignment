import './Pagination.css';

const Pagination = ({
  articlesPerPage,
  length,
  currentPage,
  handlePagination,
}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / articlesPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={() =>
          currentPage > 1 && handlePagination((currentPage = currentPage - 1))
        }
      >
        &laquo;
      </button>
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={currentPage === pageNumber ? 'active' : ''}
          onClick={() => handlePagination(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={() =>
          currentPage < paginationNumbers.length &&
          handlePagination((currentPage = currentPage + 1))
        }
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
