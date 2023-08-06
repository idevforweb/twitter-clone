// common.js : where all the shared scripts between the site will be (  reusable shared code )

const postTextArea = document.querySelector('#postTextArea');
const submitButton = document.querySelector('#submitPostButton');

// event is the KeyboardEvent object
// target is textarea#postTextArea
// value is user input

postTextArea.onkeyup = function (onKeyupEvent) {
  // get postTextArea user inputed value
  const value = onKeyupEvent.target.value.trim();
  //  if there is no button
  if (submitButton.length == 0) alert('No submit button');
  if (value === '') {
    // if user post nothing set submit button disabled to true
    submitButton.setAttribute('disabled', true);
    submitButton.style.backgroundColor = '#9bd1f9';
    return;
  }
  // if user post something
  submitButton.setAttribute('disabled', false);
  submitButton.style.backgroundColor = '#1fa2f1';
};
