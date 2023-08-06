// common.js : where all the shared scripts between the site will be (  reusable shared code )

const postTextArea = document.querySelector('#postTextArea');
postTextArea.onkeyup = function (onKeyBoardEvent) {
  // event is the KeyboardEvent object
  // target is #postTextArea
  // value is user input
  const textBox = onKeyBoardEvent.target.value.trim();
  console.log(textBox);
};
