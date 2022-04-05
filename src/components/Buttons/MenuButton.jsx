import { ReactComponent as MenuIcon } from "../../svg/menu-icon.svg";
import { ReactComponent as CloseIcon } from "../../svg/close-icon.svg";

function MenuButton({ showMenu, handler }) {
  return (
    <button className="show-menu-button" onClick={handler}>
      {showMenu ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}

export default MenuButton;
