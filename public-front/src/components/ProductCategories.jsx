import {useSelector} from 'react-redux'
import snacks from "../assets/images/snacks.jpg";
import vending from "../assets/images/vending.jpg";
import coffee from "../assets/images/coffee.jpg";
import { NavLink } from "react-router-dom";

const items = [
  {
    name: "Vending Machines",
    nameGe: "ვენდინგ აპარატები",
    url: vending,
    to: "vending",
  },
  {
    name: "Coffee Machines",
    nameGe: "ყავის აპარატები",
    url: coffee,
    to: "coffee",
  },
  {
    name: "Snacks and ingredients",
    nameGe: 'სნექები და ინგრედიენტები',
    url: snacks,
    to: "snacks-and-ingredients",
  },
];
// product categories images which is in the Products page

const ProductCategories = () => {
  const {english} = useSelector((store)=>store.menu)
  return (
    <>
        <div className="categories">
          {items.map((item, index) => {
            const { name, url, to, nameGe } = item;
            return (
              <article key={index} className="category">
                <NavLink to={to}>
                  <img srcSet={url} alt={name} />
                </NavLink>
                <h2>{!english ? nameGe : name}</h2>
              </article>
            );
          })}
        </div>
    </>
  );
};
export default ProductCategories;
