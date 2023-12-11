import { useDispatch} from "react-redux";
import Wrapper from "../assets/wrappers/PaginationWrapper";

/* Pagination which is determined by the numOfPages(number of pages) sent by the backend, detailed information about the pagination is available in the features/products/ProductsSlice.jsx(redux) file*/

const Pagination = ({numOfPages,page,changePage}) => {
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  if (numOfPages === 1) {
    return (
      <Wrapper>
        <div className="pages-containter"></div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="pages-container">
        {pages.map((pageNumber, index) => {
          return (
            <button
              key={index}
              className={
                pageNumber === page ? "btn page-btn active" : "btn page-btn"
              }
              onClick={() => {
                dispatch(changePage(pageNumber));;
              }}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Pagination;
