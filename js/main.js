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
$("#change-image-button").click(() => {
  if ($("#toggler").hasClass("switch-local")) {
    const imgPath = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();
    if (imgPath !== "") {
      reader.addEventListener(
        "load",
        function () {
          // convert image file to base64 string and save to localStorage
          localStorage.setItem("image", reader.result);
          $("#display-image").attr("src", localStorage.getItem("image"));
        },
        false
      );

      if (imgPath) {
        reader.readAsDataURL(imgPath);
      }
    } else {
      alert("Select Image in order to change it");
    }
  } else {
    $("#display-image").attr("src", $("#url-field").val());
    $("#url-field").val("");
  }
});

$("input[type='range']").mousedown(function (e) {
  const currentElement = e.target;
  const id = currentElement.id;
  const label = $(`#${id}`).prev("label")[0];
  const labelName = label.innerHTML;
  $("input[type='range']").mousemove(function (event) {
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    label.innerHTML = labelName + " : " + event.target.value
  });
});

$("input[type='range']").mouseup(function (e) {
  $("input[type='range']").unbind("mousemove");
  const currentElement = e.target;
  const id = currentElement.id;
  const label = $(`#${id}`).prev("label")[0];
  const labelName = label.innerHTML;
  label.innerHTML = labelName.split(":")[0]
});
