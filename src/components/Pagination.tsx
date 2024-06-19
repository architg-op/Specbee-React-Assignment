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
          (currentPage = currentPage > 0 ? currentPage - 1 : currentPage)
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
          (currentPage =
            currentPage < paginationNumbers.length
              ? currentPage + 1
              : currentPage)
        }
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
