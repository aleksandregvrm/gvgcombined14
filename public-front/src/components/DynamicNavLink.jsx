import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideSubmenu, setSubmenuOpen } from "../features/menu/menuSlice";

// Dynamic Navlink is predetermined in the NavBar component, you can see how links are set up in utils. based on that the Dynamic Navlink is triggered in the middle of the parent link

const DynamicNavLink = ({ url, text }) => {
  const dispatch = useDispatch();
  const displaySubmenu = (e) => {
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    dispatch(setSubmenuOpen(center));
  };
  const hideSubMenuHandler = () => {
    dispatch(hideSubmenu());
  };
  return (
    <NavLink
      onMouseOver={displaySubmenu}
      onMouseLeave={hideSubMenuHandler}
      to={url}
    >
      {text}
    </NavLink>
  );
};

export default DynamicNavLink;
