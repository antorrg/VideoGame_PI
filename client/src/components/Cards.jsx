import style from "./styles/Cards.module.css";
import Card from "./Card";

function Home({ allGames, allGenres }) {
  
  return (
    <div className={style.cardList}>
        {allGames.map((game) => (<Card key={game.id} game={game} genres={allGenres} />))}
    </div>
  );
}

export default Home;
