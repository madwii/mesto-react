import React from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getServerData()
      .then(([userData, initialCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__image-box">
          <button
            className="profile__image-button"
            onClick={props.onEditAvatar}
          />
          <img
            src={userAvatar}
            alt={userName}
            className="profile__image"
          />
        </div>

        <div className="profile__description">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__info">{userDescription}</p>
          <button
            className="profile__edit-button"
            onClick={props.onEditProfile}
            type="button"
            aria-label="Изменить"
          />
        </div>
        <button
          className="profile__add-button"
          onClick={props.onAddPlace}
          type="button"
          aria-label="Добавить"
        />
      </section>

      <section className="elements">
        {cards.map((card) => {
          return (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
