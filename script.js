/**
 * Adds a navigation bar to the page. Much more reusable.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Get the header element
  const header = document.querySelector("h1.header");

  // Define the navigation HTML
  const navHTML = `
    <nav class="nav text-center">
      <a href="/">home</a>
      <p class="mx-05">|</p>
      <a href="/blog">blog</a>
    </nav>
  `;

  // Insert the navigation before the header
  header.insertAdjacentHTML("afterend", navHTML);
});
