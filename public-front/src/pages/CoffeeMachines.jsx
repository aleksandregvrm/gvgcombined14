import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts,changePage } from "../features/products/productsSlice";
import Wrapper from "../assets/wrappers/ProductsWrapper";
import { Products, Tags, Loading } from "../components";

const productsType = "coffee";
const tagsList =[ {id:1,tag:'newest',tagGe:'უახლესი'},{id:2,tag:'oldest', tagGe:'უძველესი'}];

const CoffeeMachines = () => {
  const { isLoading, sort, search, page } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(changePage(1))
  },[])
  useEffect(() => {
    dispatch(fetchProducts({ productsType }));
  }, [sort,search,page]);
  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Tags tagsList={tagsList}/>
      <Products />
    </Wrapper>
  );
};

export default CoffeeMachines;
