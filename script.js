document.addEventListener("DOMContentLoaded", () => {
  const shareIcon = document.getElementById("share-icon");
  const shareContainer = document.getElementById("share-container");

  const handleClick = (event) => {
    event.preventDefault();
    shareContainer.classList.toggle("open");
    shareIcon.classList.toggle("open");
  };

  shareIcon.addEventListener("click", handleClick);
});
