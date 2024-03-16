
import { useContext } from "react";
import cartContext from "../../context/cartContext";
export function ItemListContainer({text}) {

  const greeting = useContext(cartContext);

  return 
  <>
    <p>{text}</p>;
    <p>greeting</p>
  </>
}

export default ItemListContainer;
