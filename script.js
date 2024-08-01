document
  .getElementById("share-button")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click event from bubbling up to the document
    document.querySelector(".share-links").classList.toggle("show");
  });

document
  .getElementById("share-button-2")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click event from bubbling up to the document
    document.querySelector(".share-links").classList.toggle("show");
  });

document.addEventListener("click", function (event) {
  const shareLinks = document.querySelector(".share-links");
  const shareButton = document.getElementById("share-button");
  const shareButton2 = document.getElementById("share-button-2");

  // Check if the click was outside the share links and the share buttons
  if (
    !shareLinks.contains(event.target) &&
    !shareButton.contains(event.target) &&
    !shareButton2.contains(event.target)
  ) {
    shareLinks.classList.remove("show");
  }
});
