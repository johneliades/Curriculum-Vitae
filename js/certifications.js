var certificateList = [
	{ file: "images/degree.png", title: 'Degree of Electrical and Computer Engineering' },
	{ file: "images/gep.png", title: '80th National Guard Higher Command' },
];

const certificateFiles = certificateList.map(certificate => certificate.file);
const certificateTitles = certificateList.map(certificate => certificate.title);

var currentCertificate = 0;

const imgElement = new Image();
imgElement.src = "images/gep.png";

const previousButton = document.querySelector('#previous-button');
const nextButton = document.querySelector('#next-button');

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
	var certificateImage = document.querySelector('#certificate-image');
	var $img = $('#certificate-image');
	$img.hide(); 
	certificateImage.src = certificateFiles[currentCertificate];
	$img.fadeIn(800); 
}

document.addEventListener('keydown', function(event) {
	if (event.keyCode === 37) { // Left arrow key
		previousCertificate();
	} else if (event.keyCode === 39) { // Right arrow key
		nextCertificate();
	}
});
