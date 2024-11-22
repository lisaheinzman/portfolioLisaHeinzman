export function About() {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="box">
      <div class="about-content">
        <div class="circle"></div>
        <div class="left-column">
          <h2>About Me</h2>
          <p>About me info here</p>
        </div>
      </div>
  </div>
    `;
  return div;
}
