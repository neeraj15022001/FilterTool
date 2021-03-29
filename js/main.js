// $("#image-button").click(() => {
//     $("#image-input").trigger("click")
// })
$("#drop-shadow-section").hide();
$("#toggle-button").click(() => {
  $("#toggler").toggleClass("switch-local").toggleClass("switch-url");
  $("#file-browser").toggleClass("d-none");
  $("#url-field").toggleClass("d-none");
});
$("#toggle-drop-shadow-button").click(() => {
  $("#toggle-drop-shadow-button")
    .toggleClass("btn-danger")
    .toggleClass("btn-success");
  $("#toggler-drop-shadow")
    .toggleClass("switch-local")
    .toggleClass("switch-url");
  $("#drop-shadow-section").slideToggle();
});
