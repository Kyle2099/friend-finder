// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.

//Helps direct the user. When a link is clicked - knows what page to deliver

var path = require('path');

module.exports = function (app,express) {

	// app.use('/data', express.static(path.join(__dirname, '../data')))

	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'))
	});
	// sends user to homepage
	app.use('/', function(req, res) {
		console.log('home');
		res.sendFile(path.join(__dirname + '/../public/home.html'))
	});

}