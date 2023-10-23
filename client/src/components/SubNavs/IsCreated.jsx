import { useDispatch} from "react-redux";
import { isCreated } from "../../Redux/actions";
import style from '../styles/SubNavs.module.css'

export default function IsCreated() {
  const dispatch = useDispatch();

  const itIsCreated = (event) => {
    dispatch(isCreated(event.target.value));
  };
 
  return (
    <div>
      <select onChange={itIsCreated} className={style.stylSelect }>
      <option value="All">Is Created ?</option>
      <option value="true">Created</option>
      <option value="false">Import</option>
    </select>
    </div>
  );
}
