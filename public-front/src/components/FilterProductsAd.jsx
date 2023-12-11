import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import { changePage,updateSearch,updateSelection } from "../features/ad-controls/adminSlice";

const FilterProductsAd = () => {
  const { numOfPages, page } = useSelector((store) => store.admin);
  const dispatch = useDispatch();
  const initialFilterState = {
    search: "",
    selection: "",
  };
  const [filterValues, setFilterValues] = useState(initialFilterState);
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearch(filterValues.search));
    dispatch(updateSelection(filterValues.selection));
  };
  return (
    <section className="admin-filters">
      <div className="pagination">
        <Pagination
          numOfPages={numOfPages}
          page={page}
          changePage={changePage}
        />
      </div>
      <div className="search-and-type">
        <form onSubmit={handleFilterSubmit}>
          <input
            type="text"
            placeholder="Search..."
            name="search"
            value={filterValues.search}
            onChange={handleFilterChange}
          />
          <select
            name="selection"
            value={filterValues.selection}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="vending">Vending</option>
            <option value="coffee">Coffee</option>
            <option value="snacks-and-ingredients">
              Snacks and Ingredients
            </option>
            <option value="service">
              Service
            </option>
          </select>
          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};
export default FilterProductsAd;
