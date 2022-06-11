const url =
  "https://bushrakalaji.com/wp-json/wp/v2/new_post?per_page=50&acf_format=standard&_fields=id,acf";

const myWork = document.querySelector(".my-work");

async function getResults() {
  try {
    const responce = await fetch(url);
    const result = await responce.json();

    console.log(result);

    result.forEach(function (project) {
      myWork.innerHTML += `
    <div class="box-container">
    <div class="post">
    <div class="pst-img"><a href="${project.acf.link}"><img src="${project.acf.image}" alt="${project.acf.title}"/></a></div>
        <div class="pst-content"><h2 class="pst-title">${project.acf.title}</h2>
           <span class="head-content"><p class= "pst-paragraf">${project.acf.discription}</p></span>
           <div class="btn-container">
            <a href="${project.acf.github}" class="pst-btn git-btn">Github repo</a>
            <a href="${project.acf.link}" class="pst-btn view-btn">Visit site</a>
            </div>
        </div>
 </div>
 </div>
    `;
    });
  } catch (error) {
    console.log("error: ", error);
  }
}
getResults();
