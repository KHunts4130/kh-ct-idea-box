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

function createIdeaCard(object){
  $ideaCard.prepend(`
    <li id=${object.id} class="new-idea">
      <header class="idea-head">
        <h1 class="idea-title"contenteditable>${object.title}</h1>
        <img src="images/delete.svg" alt="Delete" class="delete-button buttons">
      </header>
      <p class="idea-body"contenteditable>${object.body}</p>
      <footer class="idea-foot">
        <img src="images/upvote.svg" alt="Up Vote" class="up-vote buttons">
        <img src="images/downvote.svg" alt="Down Vote" class="down-vote buttons">
        <p class="quality-full"><span class="quality-title">quality: </span><span class="quality-judgment">${object.quality}</span></p>
      </footer>
    </li>
  `)    
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

function IdeaCard(object) {
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
  var makeCard = new IdeaCard({id: id, title: title, body: body, quality: 'Swill'});
  
  createIdeaCard(makeCard);
  // add to local strorage here 
}

function searchIdeas(){
  console.log("searchIdeas function");
};

function clearInputs(){
  $titleInput.val('');
  $bodyInput.val('');
};

function deleteCard(event) {
  removeCard = (this).closest('li').id
  $(this).parent().parent().remove();
  localStorage.removeItem(removeCard)
};


function upVote() {
  var quality = ($(this).siblings('p').children('span.quality-judgment').text());
    console.log(quality);
  if (quality === 'Swill') {
    $(this).siblings('p').children('span.quality-judgment').text('Plausible');
  } 
  else if (quality === 'Plausible') {
    $(this).siblings('p').children('span.quality-judgment').text('Genius');
  }
};


function downVote() {
  
  var quality = ($(this).siblings('p').children('span.quality-judgment').text());
  if (quality === 'Genius') {
    $(this).siblings('p').children('span.quality-judgment').text('Plausible');
  } 
  else if (quality === 'Plausible') {
    $(this).siblings('p').children('span.quality-judgment').text('Swill');
  }
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



