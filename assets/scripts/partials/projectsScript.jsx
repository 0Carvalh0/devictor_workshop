async function fetchData() {
  const res = await fetch("./assets/json/projects.json");
  const projectsList = await res.json();

  function automaticProjectGenerator() {
    const sectionInsert = document.querySelector("#section__InsertProjects");

    projectsList.forEach((projectData, indexProject) => {
      const projectStructure = `
      <section class="projectsList__Project projectCard swiper-slide" id="project${
        indexProject + 1
      }">
      <img
      src=${projectData.thumbnailSrc}
      alt="Thumbnail do projeto"
      class="projectsList__ProjectThumbnail"/>
      <h2 class="mainSection__ProjectTitle">${projectData.name}</h2>
      <section class="projectsList__ProjectTechnologies" id="projectTechnologies${indexProject}">
      </section>
      <p class="mainSection__ProjectDescription">
      ${projectData.description}
      </p>
      <section class="mainSection__ProjectForMore">
          <a href=${
            projectData.urlProject
          } target="_blank" class="mainSection__ProjectButton">Ver Projeto</a>
          <a href=${
            projectData.urlRepository
          } target="_blank" class="mainSection__ProjectButton">Ver Repositório</a>
          </section>
          </section>
          `;

      sectionInsert.innerHTML += projectStructure;

      const projectTechnologiesSection = document.querySelector(
        `#projectTechnologies${indexProject}`
      );
      projectData.technologies.forEach((technology) => {
        const technologyIcon = `<img src="./assets/images/icons/${technology}.png" class="projectsList__TechnologyIcon" alt="ícone ${technology}" />`;
        projectTechnologiesSection.innerHTML += technologyIcon;
      });
    });
  }
  automaticProjectGenerator();
}

fetchData();
