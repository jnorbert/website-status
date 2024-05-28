// URL of the website we want to monitor
const url = 'https://example.com';

// Time between checks (in milliseconds)
const checkInterval = 5000; // 5 seconds

// Function to check the status of the website
async function checkWebsiteStatus() {
    try {
        const fetch = await import('node-fetch');
        const response = await fetch.default(url);
        if (response.ok) {
            console.log('The website is working correctly.');
        } else {
            console.log('The website is not working. Status code:', response.status);
            process.exit(1); // Terminate the script with an error code
        }
    } catch (error) {
        console.error('Error while checking the website:', error);
        process.exit(1); // Terminate the script with an error code
    }
}

// Run the website status check function at specified intervals
setInterval(checkWebsiteStatus, checkInterval);
