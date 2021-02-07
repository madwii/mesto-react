//создание класса Card

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="element">
      <div className="element__item">
        <img
          onClick={handleClick}
          src={props.card.link}
          alt={props.card.name}
          className="element__image"
        ></img>
        <button className="element__delete" type="button" aria-label="Удалить" />
      </div>
      <div className="element__description">
        <h3 className="element__title">{props.card.name}</h3>
        <div className="element__like-box">
          <button
            className="element__like"
            type="button"
            aria-label="Нравится"
          ></button>
          <span className="element__like_counter">{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
