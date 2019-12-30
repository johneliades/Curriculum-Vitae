function get_quote() {
	var myArray = [
		"❝A computer lets you make more mistakes faster than any invention in human history, with the possible exceptions of handguns and tequila.❞ <br><br> - Mitch Ratliff",
		"❝Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.❞ <br><br> - John Woods",
		"❝Any sufficiently advanced bug is indistinguishable from a feature.❞ <br><br> - Rich Kulawiec",
		"❝Any fool can write code that a computer can understand. Good programmers write code that humans can understand.❞ <br><br> - Martin Fowler",
		"❝If privacy is outlawed, only outlaws will have privacy.❞ <br><br> - Philip Zimmermann",
		"❝Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.❞ <br><br> - Muhammad Waseem",
		"❝Never say anything on the phone that you wouldn't want your mother to hear at your trial.❞ <br><br> - Sydney Biddle Barrows",
		"❝Perl - The only language that looks the same before and after RSA encryption.❞ <br><br> - Keith Bostic",
		"❝The trouble with quotes on the Internet is that you never know if they are genuine.❞ <br><br> - Benjamin Franklin",
		"❝Using encryption on the Internet is the equivalent of arranging an armored car to deliver credit card information from someone living in a cardboard box to someone living on a park bench.❞ <br><br> - Gene Spafford",
		"❝What one programmer can do in one month, two programmers can do in two months.❞ <br><br> - Fred Brooks",
		"❝Security in IT is like locking your house or car - it doesn't stop the bad guys, but if it's good enough they may move on to an easier target.❞ <br><br> - Paul Herbka",
		"❝In theory, one can build provably secure systems. In theory, theory can be applied to practice but in practice, it can't.❞ <br><br> - M.Dacier, Eurecom Institute",
		"❝Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.❞ <br><br> - Patrick McKenzie",
		"❝One of the best programming skills you can have is knowing when to walk away for awhile.❞ <br><br> - Oscar Godson",
		"❝Don't write better error messages, write code that doesn't need them.❞ <br><br> - Jason C. McDonald",
		"❝Java is to JavaScript what car is to Carpet.❞ <br><br> - Chris Heilmann",
		"❝Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.❞ <br><br> - Dan Salomon",
		"❝Code is like humor. When you have to explain it, it’s bad.❞ <br><br> - Cory House",
		"❝How you look at it is pretty much how you'll see it.❞ <br><br> - Rasheed Ogunlaru",
		"❝Tomorrow is the busiest day of the week.❞ <br><br> - Spanish Proverb",
		"❝A C program is like a fast dance on a newly waxed dance floor by people carrying razors.❞ <br><br> - Waldi Ravens",
		"❝Programming allows you to think about thinking, and while debugging you learn learning.❞ <br><br> - Nicholas Negroponte",
		"❝Programming is like sex. One mistake and you have to support it for the rest of your life.❞ <br><br> - Michael Sinz",
		"❝In order to understand recursion, one must first understand recursion.❞ <br><br> - Me",
		"❝C++, where friends have access to your private members.❞ <br><br> - Anonymous",
		"❝Document What You Know When You Know It.❞ <br><br> - Me",
		"❝Software is like cathedrals. First we build them, then we pray.❞ <br><br> - Sam Redwine",
		"❝Knock knock. Race condition. Who's there?❞ <br><br> - Anonymous",
		"❝What's the best thing thing about UDP jokes? I don't care if you get them.❞ <br><br> - Anonymous",
		"❝A UDP packet walks into a bar, no one acknowledges him.❞ <br><br> - Anonymous",
		"❝A UDP packet walks into...❞ <br><br> - Anonymous"
	];

	var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

	iframe=document.getElementById('iframe_main')
	iframe.contentWindow.document.open();
	iframe.contentWindow.document.write("");

	const html= 
		`
		<html>
			<head>
				<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
			</head>
			<body>
				<style>
					body, html {
						margin: 0;
						height: 100%;
						width: 100%;
						overflow: hidden;
					 	scrollbar-width: none;
						cursor: url('cursors/crosshair.cur'), crosshair;
					}

					::-webkit-scrollbar { 
						display: none; 
					}

					.unselectable {
						-webkit-touch-callout: none;
						-webkit-user-select: none;
						-khtml-user-select: none;
						-moz-user-select: none;
						-ms-user-select: none;
						user-select: none;
					}
					
					.breaking{
						padding-bottom: 5%;
						width: 100%;
						word-wrap: break-word;
						transition: 0.2s;
					}

					.outer {
						display: table;
						position: absolute;
						height: 100%;
						width: 100%;
					}

					.middle {
						display: table-cell;
						vertical-align: middle;
					}

					p.custom_font {
						font-family: "Roboto";
						font-size: 22px;
						margin-right: 20vw;
						margin-left: 20vw;
						text-align: center;
					}

					.fade{animation:opac 0.8s}@keyframes opac{from{opacity:0} to{opacity:1}}
				</style>

				<div class="outer breaking unselectable fade">
					<div class="middle">
						<p class="custom_font">
							<b>`
								+ randomItem + `
							</b>
						</p>
					</div>
				</div>
			</body>
		</html>
		`

	iframe.contentWindow.document.write(html);
	iframe.contentWindow.document.close();
}

function hide_bird() {
	var element = document.getElementById("main_screen");
	if(element)			
		element.style.backgroundSize = "0px 0px";

	var bird = document.getElementById("bird");
	if(bird) {
		bird.style.zIndex = -1;
		bird.style.opacity = 0;
	}

	var bird_container = document.getElementById("bird_container");
	if(bird_container)
		bird_container.style.zIndex = -1;
}

function clearFrame() {
	initFrame();

	var element = document.getElementById("main_screen");
	if(element)			
		element.style.backgroundSize = "cover";

	var bird = document.getElementById("bird");
	if(bird) {
		bird.style.zIndex = 0;
		bird.style.opacity = 100;
	}

	var bird_container = document.getElementById("bird_container");
	if(bird_container)
		bird_container.style.zIndex = 0;
}

function initFrame() {
	const html= 
		`
		<html>
			<head>
				<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
			</head>
			<body>
				<style>
					body, html {
						margin: 0;
						height: 100%;
						width: 100%;
						overflow: hidden;
					 	scrollbar-width: none;
						cursor: url('cursors/crosshair.cur'), crosshair;
					}

					::-webkit-scrollbar { 
						display: none; 
					}

					.unselectable {
						-webkit-touch-callout: none;
						-webkit-user-select: none;
						-khtml-user-select: none;
						-moz-user-select: none;
						-ms-user-select: none;
						user-select: none;
					}

					.outer {
						display: table;
						position: absolute;
						height: 100%;
						width: 100%;
					}

					.middle {
						display: table-cell;
						vertical-align: middle;
					}

					p.custom_font {
						font-family: "Roboto";
						font-size: 22px;
						margin-right: 20vw;
						margin-left: 20vw;
						text-align: center;
					}

					.fade{animation:opac 0.8s}@keyframes opac{from{opacity:0} to{opacity:1}}
				</style>

				<div class="outer unselectable fade">
					<div class="middle">
						<p class="custom_font">
							<b>
								Shoot the bird <br> & enjoy ;)
							</b>
						</p>
					</div>
				</div>
			</body>
		</html>
		`
	iframe=document.getElementById('iframe_main')
	iframe.contentWindow.document.open();
	iframe.contentWindow.document.write(html);
	iframe.contentWindow.document.close();
}