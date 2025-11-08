export function preventClickDefault(elem) {
	elem.on('click', function (e) {
		e.preventDefault();
	});
}