async function fetchRepoContents() {
	const username = 'Nikhil-sha'; // Your GitHub username
	const repo = 'Physics-formulas'; // Your GitHub repository name

	const url = `https://api.github.com/repos/${username}/${repo}/contents/`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		const projectList = document.getElementById('projectList');
		projectList.innerHTML = '';

		data.forEach(item => {
			if (item.type === 'dir') { // Check if it's a folder
				const li = document.createElement('li');
				li.className = 'bg-white shadow-md rounded-lg p-6 hover:bg-gray-200 transition duration-300';
				li.innerHTML = `
                            <h2 class="text-xl font-semibold mb-2">${item.name}</h2>
                            <a href="https://${username}.github.io/${repo}/${item.name}" class="text-blue-500 hover:text-blue-700">View Project</a>
                `;
				projectList.appendChild(li);
			}
		});
	} catch (error) {
		const li = document.createElement('li');
		li.className = 'bg-white shadow-md rounded-lg p-6 hover:bg-gray-200 transition duration-300';
		li.innerHTML = `
        	<h2 class="text-xl font-semibold mb-2">Nothing Found</h2>
        `;
		projectList.appendChild(li);
	}
}

// Fetch the contents when the page loads
fetchRepoContents();
