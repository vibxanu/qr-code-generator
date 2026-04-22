function generateQR() {
  let text = document.getElementById("text").value;
  let qrImage = document.getElementById("qrImage");
  let downloadBtn = document.getElementById("downloadBtn");

  if (text === "") {
    alert("Please enter text or URL");
    return;
  }

  let apiURL = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + text;

  qrImage.src = apiURL;
  downloadBtn.href = apiURL;
}