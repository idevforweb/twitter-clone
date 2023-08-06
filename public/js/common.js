// common.js : where all the shared scripts between the site will be (  reusable shared code )

const postTextArea = document.querySelector('#postTextArea');
const submitButton = document.querySelector('#submitPostButton');

// Enableling the post button when the user types

// event is the KeyboardEvent object
// target is textarea#postTextArea
// value is user input

postTextArea.onkeyup = function (onKeyupEvent) {
  // get postTextArea user inputed value
  const textAreaContent = onKeyupEvent.target.value.trim();
  //  if there is no button
  if (submitButton.length == 0) alert('No submit button');
  // If textarea is blank or only spaces
  if (textAreaContent === '') {
    // if user post nothing set submit button disabled to true
    submitButton.setAttribute('disabled', true);
    submitButton.style.backgroundColor = '#9bd1f9';
    return;
  }
  // if user post something
  submitButton.setAttribute('disabled', false);
  submitButton.style.backgroundColor = '#1fa2f1';
};
