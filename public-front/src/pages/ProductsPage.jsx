import { DownloadCatalog, ProductCategories } from "../components";
import AssociatedCompanies from "../components/AssociatedCompanies";
import Wrapper from '../assets/wrappers/ProductsPageWrapper';
import { blackCompanies } from "../utils";

const ProductsPage = () => {
  return (
    <>
    <Wrapper>
        <AssociatedCompanies images={blackCompanies}/>
        <ProductCategories />
        <DownloadCatalog/>
    </Wrapper>
    </>
  );
};

export default ProductsPage;
