const btn = document.querySelector("button");

btn.addEventListener("mouseover", function () {
  const width = Math.floor(Math.random() * window.innerWidth);
  const height = Math.floor(Math.random() * window.innerHeight);

  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
});
btn.addEventListener("click", function () {
  btn.innerText = "You have Got Me";
  document.body.style.backgroundColor = "green";
});
