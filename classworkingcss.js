Class working jS

function upVote(event) {
  console.log($(this).siblings());
  if ($(this).siblings(1).hasClass("swill")) {
    ($(this).siblings(1).removeClass("swill"));
    ($(this).siblings(1).addClass("plausible"));
  }
};