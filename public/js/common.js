// common.js : where all the shared scripts between the site will be (  reusable shared code )

const postTextArea = document.querySelector('#postTextArea');
const submitButton = document.querySelector('#submitPostButton');

// Enableling the post button when the user types

// event is the KeyboardEvent object
// target is textarea#postTextArea
// value is user input

// On key up event handler

postTextArea.onkeyup = function (onKeyupEvent) {
  const textAreaContent = onKeyupEvent.target.value.trim(); // get postTextArea value trimmed
  if (submitButton.length == 0) alert('No submit button'); // if there is no button
  // If textarea is blank or only spaces
  if (textAreaContent == '') {
    submitButton.setAttribute('disabled', true); // disable submit button
    submitButton.style.backgroundColor = '#9bd1f9';
    console.log('Nothing typed');
    return;
  } else {
    // if user post something
    submitButton.removeAttribute('disabled');
    submitButton.style.backgroundColor = '#1fa2f1';
    console.log('Updated');
  }
};

// data: collected that will be sent to server

submitButton.addEventListener('click', (onClickEvent) => {
  let button = onClickEvent.target;
  data = {
    content: postTextArea.value,
  };
  // Redirect using jquery
  $.post('/api/posts', data, (postData, statusCode, xhr) => {
    alert(postData);
  });
});

// Appending a paragraph tag to the body - jquery testing
// $('body').append('<p>Is a cool Website</p>');
