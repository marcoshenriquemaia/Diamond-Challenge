const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $box = document.querySelector("div");

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const createLine = ({ letter }) => {
  const fullLine = [];
  let indexLetter = null;
  let control = null;
  let grow = false;
  let linha = "";

  [...alphabet].some((lett, indexAlphabet) => {
    if (lett === letter) {
      indexLetter = indexAlphabet;
      control = indexAlphabet;
    }
  });
  [...new Array((indexLetter * 2) + 3)].map((item, indexLine) => {
    fullLine.push(control + 1);
    console.log(fullLine);
    control < 0 && (grow = true);
    if (grow) {
      control++;
    } else {
      control--;
    }
  });
  control = indexLetter - 1;
  [...(new Array((indexLetter * 2) + 1))].map((item, indexLine) => {
    fullLine.map(position => {
      if (indexLine <= indexLetter) {
        if (indexLine == position) {
          linha = linha + alphabet[indexLine];
        } else {
          linha = linha + " _";
        }
      }
      if (indexLine > indexLetter) {
        if (position == control) {
          linha = linha + alphabet[control];
        }else {
          linha = linha + " _";
        };
      }
    });
    if (indexLine > indexLetter) control--;
    impress({ content: linha });
    linha = "";
  });
};

const impress = ({ content }) => {
  const span = document.createElement("span");
  span.textContent = content;

  $box.appendChild(span);
};

$button.addEventListener("click", () => {
  const letter = $input.value;
  createLine({ letter });
});
