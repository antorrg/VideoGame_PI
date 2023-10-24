import style from "./styles/Cards.module.css";
import Card from "./Card";

function Cards({ allGames, allGenres, gamesPerPage, currentPage }) {
  //Paginacion:
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);

  return (
    <div className={style.cardList}>
      {currentGames.map((game) => (
            <Card key={game.id} game={game} allGenre={allGenres} />
          ))}
    </div>
  );
}

export default Cards;
