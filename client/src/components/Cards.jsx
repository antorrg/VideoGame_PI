import style from "./styles/Cards.module.css";
import Card from "./Card";

function Cards({ allGames, allGenres }) {
  
  console.log(allGames);
  return (
    <div className={style.cardList}>
        {allGames.map((game) => (<Card key={game.id} game={game} allGenre={allGenres} />))}
    </div>
  );
}

export default Cards;
