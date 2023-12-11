import { useEffect } from "react";
import Wrapper from "../assets/wrappers/ProductsWrapper";
import { useSelector, useDispatch } from "react-redux";
import { Tags, Products, Loading } from "../components";
import { fetchProducts, changePage } from "../features/products/productsSlice";

const productsType = "service";
const tagsList = [
  { id: 1, tag: "newest", tagGe: "უახლესი" },
  { id: 2, tag: "oldest", tagGe: "უძველესი" },
];
const Service = () => {
  const { isLoading, sort, search, page } = useSelector(
    (store) => store.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage(1));
  }, []);
  useEffect(() => {
    dispatch(fetchProducts({ productsType }));
  }, [sort, search, page]);
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
      <Products />
    </Wrapper>
  );
};

export default Service;
