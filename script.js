document.addEventListener("DOMContentLoaded", () => {
  renderNav();
});

function renderNav() {
  const header = document.querySelector("h1.header");

  const navHTML = `
    <nav class="nav text-center">
      <a href="/">home</a>
      <p class="mx-05">|</p>
      <a href="/blog">blog</a>
      <p class="mx-05">|</p>
      <a href="/now.html">now</a>
    </nav>
  `;

  header.insertAdjacentHTML("afterend", navHTML);
}
