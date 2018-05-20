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
  var $quality = $quality || 'Swill';
  var $createCard = $('<li class="new-idea"></li>');
  $createCard.html(`
  <header class="idea-head">
    <h1 class="idea-title"contenteditable>${$titleInput.val()}</h1>
    <img src="images/delete.svg" alt="Delete" class="delete-button buttons">
  </header>
  <p class="idea-body"contenteditable>${$bodyInput.val()}</p>
  <footer class="idea-foot">
    <img src="images/upvote.svg" alt="Up Vote" class="up-vote buttons">
    <img src="images/downvote.svg" alt="Down Vote" class="down-vote buttons">
    <p class="quality"><span class="quality-title">quality: </span>${$quality}</p>
  </footer>`)    
  $ideaCard.prepend($createCard);
  addToLocalStorage();
  clearInputs();
};

function addToLocalStorage(object) {
  console.log('addToLocalStorage function');
  var cardToStore = {id: id, title: title, body: body, quality: quality};
  var stringifiedCard = JSON.stringify(cardToStore);
  localStorage.setItem(id, stringifiedCard);
}

function retrieveFromLocalStorage() {
  // do we need to pass in the id?
  var retrievedCard = LocalStorage.getItem(id);
  var parsedCard = JSON.parse(retrievedCard);
}

function IdeaCard(id, title, body, quality) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = quality;
};

function newIdeaCard(event) {
  event.preventDefault();
  id = $.now();
  title = $titleInput.val();
  body = $bodyInput.val();
  quality = 'Swill';
  var makeCard = new IdeaCard({id: id, title: title, body: $bodyInput.val(), quality: 'swill'});
  
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
  // var $quality = (this).$quality;
  // console.log('up vote function');
  // if ($(this).nextSibling.contains($quality ==='Swill')) {
  //   console.log("working mother fucker");
  }
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



