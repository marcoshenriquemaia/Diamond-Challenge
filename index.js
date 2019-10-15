const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $box = document.querySelector("div");

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const createLine = ({ letter }) => {
  let indexLetter = null;
  let control = null;
  const fullLine = [];
  let grow = false;
  
  [...alphabet].some((lett, indexAlphabet) => {
    if (lett === letter) {
      indexLetter = indexAlphabet;
      control = indexAlphabet;
    };
  });
  [... new Array((indexLetter * 2) + 1)].map(item =>{
    [...new Array((indexLetter * 2) + 1)].map((item, indexLine) => {
      control == indexLetter ? fullLine.push(alphabet[indexLine]) : fullLine.push(('_')); 
      control == 0 && (grow = true);
      if(!grow) {control--} else {control++};
    });

    organizeLines({linha: fullLine.join('')});
  })

};

const organizeLines = ({linha}) =>{
  impress({content: linha});

}

const impress = ({ content }) => {
  const span = document.createElement("span");
  span.textContent = content;

  $box.appendChild(span);
};

$button.addEventListener("click", () => {
  const letter = $input.value;
  createLine({ letter });
});
