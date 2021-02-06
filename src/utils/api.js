export default class Api {
  constructor({ baseUrl, userId, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getServerData() {
    return Promise.all([this.getUserData(), 
      this.getInitialCards()])
  }

  _getStatus(res) {//+
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
  }

  setUserData(data) {//+
    return fetch(`${this._baseUrl}/users/me`,
      {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify(
          {
            name: data.name,
            about: data.about,
          }),
      })
      .then(this._getStatus);
  }

  getUserData() {//+
    return fetch(`${this._baseUrl}/users/me`,
      {
        headers: this._headers,
      })
      .then(this._getStatus);
  }

  getInitialCards() {//+
    return fetch(`${this._baseUrl}/cards`,
      {
        headers: this._headers,
      })
      .then(this._getStatus);
  }

  createCard(item) {//+ look at name/link
    return fetch(`${this._baseUrl}/cards`,
      {
        method: "POST",
        headers: this._headers,

        body: JSON.stringify({
          name: item.name,
          link: item.link,
        }),
      })
      .then(this._getStatus);
  }

  changeAvatar(avatar) {//+
    return fetch(`${this._baseUrl}/users/me/avatar`,
      {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar.avatar,
        }),
      })
      .then(this._getStatus);
  }

  deleteCard(id) {//+
    return fetch(`${this._baseUrl}/cards/${id}`,
      {
        method: "DELETE",
        headers: this._headers,
      })
      .then(this._getStatus);
  }

  likeCard(id) {//+
    return fetch(`${this._baseUrl}/cards/likes/${id}`,
      {
        method: "PUT",
        headers: this._headers,
      }).then(this._getStatus);
  }

  dislikeCard(id) {//+
    return fetch(`${this._baseUrl}/cards/likes/${id}`,
      {
        method: "DELETE",
        headers: this._headers,
      })
      .then(this._getStatus);
  }
}


export const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
  // userId: '486f4cfdd86508efc4a3eb06',// сервер не работал. убрана привязка по id
  headers: {
    authorization: '1d464b43-9695-4331-8a3a-49b913826759',
    'Content-Type': 'application/json'
}
});