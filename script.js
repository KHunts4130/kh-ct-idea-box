var $topContainer = $(".top-container");
var $inputContainer = $(".input-container");
var $titleInput = $(".title-input");
var $bodyInput = $(".body-input");
var $submitButton = $(".submit-button");
var $searchInput = $(".search-input");
var $ideaCard = $(".idea-card");
var ideas = []
var n=0


$titleInput.on('keyup', toggleSubmitButton);
$bodyInput.on('keyup', toggleSubmitButton);
$submitButton.on('click', newIdeaCard);
$ideaCard.on('click', 'li .delete-button', deleteCard);
$ideaCard.on('click', 'li .up-vote', upVote);
$ideaCard.on('click', 'li .down-vote', downVote);
$searchInput.on('keyup', searchLocalStorage)


if (localStorage.getItem('ideas')) {
  retrieveFromLocalStorage();
};


function createIdeaCard(idea){
  $ideaCard.prepend(`
    <li id=${idea.id} class="new-idea">
      <header class="idea-head">
        <h1 class="idea-title"contenteditable>${idea.title}</h1>
        <img src="images/delete.svg" alt="Delete" class="delete-button buttons">
      </header>
      <p class="idea-body"contenteditable>${idea.body}</p>
      <footer class="idea-foot">
        <img src="images/upvote.svg" alt="Up Vote" class="up-vote buttons">
        <img src="images/downvote.svg" alt="Down Vote" class="down-vote buttons">
        <p class="quality-full"><span class="quality-title">quality: </span><span class="quality-judgment">${idea.quality}</span></p>
      </footer>
    </li>
  `)
  ideas.push(idea);
  addToLocalStorage();
  clearInputs();
};


function addToLocalStorage() {
  var stringifiedCard = JSON.stringify(ideas);
  localStorage.setItem('ideas', stringifiedCard);
}


function retrieveFromLocalStorage() {
  var retrievedCard = localStorage.getItem('ideas');
  var parsedCard = JSON.parse(retrievedCard);
  console.log(parsedCard);
  parsedCard.forEach(function(idea) {
    createIdeaCard(idea);
    console.log(idea)
  });
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
}


function searchIdeas(){
  console.log("searchIdeas function");
};


function clearInputs(){
  $titleInput.val('');
  $bodyInput.val('');
  $submitButton.prop('disabled', true)
};


function deleteCard(event) { 
  removeCardId = $(this).parent().parent().attr('id')
  var retrievedCard = localStorage.getItem('ideas');
  var parsedCard = JSON.parse(retrievedCard);
  idToRemove = removeCardId
  $(this).parent().parent().remove();
  var newArray = parsedCard.filter(function (obj) {
    console.log('this: ' + obj.id);
    console.log('that: ' + removeCardId);
    return idToRemove != obj.id
  });
  ideas = newArray;
  stringifiedArray = JSON.stringify(ideas);
  localStorage.setItem('ideas', stringifiedArray);
  localStorage.removeItem(ideas);
};


function upVote() {
  // var retrievedCard = localStorage.getItem('ideas');
  // var parsedCard = JSON.parse(retrievedCard);
  // var newArray = parsedCard.filter(function (obj) {
  //   return idToRemove != obj.id
  // });
  // localStorage.removeItem(ideas);
  // stringifiedArray = JSON.stringify(newArray);
  // localStorage.setItem('ideas', stringifiedArray);
  var quality = ($(this).siblings('p').children('span.quality-judgment').text());
    console.log(quality);
  if (quality === 'Swill') {
    $(this).siblings('p').children('span.quality-judgment').text('Plausible');
  } 
  else if (quality === 'Plausible') {
    $(this).siblings('p').children('span.quality-judgment').text('Genius');
  }
  // var ideaToChange = findIdea($(this).parent().parent().attr('id'));
};


function downVote() {
  // changeQualityCardId = $(this).parent().parent().attr('id')
  // console.log(changeQuality)
  // var retrievedCard = localStorage.getItem('ideas');
  // var parsedCard = JSON.parse(retrievedCard);
  // var newQuality = parsedCard.map(function (quality) {
  //   return quality.text()
  // });
  // localStorage.removeItem(ideas);
  // stringifiedArray = JSON.stringify(newArray);
  // localStorage.setItem('ideas', stringifiedArray);
  var quality = ($(this).siblings('p').children('span.quality-judgment').text());
  if (quality === 'Genius') {
    $(this).siblings('p').children('span.quality-judgment').text('Plausible');
  } 
  else if (quality === 'Plausible') {
    $(this).siblings('p').children('span.quality-judgment').text('Swill');
  }
};


function findIdea(id) {
  console.log(id)
  var uniqueId = ideas.filter(function(idea) {
    return idea.id == id;
  })
    return uniqueId[0]
  console.log(uniqueId);
}


function toggleSubmitButton() {
  // event.preventDefault();
  if ($titleInput.val() !== '' && $bodyInput.val() !== '') {
    $submitButton.attr('disabled', false)
  } else {
    return false;
  }
};

function searchLocalStorage() {
  console.log('searchLocalStorage function');
}