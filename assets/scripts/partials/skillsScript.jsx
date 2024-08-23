async function fetchData() {
  try {
    const res = await fetch("./assets/json/skills.json");
    if (!res.ok) {
      throw new Error(`Erro ao carregar JSON: ${res.statusText}`);
    }
    const skillsList = await res.json();
    automaticSkillGenerator(skillsList);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

function automaticSkillGenerator(skillsList) {
  const sectionInsert = document.querySelector(".skills__list");
  let sectionCategory = "";

  Object.keys(skillsList).forEach((category) => {
    sectionCategory += `<h3 class="section__title">${category}</h3><section id="category__${category.replace(
      /\s+/g,
      "-"
    )}" class="skills__category">`;

    skillsList[category].forEach((skillData, indexSkill) => {
      sectionCategory += `
        <div class="skill" id="skill${indexSkill + 1}"><img src=${
        skillData.iconSrc
      } class="skill__icon" alt="Icon HTML">${skillData.name}</div>
        `;
    });

    sectionCategory += "</section>";
  });
  sectionInsert.innerHTML += sectionCategory;
}

fetchData();
