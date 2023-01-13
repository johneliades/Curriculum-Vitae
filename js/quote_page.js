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

var timer = null; 

function typewritter(randomItem) {
	element = document.getElementById("quote")
	element.innerText = "";

	var i = 0;
	var currentText = "";

	function type() {
		if (i < randomItem.length) {
			currentText += randomItem.charAt(i)
			element.innerText = currentText;
			i++;
			timer = setTimeout(type, 40);
		}
	}
	type();
}

<!-- Chooses quote and prints it in iframe -->
$("#bird_container").click(function() {
	var birdElement = document.getElementById('bird');
	birdElement.classList.add('falling');

	setTimeout(() => {
		birdElement.classList.remove('falling');
		var bird_container = document.getElementById("bird_container");
		bird_container.style.animation = 'none';
		bird_container.offsetHeight; /* trigger reflow */
		bird_container.style.animation = null; 
	}, 1000);

	var myArray = [
		"❝The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.❞",
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
		"❝A UDP packet walks into...❞",
		"❝The best way to predict the future is to invent it.❞"
	];

	var randomItem = myArray[generateUniqueRandom(myArray.length-1)];

	clearTimeout(timer);
	typewritter(randomItem);
})

window.onload = function() {
	clearTimeout(timer);
	typewritter("Shoot the bird & enjoy the quote ;)");
};