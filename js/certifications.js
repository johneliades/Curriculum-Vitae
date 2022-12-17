var certificateList = [
	{ file: "images/degree.png", title: 'Degree of Electrical and Computer Engineering' },
	{ file: "images/gep.png", title: '80th National Guard Higher Command' },
];

const certificateFiles = certificateList.map(certificate => certificate.file);
const certificateTitles = certificateList.map(certificate => certificate.title);

var currentCertificate = 0;

var certificateCounter = document.querySelector('#certificate-counter');
certificateCounter.textContent = "" + (currentCertificate + 1) + "/" + certificateFiles.length;

var certificateTitle = document.querySelector('#certificate-title');
certificateTitle.textContent = certificateTitles[0];

const imgElement = new Image();
imgElement.src = "images/gep.png";

function previousCertificate() {
	if (currentCertificate > 0) {
		currentCertificate--;
		updateCertificate();
	}
}

function nextCertificate() {
	if (currentCertificate < certificateFiles.length - 1) {
		currentCertificate++;
		updateCertificate();
	}
}

function updateCertificate() {
	var certificateImage = document.querySelector('#certificate-image');
	var $img = $('#certificate-image');
	$img.fadeOut(0); 
	certificateImage.src = certificateFiles[currentCertificate];
	$img.fadeIn(800); 

	var certificateCounter = document.querySelector('#certificate-counter');
	certificateCounter.textContent = "" + (currentCertificate + 1) + "/" + certificateFiles.length;

	var certificateTitle = document.querySelector('#certificate-title');
	certificateTitle.textContent = certificateTitles[currentCertificate];
}

document.addEventListener('keydown', function(event) {
	if (event.keyCode === 37) { // Left arrow key
		previousCertificate();
	} else if (event.keyCode === 39) { // Right arrow key
		nextCertificate();
	}
});
