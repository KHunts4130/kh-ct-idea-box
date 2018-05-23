 function deleteCard(event) {
  // console.log($(this).id)
  localStorage.removeItem($(this).id);
  $(this).parent().parent().remove();
};
