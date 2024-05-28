#### Website Monitoring Script
This repository contains a Node.js script to monitor the availability of a specified website. The script periodically checks the status of the website and logs the result to the console. If the website becomes unavailable, the script will terminate with an error code, which can be useful for integrating with CI/CD pipelines.

**Features**
- Periodic Checks: The script checks the website status at regular intervals (default is every 5 seconds).
- Status Logging: Logs the status of the website to the console.
- Error Handling: If the website is down or an error occurs, the script logs the error and exits with an error code.

**To run this script on CI**, add the appropriate step to your CI configuration. 
Sample configuration for GitHub Actions is in file githubaction-script.yaml.
Copy the file to the .github/workflows/monitor-website.yml
