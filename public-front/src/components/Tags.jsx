import { useSelector,useDispatch } from "react-redux";
import { changeSort } from "../features/products/productsSlice";

/* tags which is determined by where it is located at for example Service page has its own tags different product pages have their own tags */

const Tags = ({ tagsList }) => {
  const dispatch = useDispatch();
  let {sort} = useSelector((store)=>store.products);
  let {english} = useSelector((store)=>store.menu);
  if (tagsList) {
    return (
      <div className='tags'>
        {tagsList.map((sortTag) => {
          const {id,tag,tagGe} = sortTag;
          return <button key={id} className={tag === sort ? 'tags-btn btn selected' : 'tags-btn btn'}
           onClick={()=>{
            dispatch(changeSort(tag));
          }}><h5>{!english ? tagGe : tag}</h5></button>;
        })}
      </div>
    );
  }
};
export default Tags;
