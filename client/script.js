let inputButton;
let inputText;

let responseText;
let outputX = 50;
let outputY = 90;
let y = -80

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  inputText = createInput();
  inputText.position(50, 50);
  
  inputButton = createButton("Enter");
  inputButton.position(inputText.x + inputText.width + 10, 50);
  inputButton.mouseClicked(generateText);
}

function draw() {
  textSize(16);
  textFont('Courier')
  background(0);
  push()
  fill(95, 191, 63);
  text("What do you do?", outputX, 30);
  pop()
  fill(95, 191, 63);
  
  text(responseText, outputX, outputY + y);
  
}

async function generateText() {
  let input = inputText.value();
  
  const response = await fetch("http://localhost:3000/generate", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: input
    })
  });
  
  const data = await response.json();
  responseText = '>  ' + `${data.text}`;
  y += 80;
}
