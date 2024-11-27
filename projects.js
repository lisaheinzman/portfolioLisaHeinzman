export function Projects() {
  const div = document.createElement("div");
  div.innerHTML = `
      <div class="box">
          <div class="content">
              <h2 class="title">Projects</h2>
              <p class="paragraph">Projects listed here</p>
          </div>
      </div>
        `;
  return div;
}
