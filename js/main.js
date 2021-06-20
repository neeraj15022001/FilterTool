let grayscale = 0,
  sepia = 0,
  blur = 0,
  brightness = 100,
  hue = 0,
  saturate = 100,
  opacity = 100,
  contrast = 100,
  invert = 0,
  hsl = 0,
  vsl = 0,
  br = 0,
  dropShadow = false,
  dropShadowColor = "#000000";
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
  dropShadow = !dropShadow;
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
    label.innerHTML = labelName + " : " + event.target.value;
    performFilter(labelName, event.target.value);
  });
});

$("input[type='range']").mouseup(function (e) {
  $("input[type='range']").unbind("mousemove");
  const currentElement = e.target;
  const id = currentElement.id;
  const label = $(`#${id}`).prev("label")[0];
  const labelName = label.innerHTML;
  label.innerHTML = labelName.split(":")[0];
});

$("#color-picker").change((e) => {
  dropShadowColor = e.target.value;
});

function performFilter(filterName, value) {
  const image = document.getElementById("display-image");
  filterName = filterName.trim();
  switch (filterName) {
    case "Grayscale":
      grayscale = value;
      break;
    case "Sepia":
      sepia = value;
      break;
    case "Blur":
      blur = value;
      break;
    case "Brightness":
      brightness = value;
      break;
    case "Hue Rotate":
      hue = value;
      break;
    case "Saturate":
      saturate = value;
      break;
    case "Opacity":
      opacity = value;
      break;
    case "Contrast":
      contrast = value;
      break;
    case "Invert":
      invert = value;
      break;
    case "Horizontal Shadow Length":
      hsl = value;
      break;
    case "Vertical Shadow Length":
      vsl = value;
      break;
    case "Blur Radius":
      br = value;
      break;
    default:
      console.log("case default");
  }
  if (dropShadow) {
    console.log(dropShadowColor);
    image.style.filter = `grayscale(${grayscale}%) sepia(${sepia}%) blur(${blur}px) brightness(${brightness}%) hue-rotate(${hue}deg) invert(${invert}%) opacity(${opacity}%) contrast(${contrast}%) saturate(${saturate}%) drop-shadow(${hsl}px ${vsl}px ${br}px ${dropShadowColor})`;
  } else {
    image.style.filter = `grayscale(${grayscale}%) sepia(${sepia}%) blur(${blur}px) brightness(${brightness}%) hue-rotate(${hue}deg) invert(${invert}%) opacity(${opacity}%) contrast(${contrast}%) saturate(${saturate}%)`;
  }
}
