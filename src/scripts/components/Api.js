class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => res.ok ? res.json(): Promise.reject(res.status))
      .catch(console.log)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(res => res.ok ? res.json(): Promise.reject(res.status))
      .catch(console.log)
  }

  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about })
    })
      .then(res => res.ok ? res.json(): Promise.reject(res.status))
      .catch(console.log)
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link })
    })
      .then(res => res.ok ? res.json(): Promise.reject(res.status))
      .catch(console.log)
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers
    })
      .then(res => res.ok ? res.json(): Promise.reject(res.status))
      .catch(console.log)
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers
    })
      .then(res => res.ok ? res.json(): Promise.reject(res.status))
      .catch(console.log)
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers
    })
      .then(res => res.ok ? res.json(): Promise.reject(res.status))
      .catch(console.log)
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
  headers: {
    authorization: '2e5af95a-25b4-4742-9ead-1326c8073602',
    // authorization: '9e805e1a-4ae4-4e34-b6d0-ba7f164bd419',
    'Content-Type': 'application/json'
  }
});
