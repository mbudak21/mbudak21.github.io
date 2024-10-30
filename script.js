// Function to update the clock
function updateClock() {
    const now = new Date();
    const options = { timeZone: 'Europe/Istanbul', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = now.toLocaleTimeString('en-US', options);
    document.getElementById('clock').textContent = `Istanbul Time: ${timeString}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Function to fetch GitHub repositories
async function fetchGitHubRepos() {
    const username = 'mbudak21'; 
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    const reposContainer = document.getElementById('github-repos');
    repos.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.classList.add('repo-card');
        repoCard.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available'}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;
        reposContainer.appendChild(repoCard);
    });
}

// Fetch GitHub repos when the page loads
window.addEventListener('load', fetchGitHubRepos);

// Handle CV download
document.getElementById('download-cv').addEventListener('click', function() {
    window.open('docs/MehmetMuratBudak_CV_30-10-24.pdf', '_blank');
});
