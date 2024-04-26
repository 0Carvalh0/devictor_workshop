const skillsList = [
  {
    name: "Windows 10/11",
    iconSrc: "./assets/images/icons/Windows.png",
    starCount: 5,
  },
  {
    name: "VS Code",
    iconSrc: "./assets/images/icons/vscode.png",
    starCount: 4,
  },
  {
    name: "HTML5",
    iconSrc: "./assets/images/icons/HTML5.png",
    starCount: 4,
  },
  {
    name: "CSS3",
    iconSrc: "./assets/images/icons/CSS3.png",
    starCount: 4,
  },
  {
    name: "GitHub",
    iconSrc: "./assets/images/icons/GitHub.png",
    starCount: 4,
  },
  {
    name: "JavaScript",
    iconSrc: "./assets/images/icons/JavaScript.png",
    starCount: 3,
  },
  {
    name: "Git",
    iconSrc: "./assets/images/icons/git.png",
    starCount: 3,
  },
  {
    name: "Linux",
    iconSrc: "./assets/images/icons/linux.png",
    starCount: 3,
  },
  {
    name: "React",
    iconSrc: "./assets/images/icons/React.png",
    starCount: 2,
  },
  {
    name: "SASS",
    iconSrc: "./assets/images/icons/sass.png",
    starCount: 2,
  },
  {
    name: "NPM",
    iconSrc: "./assets/images/icons/npm.png",
    starCount: 2,
  },
  {
    name: "Gimp",
    iconSrc: "./assets/images/icons/gimp.png",
    starCount: 2,
  },
  {
    name: "Bootstrap",
    iconSrc: "./assets/images/icons/bootstrap.png",
    starCount: 1,
  },
  {
    name: "TypeScript",
    iconSrc: "./assets/images/icons/Typescript.png",
    starCount: 1,
  },
];

function automaticSkillGenerator() {
  const sectionInsert = document.querySelector("#section__InsertSkills");

  skillsList.forEach((skillData, indexSkill) => {
    const skillStructure = `
    <section class="skillsList__Skill skillCard" id="skill${indexSkill + 1}">
      <img
        src=${skillData.iconSrc}
        class="skillsList__SkillIcon"
        alt="Ícone da habilidade"
      />
      <h2 class="mainSection__SkillTitle">${skillData.name}</h2>
      <section class="mainSection__SkillRating" id="section__InsertSkillRating">
        ${countStars(skillData.starCount)}
      </section>
    </section>
    `;

    sectionInsert.innerHTML += skillStructure;
  });
}

function countStars(numberOfStars) {
  let starsInHtml = '';
  const restOfTheStars = 5 - numberOfStars;

  for (let i = 0; i < numberOfStars; i++) {
    starsInHtml += '<i class="fa-solid fa-star"></i>';
  }

  for (let j = 0; j < restOfTheStars; j++) {
    starsInHtml += '<i class="fa-regular fa-star"></i>';
  }

  return starsInHtml;
}

automaticSkillGenerator();
