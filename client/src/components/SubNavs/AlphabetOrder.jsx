import { useDispatch } from "react-redux";
import { orderAlphabet } from "../../Redux/actions";

function AlphabetOrder() {
  const dispatch = useDispatch();

  const handleOrderByName = (event) => {
    const orderValue = event.target.value;
    dispatch(orderAlphabet(orderValue));
  };

  return (
    <select onChange={handleOrderByName}>
      <option value="All">Alphabet</option>
      <option value="A-Z">A to Z</option>
      <option value="Z-A">Z to A</option>
    </select>
  );
}

export default AlphabetOrder;
