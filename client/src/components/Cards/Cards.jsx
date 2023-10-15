import style from "./Cards.module.css";
import Card from "../../respaldo/deVuelta/Card";

function Home({ allGames, allGenres }) {
  
  return (
    <div className={style.cardList}>
        {allGames.map((game) => (<Card key={game.id} game={game} genres={allGenres} />))}
    </div>
  );
}

export default Home;
