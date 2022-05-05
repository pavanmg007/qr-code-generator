const url = document.querySelector("#data");
const api = "https://api.qrserver.com/v1/create-qr-code/?data=";
const submit = document.querySelector("#qrform");
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const address = url.value;
  if (!address) {
    alert("Please enter a valid URL");
    return;
  }
  const finalApi = api + url.value + "&size=500x500";
  const qrcode = document.querySelector("#qrcode");
  qrcode.setAttribute("src", finalApi);
  qrcode.setAttribute("download", "qrcode.jpg");
  url.value = "";
});
