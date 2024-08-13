// Get the phone image element
const phoneImage = document.getElementById('phone-image');

// Add an event listener to the phone image element
phoneImage.addEventListener('click', () => {
	// Open a file input dialog to select a new image
	const fileInput = document.createElement('input');
	fileInput.type = 'file';
	fileInput.accept = 'image/*';
	fileInput.onchange = (e) => {
		const file = fileInput.files[0];
		const reader = new FileReader();
		reader.onload = (e) => {
			phoneImage.src = e.target.result;
		};
		reader.readAsDataURL(file);
	};
	fileInput.click();
});
