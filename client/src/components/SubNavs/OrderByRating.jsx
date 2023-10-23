import style from '../styles/SubNavs.module.css'
import { useDispatch} from "react-redux";
import { orderbyRating } from "../../Redux/actions";

export default function OrderByRating() {
  const dispatch = useDispatch();

  const filterForRating = (event) => {
    dispatch(orderbyRating(event.target.value));
  };
 
  return (
    <div>
      <select onChange={filterForRating} className={style.stylSelect }>
      <option value="All">Order by Rating</option>
      <option value="ASC">Lowest to Highest</option>
      <option value="DES">Highest to Lowest</option>
    </select>
    </div>
  );
}
