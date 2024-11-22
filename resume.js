export function Resume() {
  const div = document.createElement("div");
  div.innerHTML = `
      <div class="box">
          <div class="content">
              <h2>Resume</h2>
              <p>Resume link here</p>
          </div>
      </div>
        `;
  return div;
}
