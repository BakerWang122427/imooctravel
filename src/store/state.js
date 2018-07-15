let defaultCurrentCity = '北京'
try {
  if (localStorage.currentCity) {
    defaultCurrentCity = localStorage.currentCity
  }
} catch (e) {}

export default {
  city: defaultCurrentCity
}
