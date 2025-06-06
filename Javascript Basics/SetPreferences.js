/*
Create a function that sets default preferences for language, theme, and notifications.

If no values are provided, defaults are applied.
*/

let preferences = {};

function setPreferences(language = "English", theme = "Light", notifications = true) {
  preferences.language = language;
  preferences.theme = theme;
  preferences.notifications = notifications;
}


setPreferences();
console.log(preferences);

setPreferences("Spanish", "Dark", false);
console.log(preferences);

setPreferences("French");
console.log(preferences);
