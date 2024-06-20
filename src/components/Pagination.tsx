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
        disabled={currentPage === 1 ? true : false}
        onClick={() =>
          currentPage > 1 && handlePagination((currentPage = currentPage - 1))
        }
      >
        &lt;
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
        disabled={currentPage === paginationNumbers.length ? true : false}
        onClick={() =>
          currentPage < paginationNumbers.length &&
          handlePagination((currentPage = currentPage + 1))
        }
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
