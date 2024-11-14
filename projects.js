export function Projects() {
  const div = document.createElement("div");
  div.innerHTML = `
      <h2>Hello, World!</h2>
      <p>This is a component loaded from a separate file.</p>
    `;
  return div;
}
