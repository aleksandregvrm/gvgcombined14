import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/ProductsWrapper";
import { Tags, Products, Loading } from "../components";
import { fetchProducts, changePage } from "../features/products/productsSlice";
import { vendingPageEvent } from "../facebook-pixel/FacebookFunctions";

const productsType = "vending";
const tagsList = [
  { id: 1, tag: "newest", tagGe: "უახლესი" },
  { id: 2, tag: "oldest", tagGe: "უძველესი" },
];

const VendingMachines = () => {
  const { isLoading, sort, page, search } = useSelector(
    (store) => store.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage(1));
    vendingPageEvent();
  }, []);
  useEffect(() => {
    dispatch(fetchProducts({ productsType, sort, page, search }));
  }, [page, search, sort]);
  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Tags tagsList={tagsList} />
      <Products productsType={productsType} />
    </Wrapper>
  );
};
export default VendingMachines;
