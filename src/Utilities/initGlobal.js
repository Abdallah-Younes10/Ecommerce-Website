// src/utils/initGlobal.js
export function initGlobal() {
  // تعريف الـ namespace العام بأمان
  window.MyApp = window.MyApp || {};

  // تعريف أي كائنات عالمية
  window.MyApp.Activity = window.MyApp.Activity || {};
  window.MyApp.User = window.MyApp.User || {};
  window.MyApp.Cart = window.MyApp.Cart || {};
  window.MyApp.Settings = window.MyApp.Settings || {};
}
