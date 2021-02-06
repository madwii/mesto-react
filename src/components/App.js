import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWhithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }

  //   isEditProfilePopupOpen
  // isAddPlacePopupOpen
  // isEditAvatarPopupOpen

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWhithForm
        title="Редактировать профиль"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onSubmit={`Сохранить`}
      >
        <input
          type="text"
          className="popup__input popup__input_type_name"
          required
          minLength="2"
          maxLength="40"
          name="name"
          placeholder="Имя"
          id="name-input"
        />
        <span id="name-input-error" className="error" aria-live="polite"></span>

        <input
          type="text"
          className="popup__input popup__input_type_title"
          required
          minLength="2"
          maxLength="200"
          name="about"
          placeholder="О себе"
          id="about-input"
        />
        <span
          id="about-input-error"
          className="error"
          aria-live="polite"
        ></span>
      </PopupWhithForm>

      <PopupWhithForm
        title="Новое место"
        name="add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onSubmit={`Создать`}
      >
        <input
          type="text"
          className="popup__input popup__input_type_add"
          required
          minLength="2"
          maxLength="30"
          name="name"
          placeholder="Название"
          id="new-card"
        />

        <span id="new-card-error" className="error" aria-live="polite"></span>

        <input
          type="url"
          className="popup__input popup__input_type_link"
          required
          name="link"
          placeholder="Ссылка на картинку"
          id="link-card"
        />

        <span id="link-card-error" className="error" aria-live="polite"></span>
      </PopupWhithForm>

      <PopupWhithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onSubmit={`Сохранить`}
      >
        <input
          type="url"
          className="popup__input popup__input_type_avatar"
          required
          name="avatar"
          placeholder="Ссылка на картинку"
          id="avatar-input"
        />
        <span
          id="avatar-input-error"
          className="error"
          aria-live="polite"
        ></span>
      </PopupWhithForm>

      <PopupWhithForm
        title="Вы уверены?"
        name="delete-place"
        isOpen={false}
        onClose={closeAllPopups}
        onSubmit={`Да`}
      ></PopupWhithForm>

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
