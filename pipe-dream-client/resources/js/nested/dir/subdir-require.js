(function () {
	const contentLoadedHandler = () => {
		document.getElementById('test-js-subdir').classList.add('u-text-decoration-line-none');
	};

	window.addEventListener('DOMContentLoaded', (event) => {
		contentLoadedHandler();
	});
})();
