import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/InstaFeedWrapper";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const InstagramFeed = () => {
  const { instagramProducts, instagramLoading, instagramError } = useSelector(
    (store) => store.products
  );
  if (instagramLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }
  if (instagramProducts.length < 1 || instagramError) {
    return (
      <Wrapper>
        <div className="error-instagram-container">
          <h3>#geovending.ge</h3>
          <Link
            target="_blank"
            to="https://www.instagram.com/georgianvendinggroup/"
            className="instagram-button"
          >
            <FaInstagram />
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="instagram-images-container">
        <div className="instagram-header">
          <h2>#geovending.ge</h2>
          <Link
            target="_blank"
            to="https://www.instagram.com/georgianvendinggroup/"
            className="instagram-button"
          >
            <FaInstagram />
          </Link>
        </div>
        <div className="instagram-images">
          {instagramProducts.map((product,index) => {
            const { id, media_url: img, media_type } = product;
            if (media_type === "IMAGE") {
              return (
                <div>
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/georgianvendinggroup/"
                  >
                    <img className="instagram-img" key={id} srcSet={img}></img>
                  </Link>
                  <i className="instagram-icon-small">
                    <FaInstagram />
                  </i>
                </div>
              );
            } else {
              return (
                <div>
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/georgianvendinggroup/"
                  >
                    <video
                      className="instagram-img"
                      key={id}
                      autoPlay={index === 0 ? true : false}
                      src={img}
                    ></video>
                  </Link>
                  <i className="instagram-icon-small">
                    <FaInstagram />
                  </i>
                </div>
              );
            }
          })}
        </div>
      </div>
    </Wrapper>
  );
};
export default InstagramFeed;
