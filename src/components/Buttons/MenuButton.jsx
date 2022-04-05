import { ReactComponent as MenuIcon } from "../../svg/menu-icon.svg";
import { ReactComponent as CloseIcon } from "../../svg/close-icon.svg";

function MenuButton({ showMenu, handler }) {
  return (
    <div className="show-menu-box">
      <button className="show-menu-button" onClick={handler}>
        {showMenu ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  );
}

export default MenuButton;
