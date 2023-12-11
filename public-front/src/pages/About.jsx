import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import Wrapper from "../assets/wrappers/AboutWrapper";
import GVGMachine from "../assets/images/vending-machine-3.png";
import { fetchInstagramProducts } from "../features/products/productsSlice";
import {InstagramFeed} from '../components';
const About = () => {
  const {english} = useSelector((store)=>store.menu)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchInstagramProducts());
  },[])
  return (
    <Wrapper>
      <div className="about-box">
        <div className="about-paragraph ge">
          {!english ? (
            <p>
              Georgian Vending Group ესპანური კომპანია Azykoen-ის ოფიციალური
              წარმომადგენელია საქართველოში. (Azykoen - სავაჭრო აპარატების
              ერთ-ერთი უძლიერესი მწარმოებელი მსოფლიოში) <br /> ჩვენი მისიაა
              ყოველდღიური კომფორტის ხელმისაწვდომობის მიზნით ადგილობრივ
              ბიზნესებს, კერძო და სახელმწიფო ოფისებს, მივაწოდოთ საუკეთესო
              ხარისხის, მრავალფუნქციური, მათ ბიზნესზე და საქმისწარმოებაზე
              მორგებული სავაჭრო აპარატები. <br /> ჩვენ ვეხმარებით პარტნიორებს
              ისეთი ცოცხალი კუთხეების მოწყობაში, რომლებიც ქმნის პოზიტიურ
              კავშირებს, ამყარებს და აძლიერებს კომფორტს, ზრდის პროდუქტიულობას და
              იწვევს კმაყოფილებას <br /> ჩვენ ვამაყობთ რომ შეგვიძლია სწრაფად და
              მარტივად მივაწოდოთ საკვები, სასმელი და სხვა დაკავშირებული
              კატეგორიების პროდუქტი ნებისმიერ სექტორს, რაც ნიშნავს რომ შეგვიძლია
              მოვუაროთ როგორც მსხვილ, ისე მცირე ორგანიზაციებს.
            </p>
          ) : (
            <p>
              Georgian Vending Group is the official representative of the
              Spanish company Azykoen in Georgia. (Azykoen is a leading
              manufacturer of vending machines worldwide) Our mission is to
              provide daily comfort and accessibility to local businesses, large
              and public offices, by delivering high-quality, multifunctional
              vending machines for their business and operations. We assist
              partners in establishing vibrant communities that create positive
              relationships, build, and enhance comfort, increase product
              diversity, and contribute to the efficiency of their business and
              production. We value creating partnerships with dynamic
              organizations that focus on establishing positive connections,
              generating growth, and promoting comfort. We believe that we can
              quickly and easily deliver food, beverages, and other related
              product categories to any sector, meaning that we can serve both
              large and small organizations
            </p>
          )}
        </div>
        <div className="about-img">
          <img srcSet={GVGMachine} alt="" />
        </div>
      </div>
      <div className="about-stats ge">
        <div className="info">
          <h1 className="big">450</h1>
          {!english ? (
            <span>
              <h4>- მდე </h4> <h2>აპარატი</h2>
            </span>
          ) : (
            <h2>Machines</h2>
          )}
          <div className="underline"></div>
        </div>
        <div className="info">
          <h1 className="big">180</h1>
          {!english ? (
            <span>
              <h4>- მდე </h4> <h2>პარტნიორი</h2>
            </span>
          ) : (
            <h2>Partners</h2>
          )}
          <div className="underline"></div>
        </div>
        <div className="info">
          <h1 className="big">6</h1>
          {!english ?
          <span>
            <h2>ქალაქი</h2>
          </span> : <h2>Cities</h2>
          }
          <div className="underline"></div>
        </div>
      </div>
      <InstagramFeed />
    </Wrapper>
  );
};

export default About;
