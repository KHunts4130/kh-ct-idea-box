var topContainer = $(".top-container");
var inputContainer = $(".input-container");
var titleIdea = $(".title-idea");
var titleInput = $(".title-input");
var bodyInput = $(".body-input");
var submitButton = $(".submit-button");
var bottomContainer = $(".bottom-container");
var searchContainer = $(".search-container");
var searchInput = $(".search-input");
var cardsContainer = $(".cards-container");
var ideaCard = $(".idea-card");

titleInput.on('keyup', function());
bodyInput.on('keyup', function());
submitButton.on('click', createIdeaCard);
searchContainer.on('keyup,' searchIdeas);
cardsContainer.on('click', deleteCard);
cardsContainer.on('.click', qualityAdjust)


function createIdeaCard(){
  clearInputs();

};

function searchIdeas(){

};

function clearInputs(){

}