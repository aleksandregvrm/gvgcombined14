import {Wrapper} from "../assets/wrappers/IntroductionWrapper";
import { useSelector } from "react-redux";
import IntroductionImages from "./IntroductionImages";
import ProductsCarousel from "./ProductsCarousel";

/* introduction components which involves the big Introduction image, the dots to switch up big introduction image and products carousel the images used in the products carousel is determined in the features/menu/menuSlice.jsx(redux) folder */

const atHome = true;
const Introduction = () => {
  const { carouselImages } = useSelector((store) => store.menu);
  return (
    <Wrapper>
      <div className="introduction">
        <IntroductionImages />
        <ProductsCarousel images={carouselImages} atHome={atHome}/>
      </div>
    </Wrapper>
  );
};
export default Introduction;
