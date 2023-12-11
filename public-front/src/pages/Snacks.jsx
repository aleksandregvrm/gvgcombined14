import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/ProductsWrapper";
import { Products, Tags, Loading } from "../components";
import { fetchProducts, changePage } from "../features/products/productsSlice";

const productsType = "snacks-and-ingredients";
const tagsList = [
  { id: 1, tag: "newest", tagGe: "უახლესი" },
  { id: 2, tag: "oldest", tagGe: "უძველესი" },
];
const Snacks = () => {
  const { isLoading, sort, page, search } = useSelector(
    (store) => store.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage(1));
  }, []);
  useEffect(() => {
    dispatch(fetchProducts({ productsType }));
  }, [page, sort, search]);
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
export default Snacks;
