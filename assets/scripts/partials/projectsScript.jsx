async function fetchDataProjects() {
  try {
    const res = await fetch("./assets/json/projects.json");
    if (!res.ok) {
      throw new Error(`Erro ao carregar JSON: ${res.statusText}`);
    }
    const projectsList = await res.json();
    function automaticProjectGenerator() {
      const sectionInsert = document.querySelector(".projects__list");

      projectsList.forEach((projectData, indexProject) => {
        const projectStructure = `
      <div class="project" id="project${indexProject + 1}">
            <h3 class="project__title">${projectData.name}</h3>
            <p class="project__description">
              ${projectData.description}
            </p>
            <div>
              <a href=${
                projectData.urlProject
              } target="_blank" class="project__button">Ver Projeto</a>
              <a href=${
                projectData.urlRepository
              } target="_blank" class="project__button">Ver Repositório</a>
            </div>
          </div>
      `;

        sectionInsert.innerHTML += projectStructure;
      });
    }
    automaticProjectGenerator();
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

fetchDataProjects();
