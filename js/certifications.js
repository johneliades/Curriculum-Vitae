var certificateList = [
  {
    file: "media/degree.png",
    title: "Degree of Electrical and Computer Engineering",
  },
  { file: "media/gep.png", title: "80th National Guard Higher Command" },
];

const certificateFiles = certificateList.map((certificate) => certificate.file);
const certificateTitles = certificateList.map(
  (certificate) => certificate.title
);

var currentCertificate = 0;

const imgElement = new Image();
imgElement.src = "media/gep.png";

const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");

if (currentCertificate === 0) {
  previousButton.disabled = true;
}

if (currentCertificate === certificateFiles.length - 1) {
  nextButton.disabled = true;
}

function previousCertificate() {
  if (currentCertificate > 0) {
    currentCertificate--;
    updateCertificate();
  }
  if (currentCertificate === 0) {
    previousButton.disabled = true;
  }
  nextButton.disabled = false;
}

function nextCertificate() {
  if (currentCertificate < certificateFiles.length - 1) {
    currentCertificate++;
    updateCertificate();
  }
  if (currentCertificate === certificateFiles.length - 1) {
    nextButton.disabled = true;
  }
  previousButton.disabled = false;
}

function updateCertificate() {
  var certificateImage = document.querySelector("#certificate-image");
  certificateImage.classList.add("fading");
  setTimeout(function () {
    certificateImage.src = certificateFiles[currentCertificate];
    document.getElementById("certificate-frame").scrollTop = 0;
    certificateImage.classList.remove("fading");
  }, 300);
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 37) {
    // Left arrow key
    previousCertificate();
  } else if (event.keyCode === 39) {
    // Right arrow key
    nextCertificate();
  }
});
