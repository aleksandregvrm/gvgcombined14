import { useDispatch, useSelector } from "react-redux";
import { setActiveImageIndex } from "../features/menu/menuSlice";

/* dots located in the introduction component which is generated based on how many images we have available on the slider, it also controls which image is being set to the slider by using redux function in the features/menu/menuSlice.jsx */

const SliderDots = () => {
  const { images, activeImageIndex } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <div className="dots-container">
      {images.map((image, index) => {
        return (
          <button
          key={index}
            className={
              index === activeImageIndex ? "dot active" : "dot"
            }
            onClick={() => dispatch(setActiveImageIndex(index))}
          ></button>
        );
      })}
    </div>
  );
};

export default SliderDots;
