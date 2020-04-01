(function () {
	const contentLoadedHandler = function () {
		document.getElementById('test-js-subdir').classList.add('u-text-decoration-line-none');
	};

	window.addEventListener('DOMContentLoaded', function (event) {
		contentLoadedHandler();
	});
})();
