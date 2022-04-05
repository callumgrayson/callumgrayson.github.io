import { useState } from "react";

function useMenuState() {
  const [show, setShow] = useState(false);
  function handler() {
    setShow(!show);
  }
  return [show, handler];
}

export default useMenuState;
