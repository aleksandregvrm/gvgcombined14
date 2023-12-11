import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import ProductsCarousel from "./ProductsCarousel";

/* plain jsx and css div to download the company's catalog no only thing involved is the productsCarousel of the money images */
const atHome = false;
const DownloadCatalog = () => {
  const {moneyImages,english} = useSelector((store)=>store.menu);
  const downloadUrl = "/src/assets/files/readme.md";
  return (
    <div className="download">
      <div className="money-slides-container">
        {!english ? 
        <h4 className="ge">აპარატში შეგიძლიათ გამოიყენოთ</h4> :
        <h4> You can use these in our Machines</h4>
      }
      <ProductsCarousel images={moneyImages} atHome={atHome}/>
      </div>
      <div className="download-container">
        <div className="download-text ge">
          {!english ? 
          <h4>კატალოგი</h4> : <h4>Catalog</h4>
        }
          <FontAwesomeIcon className="pdf-icon" icon={faFilePdf}/>
        </div>
        <div className="underline text-underline"></div>
        <button className="btn download-btn">
          <a className="download-link" href={downloadUrl} download="readme.md">
            <FontAwesomeIcon icon={faDownload} />
            {!english ? 'გადმოწერა' : 'Download'}
          </a>
        </button>
      </div>
    </div>
  );
};
export default DownloadCatalog;
