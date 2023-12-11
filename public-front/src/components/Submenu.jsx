import { useSelector,useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { hideSubmenu, setSubmenuOpen } from "../features/menu/menuSlice";

/* Submenu component which is triggered in the Navbar component on the bigger screen size on a predetermined location, it's triggering and dissapearing operations are handled in the features/menu/menuSlice.jsx(redux) */
const Submenu = () => {
    const {submenuPages,isSubmenuOpen,submenuCenter,english} = useSelector((state)=>state.menu);
    const submenuLeft = submenuCenter-50;
    const dispatch = useDispatch();
    const displaySubmenu = (e) => {
      dispatch(setSubmenuOpen());
    }
     const hideSubMenuHandler = () => {
       dispatch(hideSubmenu());
     };
  return (
    <ul className={isSubmenuOpen ? "submenu open-submenu" : "submenu"} style={{left:submenuLeft}} onMouseOver={displaySubmenu} onMouseLeave={hideSubMenuHandler}>
      {submenuPages.map((page,index)=>{
        const {name,to,nameGe} = page;
        return <NavLink key={index} to={to}>{!english ? nameGe :name}</NavLink>
      })}
    </ul>
  );
}

export default Submenu