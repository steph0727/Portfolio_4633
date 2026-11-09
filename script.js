const API_URL = "https://zzd8x2gw7g.execute-api.us-east-2.amazonaws.com";
const loadButton = document.getElementById("loadProjectsButton");

if (loadButton) {
    loadButton.addEventListener("click", loadProjects);
}

async function loadProjects() {

    const projectList = document.getElementById("projectList");

    projectList.innerHTML = "<p>Loading projects...</p>";

    try {

        const response = await fetch(`${API_URL}/projects`);

        const projects = await response.json();

        projectList.innerHTML = "";

        projects.forEach(project => {

            const projectCard = document.createElement("div");

            projectCard.className = "loaded-project";

            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <p><strong>Technologies</strong>: ${project.technology}</p>
            `;

            projectList.appendChild(projectCard);
        });

    } catch (error) {

        projectList.innerHTML =
            "<p>Unable to load projects.</p>";

        console.error(error);
    }
}
const projectForm = document.getElementById("projectForm");

if (projectForm) {
    projectForm.addEventListener("submit", submitProject);
}

async function submitProject(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const project = document.getElementById("project").value;

    const responseArea =
        document.getElementById("formResponse");

    try {

        const response = await fetch(`${API_URL}/project`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                project: project
            })
        });

        const data = await response.json();

        responseArea.textContent = data.message;

    } catch (error) {

        responseArea.textContent =
            "Something went wrong.";

        console.error(error);
    }
}