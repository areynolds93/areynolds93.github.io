function clickFunction(event) {
	event.preventDefault();
	alert('hey there mr postman', this) ;
};
$('a').on('click', clickFunction);
