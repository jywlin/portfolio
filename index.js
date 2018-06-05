
function renderHome() {
	$('main').html(`
		<div class="intro">
			<h1>Hello there!</h1>
			<h2>I'm Jeff Lin </h2>
			<p>Fullstack/UI Developer, I design and build websites, mobile applications, and other digital products.</p>
		</div>
	`);
}

function renderWork() {
	//$('main').empty();
	$('main').append(`
		<div class="row">
		<hr>
		<div class="js-content-left col-12">
			<img src="./public/images/faceIt.JPG">
		</div>
		<div class="js-content-right col-4">
			<h3><a href="https://fishtailwrinkle.github.io/Face-It">Face It</a></h3>
			<hr class="hr-faceIt">	
			<p>Lorem ipsum dolor sit amet, omittam laboramus vituperata his ei, vim ad ridens adversarium contentiones, vix tollit iuvaret an. At habemus delectus recteque nec, no suscipit signiferumque sea, eos et ignota suavitate. Cu vim soleat scaevola, vim scripta platonem sadipscing ea. Noster intellegam in vel, no utamur reprimique eam, an sea cibo debet platonem. Vel ne audire dolorum fastidii, molestie democritum per ad, ludus mediocrem ea vel.</p>
		</div>
	</div>
	<div class="row">
		<hr>
		<div class="js-content-left col-4">
			<h3><a href="https://connect-the-dots.netlify.com">Connect the Dots...</a></h3>
			<hr class="hr-connectTheDots">
			<p>Lorem ipsum dolor sit amet, omittam laboramus vituperata his ei, vim ad ridens adversarium contentiones, vix tollit iuvaret an. At habemus delectus recteque nec, no suscipit signiferumque sea, eos et ignota suavitate. Cu vim soleat scaevola, vim scripta platonem sadipscing ea. Noster intellegam in vel, no utamur reprimique eam, an sea cibo debet platonem. Vel ne audire dolorum fastidii, molestie democritum per ad, ludus mediocrem ea vel.</p>
		</div>
		<div class="js-content-right col-12">
			<img src="./public/images/connectTheDots.jpg">
		</div>
	</div>
	<div class="row">
		<hr>
		<div class="js-content-left col-12">
			<img src="./public/images/quoteUnquote.jpg">
		</div>
		<div class="js-content-right col-4">
			<h3><a href="https://quote-unquote-thinkful.herokuapp.com">"Quote unQuote"</a></h3>
			<hr class="hr-quoteUnquote">
			<p>Lorem ipsum dolor sit amet, omittam laboramus vituperata his ei, vim ad ridens adversarium contentiones, vix tollit iuvaret an. At habemus delectus recteque nec, no suscipit signiferumque sea, eos et ignota suavitate. Cu vim soleat scaevola, vim scripta platonem sadipscing ea. Noster intellegam in vel, no utamur reprimique eam, an sea cibo debet platonem. Vel ne audire dolorum fastidii, molestie democritum per ad, ludus mediocrem ea vel.</p>
		</div>
	</div>
`);
}

$(function() {
	renderHome();
	renderWork();
});