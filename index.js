
function renderHome() {
	$('main').html(`
		<div class="intro">
			<br><br>
			<h1>Hello world!</h1>
			<h2>I'm <a href="#">Jeff Lin</a></h2>
			<p>Fullstack/UI Developer, I design and build responsive websites and mobile applications.</p>
			<a href="https://www.linkedin.com/in/jeff-yu-wei-lin" target="_blank"><img src="./public/images/In-2C-28px-TM.png"></a>
		</div>
	`);
}

function renderWork() {
	//$('main').empty();
	//JavaScript jQuery
	$('main').append(`
		<div class="row">
		<hr>
		<div class="js-content-left col-10">
			<img src="./public/images/faceIt.JPG">
		</div>
		<div class="js-content-right col-6">
			<h3><a href="https://jywlin.github.io/faceit" target="_blank">Face-It</a></h3>
			<hr class="hr-faceIt">	
			<p>Face-It allows the users to upload (provide an URL to) a human face image for analysis. The app returns information about the person based purely on the facial features analyzed from this image. A beauty score is also calculated for reference. The user can then upload (provide a URL to) another human face image for the same analysis and comparison. The two images of human faces are compared for similarities and an alikeness score is calculated for reference. Face-It is designed to provide human face analysis and comparison between different people, age, mood, style, cosmetics, plastic surgery, etc. and also to find similarities between family members, look-alikes, twins, etc.</p>
		</div>
	</div>
	<div class="row">
		<hr>
		<div class="js-content-left col-6">
			<h3><a href="https://connect-the-dots.netlify.com" target="_blank">Connect the Dots...</a></h3>
			<hr class="hr-connectTheDots">
			<p>"Connect the Dots..." is an interactive app that allows people to share and appreciate the artistic creativities via creating drawings on a digital canvas. Users are encouraged to create a drawing and use an English vocabulary to describe what it is, then invite others to play the game by guessing the correct vocabulary represents the drawing.</p>
		</div>
		<div class="js-content-right col-10">
			<img src="./public/images/connectTheDots.jpg">
		</div>
	</div>
	<div class="row">
		<hr>
		<div class="js-content-left col-10">
			<img src="./public/images/quoteUnquote.jpg">
		</div>
		<div class="js-content-right col-6">
			<h3><a href="https://quote-unquote-thinkful.herokuapp.com" target="_blank">"Quote unQuote"</a></h3>
			<hr class="hr-quoteUnquote">
			<p>"Quote Unquote" allows the users to look up specific products via part numbers for historical quotation management. The app returns historical quotations from product suppliers. The user can add, delete, edit, retrive historical quotations via product part numbers. "Quote Unquote" is designed for shop owners to keep track of historical quotations, to monitor the price trend, to evaluate suppliers, etc. with remarkable ease of mind for product cost management.</p>
		</div>
	</div>
`);
}

$(function() {
	renderHome();
	renderWork();
});