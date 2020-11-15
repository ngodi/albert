const about_text = "A talented software developer with experience providing web solutions using the latest technology trends. In the frontend, I work with Javascript, React.js, HTML/CSS, bootstrap, SASS, while in the backend I work with Ruby on Rails, Node.js, and Mysql. I also have excellent communication and collaboration skills.";

document.querySelector(".about__text").innerHTML = about_text;

const work = [
  {
    title: "GIOVANNI ONLINE STORE",
    preview: "./assets/img/giovanni.jpg",
    desc:"Giovanni online store is a full featured ecommerce website allowing users to search products, add products to their shopping cart, checkout, and make payments securely.",
    tech: ['REACTJS', 'HOOKS', 'MONGODB', 'NODEJS', 'EXPRESS'],
    code: "https://github.com/ngodi/giovanni-reactjs",
    demo: "http://204.48.17.55/"
    },
    {
    title: "BATTLESHIP",
    preview: "./assets/img/battleship.png",
    desc:"Battleship is a game played on the browser between a user and the computer. The game ends when all the ships on a given gameboard have all been hit; they are said to be sunk, the opponent is then declared winner.",
    tech: ['HTML', 'CSS', 'JAVASCRIPT', 'JEST'],
    code: "https://github.com/ngodi/battleship-game",
    demo: "https://battleship-js.netlify.com/"
    },
    {
    title: "Ufriends Social Network",
    preview: "./assets/img/ufriends.png",
    desc:"Built by a team of two, where both members contributed fully in this project from conception, design, implementation, testing to deployment. The ruby on rails full-stack framework was used in  building this project.",
    tech: ['RUBY ON RAILS','HTML5', 'CSS3', 'BOOTSTRAP'],
    code: "https://github.com/diegoarvz4/building_facebook",
    demo: "https://intense-refuge-98385.herokuapp.com/"
    },
    {
    title: "BookTracker CMS",
    preview: "./assets/img/booktracker.png",
    desc:" BookTracker CMS is used to store and keep track of books read by a particular user. This enables the user to easily visualise all the books read as well as the content covered and current chapter being read.",
    tech: ['REDUX', 'REACT.JS'],
    code: "https://github.com/ngodi/redux-bookstore",
    demo: "https://booktracker.netlify.com/"
    },
    {
    title: "Drawing App",
    preview: "./assets/img/drawing.png",
    desc:"Web drawing app using HTML Canvas, jQuery and jQueryUI. Very interactive and good for kids learning to draw.",
    tech: ['JQuery', 'JQUERYUI','HTML5 CANVAS', 'CSS'],
    code: "https://github.com/ngodi/JQuery_Drawing_App",
    demo: "https://drawing-app.netlify.com/"
    }
];

for (let item of work) {
 let tec = item.tech.map(item => `
    <span>${item}</span>
 `)
  document.querySelector(".work__container")
   .insertAdjacentHTML('beforeend',
  `
  <div class="work__container__sub">
    <div class="work__img">
        <img src="${item.preview}" alt="" width="100%" height="100%">
    </div>
    
    <div class="work__title">${item.title}</div>
    <div class="tech__stack">${tec}</div>
        <p class="work__description">${item.desc}</p>
        <div class="work__buttons">
          <a target="_blank" class="left" href=${item.code}><i class='bx bxl-github'></i>source code</a>
          <a target="_blank" class="right" href=${item.demo}><i class='bx bxl-internet-explorer'></i>live demo</a>
        </div>
 </div>
   `
  )
}