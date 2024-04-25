const skillsList = [
  {
    name: "Windows 10/11",
    iconSrc: "./src/assets/icons/Windows.png",
    starCount: 5,
  },
  {
    name: "VS Code",
    iconSrc: "./src/assets/icons/vscode.png",
    starCount: 4,
  },
  {
    name: "HTML5",
    iconSrc: "./src/assets/icons/HTML5.png",
    starCount: 4,
  },
  {
    name: "CSS3",
    iconSrc: "./src/assets/icons/CSS3.png",
    starCount: 4,
  },
  {
    name: "GitHub",
    iconSrc: "./src/assets/icons/GitHub.png",
    starCount: 4,
  },
  {
    name: "JavaScript",
    iconSrc: "./src/assets/icons/JavaScript.png",
    starCount: 3,
  },
  {
    name: "Git",
    iconSrc: "./src/assets/icons/git.png",
    starCount: 3,
  },
  {
    name: "Linux",
    iconSrc: "./src/assets/icons/linux.png",
    starCount: 3,
  },
  {
    name: "React",
    iconSrc: "./src/assets/icons/React.png",
    starCount: 2,
  },
  {
    name: "NPM",
    iconSrc: "./src/assets/icons/npm.png",
    starCount: 2,
  },
  {
    name: "Gimp",
    iconSrc: "./src/assets/icons/gimp.png",
    starCount: 2,
  },
  {
    name: "TypeScript",
    iconSrc: "./src/assets/icons/Typescript.png",
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
