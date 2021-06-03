import { getRandomNumber } from "./utils";
import { $, $All } from "./utils";
import {
  CAT_EMOJI,
  catGetLive,
  catHissSound,
  catMeowSound,
  DOG_EMOJI,
  DOG_LABEL,
  DOGS_MULTIPLIER,
  MICE_TO_GET_LIVE,
  TABLE_DIMENSION_SIZE,
  TD_TAG,
} from "./constants";

let miceCaught = 0;
let lives = 2;

let tableEl = null;

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded");
  renderLives();
  createTable();
  addDraggableItem(CAT_EMOJI);
  deployDogs();
  addDragAndDropHandler();
});

const deployDogs = () => {
  const allAvailableCells = $All("td");

  for (
    let dogsCount = 0;
    dogsCount < TABLE_DIMENSION_SIZE * DOGS_MULTIPLIER;
    dogsCount++
  ) {
    const dogPosition = getRandomNumber();
    console.log("dogPosition", dogPosition);
    allAvailableCells[dogPosition].dataset[DOG_LABEL] = "yes";
  }
};

const renderLives = () => {
  const livesCountEl = $("#lives-count");
  livesCountEl.innerText = new Array(lives).fill("❤️").join("");
};

const createTable = () => {
  tableEl = document.createElement("table");
  const rowBody = new Array(TABLE_DIMENSION_SIZE).fill(TD_TAG).join("");
  const row = `<tr>${rowBody}</tr>`;
  tableEl.innerHTML = new Array(TABLE_DIMENSION_SIZE).fill(row).join("");
  document.body.append(tableEl);
};

const addDraggableItem = (item) => {
  const firstCell = $("td");
  firstCell.innerHTML = `<div id="drag-me" draggable="true">${item}</div>`;
};

const updateScoreSection = (miceCaught) => {
  $("#mice-count").innerText = miceCaught;
};

const endGame = () => {
  $("#game-over").style.display = "block";
  $("#drag-me").remove();
};

const revealDogAtElement = (el) => (el.innerText = DOG_EMOJI);
const moveToInitialPosition = () => {
  const cat = $("#drag-me");
  const firstTd = $("td");
  firstTd.append(cat);
};

const onMouseEatHandler = () => {
  miceCaught++;
  if (miceCaught % MICE_TO_GET_LIVE !== 0) {
    catMeowSound.play();
  }
  updateScoreSection(miceCaught);
};

const onCatDeathHandler = () => {
  lives--;
  renderLives();
  catHissSound.play();
};

const onGetNewLive = () => {
  lives++;
  renderLives();
  catGetLive.play();
};

const dragOverHandler = (e) => e.preventDefault();
const dropHandler = (e) => {
  const dropZoneElement = e.target;
  const isMouseMutantZone = dropZoneElement.dataset[DOG_LABEL] === "yes";
  if (isMouseMutantZone) {
    moveToInitialPosition();
    revealDogAtElement(dropZoneElement);
    onCatDeathHandler();

    if (lives === 0) {
      endGame();
    }
    return;
  }
  if (dropZoneElement.innerText) {
    dropZoneElement.innerText = "";
    onMouseEatHandler();

    if (miceCaught > 0 && miceCaught % MICE_TO_GET_LIVE === 0) {
      onGetNewLive();
    }
  }

  dropZoneElement.append($("#drag-me"));
};

const addDragAndDropHandler = () => {
  tableEl.addEventListener("dragover", dragOverHandler);
  tableEl.addEventListener("drop", dropHandler);
};
