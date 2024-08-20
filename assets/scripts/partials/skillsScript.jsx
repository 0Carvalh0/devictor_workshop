async function fetchData() {
  const res = await fetch("./assets/json/skills.json");
  const skillsList = await res.json();

  function automaticSkillGenerator() {
    const sectionInsert = document.querySelector(".skills__list");

    skillsList.forEach((skillData, indexSkill) => {
      const skillStructure = `
    <div class="skill" id="skill${indexSkill + 1}"><img src=${
        skillData.iconSrc
      } class="skill__icon" alt="Icon HTML">${skillData.name}</div>
    `;

      sectionInsert.innerHTML += skillStructure;
    });
  }

  function countStars(numberOfStars) {
    let starsInHtml = "";
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
}

fetchData();
