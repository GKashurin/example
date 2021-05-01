//авторизация и регистрация
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const logIn = (props) => ({ type: LOG_IN, props});
export const logOut = () => ({ type: LOG_OUT });

// сохранение токена
export const SAVE_TOKEN = "SAVE_TOKEN"
export const saveToken = (token) => ({type: SAVE_TOKEN, payload: token})

//сохранение карты
export const SAVE_CARD = "SAVE_CARD"
export const saveCard = (props) => ({ type: SAVE_CARD, props })

//прокладка маршрута
export const WRITE_ROUTE = "WRITE_ROUTE"
export const writeRoute = (coordinates) => ({ type: WRITE_ROUTE, payload: coordinates })
