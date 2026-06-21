const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", () => {
  localStorage.setItem("isLogin", "true");
  location.href = "index.html";
});
