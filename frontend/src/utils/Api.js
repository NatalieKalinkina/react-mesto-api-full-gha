class Api {
  constructor(options) {
    this._url = options.url;
  }

  getInitialCards() {
    return fetch(this._url + '/cards', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(this._checkResponse);
  }

  postUserInfo(data) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    }).then(this._checkResponse);
  }

  postUserAvatar(data) {
    return fetch(this._url + '/users/me/avatar', {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    }).then(this._checkResponse);
  }

  postNewCard(data) {
    return fetch(this._url + '/cards', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    }).then(this._checkResponse);
  }

  addLike(cardId) {
    return fetch(this._url + `/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(this._checkResponse);
  }

  deleteLike(cardId) {
    return fetch(this._url + `/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return this.deleteLike(cardId)
    } else {
      return this.addLike(cardId)
    }
  }

  deleteCard(cardId) {
    return fetch(this._url + `/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
}

export const api = new Api({
  url: 'https://nataliekalinkina.mesto.nomoredomainsmonster.ru/api'  
});
