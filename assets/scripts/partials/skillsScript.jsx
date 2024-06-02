async function fetchData() {
  const res = await fetch("./assets/json/skills.json");
  const skillsList = await res.json();
  
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

