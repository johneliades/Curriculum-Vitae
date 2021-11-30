let haveIt = [];

function generateUniqueRandom(maxNr) {
	//Generate random number
	let random = (Math.random() * maxNr).toFixed();

	//Coerce to number by boxing
	random = Number(random);

	if(!haveIt.includes(random)) {
		haveIt.push(random);
		return random;
	} 
	else {
		if(haveIt.length >= maxNr) {
			haveIt = [];
		}

		return generateUniqueRandom(maxNr);
	}
}

<!-- Chooses quote and prints it in iframe -->
$("#bird_container").click(function() {
	var myArray = [
		"❝A computer lets you make more mistakes faster than any invention in human history, with the possible exceptions of handguns and tequila.❞",
		"❝Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.❞",
		"❝Any sufficiently advanced bug is indistinguishable from a feature.❞",
		"❝Any fool can write code that a computer can understand. Good programmers write code that humans can understand.❞",
		"❝If privacy is outlawed, only outlaws will have privacy.❞",
		"❝Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.❞",
		"❝Never say anything on the phone that you wouldn't want your mother to hear at your trial.❞",
		"❝Perl - The only language that looks the same before and after RSA encryption.❞",
		"❝The trouble with quotes on the Internet is that you never know if they are genuine.❞",
		"❝Using encryption on the Internet is like arranging an armored car to deliver credit card information from someone living in a cardboard box to someone living on a park bench.❞",
		"❝What one programmer can do in one month, two programmers can do in two months.❞",
		"❝Security in IT is like locking your house or car - it doesn't stop the bad guys, but if it's good enough they may move on to an easier target.❞",
		"❝In theory, one can build provably secure systems. In theory, theory can be applied to practice but in practice, it can't.❞",
		"❝Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.❞",
		"❝One of the best programming skills you can have is knowing when to walk away for awhile.❞",
		"❝Don't write better error messages, write code that doesn't need them.❞",
		"❝Java is to JavaScript what car is to Carpet.❞",
		"❝Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.❞",
		"❝Code is like humor. When you have to explain it, it’s bad.❞",
		"❝How you look at it is pretty much how you'll see it.❞",
		"❝Tomorrow is the busiest day of the week.❞",
		"❝A C program is like a fast dance on a newly waxed dance floor by people carrying razors.❞",
		"❝Programming allows you to think about thinking, and while debugging you learn learning.❞",
		"❝Programming is like sex. One mistake and you have to support it for the rest of your life.❞",
		"❝In order to understand recursion, one must first understand recursion.❞",
		"❝C++, where friends have access to your private members.❞",
		"❝Document What You Know When You Know It.❞",
		"❝Software is like cathedrals. First we build them, then we pray.❞",
		"❝Knock knock. Race condition. Who's there?❞",
		"❝What's the best thing thing about UDP jokes? I don't care if you get them.❞",
		"❝A UDP packet walks into a bar, no one acknowledges him.❞",
		"❝A UDP packet walks into...❞"
	];

	var randomItem = myArray[generateUniqueRandom(myArray.length-1)];

	iframe=document.getElementById('iframe_main');
	iframe.contentWindow.document.getElementById('quote').innerText = randomItem;
})

<!-- Disables the bird -->
$(".hide_bird").click(function() {
	var href = $(this).attr('href');
	href = href.replace('documents/','');
	href = 	href.replace('.html','');
	href = 	href.replace('.png','');
	href = 	href.replace('.pdf','');

	href = href.substr(0,1).toUpperCase() + href.substr(1);

	document.title = "[John@Portfolio]-[" + href + "]";

	$('#main_screen').fadeOut("fast");
	$('#main_screen').hide();

	var element = document.getElementById("main_screen");
	if(element)	{
		element.style.backgroundSize = "0px 0px";
		element.style.boxShadow = "none";
	}

	var bird = document.getElementById("bird");
	if(bird) {
		bird.style.zIndex = -1;
		bird.style.opacity = 0;
	}

	var bird_container = document.getElementById("bird_container");
	if(bird_container)
		bird_container.style.zIndex = -1;

	$('#main_screen').fadeIn("slow");
	$("#iframe_main").focus();
})

<!-- Shows the welcome message and then enables the bird -->
function initFrame() {
	$('#main_screen').hide();

	document.title = "[John@Portfolio]-[~]"

	var element = document.getElementById("main_screen");
	if(element)	{
		element.style.boxShadow = "inset 0px 0px 10px 0px white";
		element.style.backgroundSize = "cover";
	}

	var bird = document.getElementById("bird");
	if(bird) {
		bird.style.zIndex = 0;
		bird.style.opacity = 100;
	}

	var bird_container = document.getElementById("bird_container");
	if(bird_container)
		bird_container.style.zIndex = 0;

	iframe=document.getElementById('iframe_main');
	iframe.src = "quote_page.html";
	iframe.contentWindow.document.getElementById('quote').innerText = "Shoot the bird & enjoy the quote ;)"

	$('#main_screen').fadeIn("slow");
	$("#iframe_main").focus();
}

$(".clear_frame").click(initFrame);
$(document).ready(initFrame);
