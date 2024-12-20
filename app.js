document.getElementById('fetch-button').addEventListener('click', async () => {
    const responseText = document.getElementById('response-text');
    const responseGif = document.getElementById('response-gif');

    try {
        // Show loading state
        responseText.textContent = 'Fetching...';
        responseGif.classList.add('hidden');

        // Fetch data from YesNo API
        const response = await fetch('https://yesno.wtf/api');
        const data = await response.json();

        // Update UI with response
        responseText.textContent = data.answer.toUpperCase();
        responseGif.src = data.image;
        responseGif.classList.remove('hidden');
    } catch (error) {
        // Handle errors
        responseText.textContent = 'Something went wrong! Please try again.';
        responseGif.classList.add('hidden');
        console.error('Error fetching data:', error);
    }
});