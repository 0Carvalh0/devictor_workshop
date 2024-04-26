const projectsList = [
  {
    name: "Blink",
    thumbnailSrc: "./assets/images/projectsThumbnail/Blink.jpg",
    description:
      "Blink é uma rede social que funciona de maneira rápida, seus posts só são visíveis para você e partir do momento em que você sai todas suas informações serão perdidas e você tera que começar tudo de novo.",
    technologies: ["React", "HTML5", "CSS3", "JavaScript"],
    urlProject: "https://blink-social.netlify.app/",
    urlRepository: "https://github.com/0Carvalh0/projeto-blink",
  },
  {
    name: "Te Salvando",
    thumbnailSrc: "./assets/images/projectsThumbnail/tesalvando.jpg",
    description:
      "Site para ajuda nos estudos para vestibulares. Com esse site você poderá: Ver conteúdos que precisam ser estudados, Ver dicas de como ir bem na prova, Ver datas de provas, Ler um jornal sobre as notícias que podem cair.",
    technologies: ["HTML5", "CSS3"],
    urlProject: "https://0carvalh0.github.io/projeto-te-salvando.com/",
    urlRepository: "https://github.com/0Carvalh0/projeto-te-salvando.com",
  },
  {
    name: "CalculaJão",
    thumbnailSrc: "./assets/images/projectsThumbnail/calculajao.jpg",
    description:
      "Meu primeiro projeto em desenvolvimento front-end, calculadora com diversos cálculos utilizando HTML5, CSS3 e JavaScript.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    urlProject: "https://0carvalh0.github.io/calculajao/index.html",
    urlRepository: "https://github.com/0Carvalh0/calculajao",
  },
  {
    name: "Spotify Clone",
    thumbnailSrc: "./assets/images/projectsThumbnail/spotifyclone.png",
    description:
      "Projeto criado na imersão front-end da Alura, replicando um clone do Spotify usando o React",
    technologies: ["React", "HTML5", "CSS3", "JavaScript"],
    urlProject: "https://spotifywithreactcarvalho.netlify.app/",
    urlRepository: "https://github.com/0Carvalh0/spotify-react",
  },
  {
    name: "Tela de Login",
    thumbnailSrc: "./assets/images/projectsThumbnail/telalogin.png",
    description:
      "Projeto front-end criado durante o curso do Curso em Vídeo do Gustavo Guanabara para treinar responsividade.",
    technologies: ["HTML5", "CSS3"],
    urlProject: "https://0carvalh0.github.io/projeto-login/",
    urlRepository: "https://github.com/0Carvalh0/projeto-login",
  },
];

function automaticProjectGenerator() {
  const sectionInsert = document.querySelector("#section__InsertProjects");

  projectsList.forEach((projectData, indexProject) => {
    const projectStructure = `
    <section class="projectsList__Project projectCard" id="project${
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