const links = [
  { id: 1, url: "/", text: "home", textGe: "მთავარი" },
  {
    id: 2,
    url: "products",
    text: "products",
    textGe: "პროდუქტები",
    hoverTrigger: true,
  },
  { id: 3, url: "service", text: "service", textGe: "სერვისი" },
  { id: 4, url: "about", text: "about us", textGe: "ჩვენს შესახებ" },
  { id: 5, url: "contacts", text: "contact us", textGe: "კონტაქტი" },
];
const additionalLinks = [
  {
    text: "FAQ",
    textGe: "FAQ",
    to: "faq",
  },
  {
    text: "vending machines",
    textGe: "ვენდინგ აპარატები",
    to: "products/vending",
  },
  {
    text: "coffee machines",
    textGe: "ყავის აპარატები",
    to: "products/coffee",
  },
  {
    text: "snacks and ingredients",
    textGe: "სნექები და ინგრედიენტები",
    to: "products/snacks-and-ingredients",
  },
];

export { links, additionalLinks };
