var $topContainer = $(".top-container");
var $inputContainer = $(".input-container");
var $titleInput = $(".title-input");
var $bodyInput = $(".body-input");
var $submitButton = $(".submit-button");
var $searchInput = $(".search-input");
var $ideaCard = $(".idea-card");

$titleInput.on('keyup', toggleSubmitButton);
$bodyInput.on('keyup', toggleSubmitButton);
$submitButton.on('click', createIdeaCard);
$ideaCard.on('click', 'li .delete-button', deleteCard);
$ideaCard.on('.click', 'li .up-vote', qualityAdjust);
$ideaCard.on('.click', 'li .down-vote', qualityAdjust);

function createIdeaCard(event){
  event.preventDefault();
  var $createCard = $('<li class="new-idea">');
  $createCard.html(`
  <header class="idea-head">
    <h1 class="idea-title">${$titleInput.val()}</h1>
    <img src="images/delete.svg" alt="Delete" class="delete-button buttons">
  </header>
  <p class="idea-body">${$bodyInput.val()}</p>
  <img src="images/upvote.svg" alt="Up Vote" class="up-vote buttons">
  <img src="images/downvote.svg" alt="Down Vote" class="down-vote buttons">
  <p class="quality">quality: </p>`)    
  console.log($createCard.html)
  $ideaCard.prepend($createCard);
  clearInputs();
};

function searchIdeas(){

};

function clearInputs(){
  $titleInput.val('');
  $bodyInput.val('');
};

function deleteCard(){

};

function qualityAdjust(){

};

function toggleSubmitButton(event) {
  event.preventDefault();
  if ($titleInput.val() === '' || $bodyInput.val() === '') {
    $submitButton.prop('disabled', true)
  } else {
    $submitButton.prop('disabled', false)
  }
}











// function IdeaCard(object) {
//   this.id = object.id;
//   this.title = object.title;
//   this.body = object.body;
//   this.quality = object.quality || 'Swill';
// }