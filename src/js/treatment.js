function showModal(modalId) {
  $(`#${modalId}`).show();
}

function hideModal(modalId) {
  $(`#${modalId}`).hide();
}

window.onload = () => {
  showModal("modal1");
};
