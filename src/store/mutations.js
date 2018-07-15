export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.currentCity = city
    } catch (e) {}
  }
}
