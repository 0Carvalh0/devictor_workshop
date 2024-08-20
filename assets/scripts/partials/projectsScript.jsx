async function fetchData() {
  const res = await fetch("./assets/json/projects.json");
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
          <a href=${
            projectData.urlProject
          } target="_blank" class="project__button">Ver Projeto</a>
        <a href=${
          projectData.urlRepository
        } target="_blank" class="project__button">Ver Repositório</a>
        </div>
    `;

      sectionInsert.innerHTML += projectStructure;
    });
  }
  automaticProjectGenerator();
}

fetchData();
