const getStorage = (item) => (JSON.parse(sessionStorage.getItem(item)))
const setStorage = (item, data) => (sessionStorage.setItem(item, JSON.stringify(data)))
const removeStorage = (item) => (sessionStorage.removeItem(item))