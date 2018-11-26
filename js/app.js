document.addEventListener('DOMContentLoaded', () => {

  // 1. connect to elements on web page we want to listen to or change
  const inputForm = document.querySelector('#input-form');

  const allButton = document.querySelector('#all-wods');
  const myButton = document.querySelector('#my-wods');
  const createButton = document.querySelector('#create');
  const infoButton = document.querySelector('#info');
  const blogButton = document.querySelector('#blog');

  const formModal = document.querySelector('#form-modal');

  // 2. define event handlers for actions we want to take when we hear events

  const modalOutsideClickCloseHandler = (event) => {
    console.log(event.target);
    if (event.target === formModal) {
      formModal.close('cancelled');
    }
  }

  const allButtonHandler = (event) => {
    event.preventDefault();
    formModal.close();
    console.log('all button pressed');

  }
  const myButtonHandler = (event) => {
    event.preventDefault();

    console.log('my button pressed');
  }
  const createButtonHandler = (event) => {
    event.preventDefault();
    formModal.showModal();
  }
  const infoButtonHandler = (event) => {
    event.preventDefault();
    formModal.close();

    const info = document.createElement('article');
    info.classList = 'info-article';
    info.innerHTML = `${info_article}`;

    const main = document.querySelector('#main');
    const firstTile = document.querySelector('#first-tile');
    main.removeChild(firstTile);
    main.appendChild( info );
  }

  const blogButtonHandler = (event) => {
    event.preventDefault();
    formModal.close();

  }

  const inputFormHandler = (event) => {
    event.preventDefault();
    formModal.close();
    // 0. Get info from form
    const name = event.target.name.value;
    const type = event.target.type.value;
    const scoring = event.target.scoring.value;
    const emphasis = event.target.emphasis.value;
    const exercises = event.target.exercises.value;
    const rX = event.target.rX.value;
    const equipmentList = event.target['equipment[]'];
    const equipment = [...equipmentList].filter(e => e.checked).map(e => e.value);
    const scores = []
    const score = [event.target.score_date.value, event.target.score_score.value];
    scores.push(score);
    const goal = event.target.goal.value;
    const min_time = event.target.min_time.value;
    const max_time = event.target.max_time.value;

    // 1. stick info from form into an object
    const wodObj = {name, type, scoring, emphasis, exercises, rX, equipment, scores, goal, min_time, max_time};
    console.log(wodObj);

    // 2. use info from form to create new tile
    const newTile = createNewWODTile(wodObj);

    // // 3. render tile to page.
    renderTo('main', newTile);
  };


  // 3. add event listeners to elements we want to listen to
  formModal.addEventListener('click', modalOutsideClickCloseHandler);

  allButton.addEventListener('click', allButtonHandler);
  myButton.addEventListener('click', myButtonHandler);
  createButton.addEventListener('click', createButtonHandler);
  infoButton.addEventListener('click', infoButtonHandler);
  blogButton.addEventListener('click', blogButtonHandler);

  inputForm.addEventListener('submit', inputFormHandler);

});


function createNewWODTile(wodObj){
  const newWODTile = document.createElement('section');
  newWODTile.classList.add('wod-tile');

  // create elements within WOD tile and fill with data from wodObj
  const name = document.createElement('h3');
  const tileList = document.createElement('ul');
  tileList.classList.add('tile-list');
  const type = document.createElement('li');
  const scoring = document.createElement('li');
  const emphasis = document.createElement('li');
  const exercises = document.createElement('li');
  const rX = document.createElement('li');
  const equipment = document.createElement('li');
  const scores = document.createElement('li');
  const goal = document.createElement('li')
  const min_time = document.createElement('li')
  const max_time = document.createElement('li')

  // fill with data from wodObj
  name.textContent = wodObj.name;
  type.textContent = wodObj.type;
  scoring.textContent = wodObj.scoring;
  emphasis.textContent = wodObj.emphasis;
  exercises.textContent = wodObj.exercises;
  rX.textContent = wodObj.rX;
  equipment.textContent = wodObj.equipment;
  const scoresContent = wodObj.scores.reduce((string, score) => {
    string + score[0] + score[1]
  }, '');
  scores.textContent =  wodObj.scores;
  goal.textContent = wodObj.goal;
  min_time.textContent = wodObj.min_time;
  max_time.textContent = wodObj.max_time;

  // append to newWODTile
  newWODTile.appendChild(name);

  tileList.appendChild(type);
  tileList.appendChild(scoring);
  tileList.appendChild(emphasis);
  tileList.appendChild(exercises);
  tileList.appendChild(rX);
  tileList.appendChild(equipment);
  tileList.appendChild(scores);
  tileList.appendChild(goal);
  tileList.appendChild(min_time);
  tileList.appendChild(max_time);

  newWODTile.appendChild(tileList);


  return newWODTile;
}

function renderTo(whereID, what){
    const target = document.querySelector(`#${whereID}`);
    target.appendChild(what);
}

const info_article = `
<h1>WOD List - How To</h1>

  <h2>Quickstart</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ratione, debitis facere itaque vitae doloribus natus accusantium! Quas iusto vero optio ullam nesciunt, ipsam delectus.
    </p>

  <h2>Other Features</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione minus nostrum, magnam earum itaque ut nihil perspiciatis suscipit fugit incidunt, fugiat molestiae modi delectus aspernatur.
    </p>

  <h2>FAQ</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptatibus rerum incidunt itaque iure neque voluptates, molestias ea, facilis id reprehenderit accusantium? Eaque magnam, quibusdam!
    </p>
`;
