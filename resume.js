export function Resume() {
  const div = document.createElement("div");
  div.innerHTML = `
      <div class="box">
          <div class="content">
              <h2 class="title">Resume</h2>
              <p class="paragraph">Resume link here</p>
          </div>
      </div>
        `;
  return div;
}
