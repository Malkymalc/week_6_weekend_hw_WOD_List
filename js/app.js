document.addEventListener('DOMContentLoaded', () => {

  // 1. connect to elements on web page we want to listen to or change
  const inputForm = document.querySelector('#input-form');

  // 2. define event handlers for actions we want to take when we hear events
  const inputFormHandler = (event) => {
    event.preventDefault();

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
  inputForm.addEventListener('submit', inputFormHandler);

});


function createNewWODTile(wodObj){
  const newWODTile = document.createElement('section');
  newWODTile.classList.add('wod-tile');

  // create elements within WOD tile and fill with data from wodObj
  const name = document.createElement('h1');       //input/text
  const type = document.createElement('h6');         //radio button
  const scoring = document.createElement('h6');      //radio button
  const emphasis = document.createElement('h6');     //radio button
  const exercises = document.createElement('h6');    //text area
  const rX = document.createElement('h6');           //text area
  const equipment = document.createElement('h6');    //checkbox[]
  const scores = document.createElement('h6');       //{date: score}[]
  const goal = document.createElement('h6')          //input/text
  const min_time = document.createElement('h6')      //input/time
  const max_time = document.createElement('h6')      //input/time

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
  newWODTile.appendChild(title);
  newWODTile.appendChild(type);
  newWODTile.appendChild(scoring);
  newWODTile.appendChild(emphasis);
  newWODTile.appendChild(exercises);
  newWODTile.appendChild(rX);
  newWODTile.appendChild(equipment);
  newWODTile.appendChild(scores);
  newWODTile.appendChild(goal);
  newWODTile.appendChild(min_time);
  newWODTile.appendChild(max_time);

  return newWODTile;
}

function renderTo(whereID, what){
    const target = document.querySelector(`#${whereID}`);
    target.appendChild(what);
}
