(function () {
	const contentLoadedHandler = () => {
		document.documentElement.classList.add('js'); // unused at present
		document.getElementById("test-js-basic").classList.add('u-text-decoration-line-none');
	};

	window.addEventListener('DOMContentLoaded', (event) => {
		contentLoadedHandler();
	});
})();
