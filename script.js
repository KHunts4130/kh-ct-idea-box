var $topContainer = $(".top-container");
var $inputContainer = $(".input-container");
var $titleInput = $(".title-input");
var $bodyInput = $(".body-input");
var $submitButton = $(".submit-button");
var $searchInput = $(".search-input");
var $ideaCard = $(".idea-card");

$titleInput.on('keyup', toggleSubmitButton);
$bodyInput.on('keyup', toggleSubmitButton);
$submitButton.on('click', newIdeaCard);
$ideaCard.on('click', 'li .delete-button', deleteCard);
$ideaCard.on('click', 'li .up-vote', upVote);
$ideaCard.on('click', 'li .down-vote', downVote);
$searchInput.on('keyup', searchLocalStorage)

function createIdeaCard(event){
  var $createCard = $('<li class="new-idea"></li>');
  $createCard.html(`
  <header class="idea-head">
    <h1 class="idea-title"contenteditable>${$titleInput.val()}</h1>
    <img src="images/delete.svg" alt="Delete" class="delete-button buttons">
  </header>
  <p class="idea-body"contenteditable>${$bodyInput.val()}</p>
  <img src="images/upvote.svg" alt="Up Vote" class="up-vote buttons">
  <img src="images/downvote.svg" alt="Down Vote" class="down-vote buttons">
  <p class="quality">quality: ${"Swill"}</p>`)    
  $ideaCard.prepend($createCard);
  clearInputs();
};

function IdeaCard(object) {
  this.id = object.id;
  this.title = object.title;
  this.body = object.body;
  this.quality = object.quality || 'Swill';
};

function newIdeaCard(event) {
  event.preventDefault();
  id =$.now();
  title = $titleInput.val();
  body = $bodyInput.val();
  quality = 'Swill';
  var makeCard = new IdeaCard({id: id, title: title, body: body, quality: quality});
  
  createIdeaCard(makeCard);
  // add to local strorage here 
}



function searchIdeas(){
  console.log("searchIdeas funcation");
};

function clearInputs(){
  $titleInput.val('');
  $bodyInput.val('');
};

function deleteCard(event){
  $(this).parent().parent().remove();
};


function upVote(event) {
  console.log('up vote function');

};

function downVote(event) {
  console.log('down vote function');
};

function toggleSubmitButton(event) {
  event.preventDefault();
  if ($titleInput.val() === '' || $bodyInput.val() === '') {
    $submitButton.prop('disabled', true)
  } else {
    $submitButton.prop('disabled', false)
  }
};

function searchLocalStorage() {
  console.log('searchLocalStorage function');
}



