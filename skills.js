export function Skills() {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="box">
        <div class="content">
            <h2 class="title">Skills</h2>
            <div id="skills-grid">
              <div class="grid-cell">
                <svg class="icon">
                  <use xlink:href="css.svg#icon-js"></use>
                </svg>
                <p class="paragraph">Javascript</p>
              </div>
              <div class="grid-cell">
                <svg class="icon">
                  <use xlink:href="css.svg#icon-html"></use>
                </svg>
                <p class="paragraph">HTML</p>
              </div>
              <div class="grid-cell">
                <svg class="icon">
                  <use xlink:href="css.svg#icon-css" width="90" height="90" x="-1" y="-2"></use>
                </svg>
                <p class="paragraph">CSS</p>
              </div>
              <div class="grid-cell">
                <svg class="icon">
                  <use xlink:href="css.svg#icon-npm" width="80" height="80"></use>
                </svg>
                <p class="paragraph">CSS</p>
              </div>
              <div class="grid-cell">
                <svg class="icon">
                  <use xlink:href="css.svg#icon-js"></use>
                </svg>
                <p class="paragraph">CSS</p>
              </div>
              <div class="grid-cell">
                <svg class="icon">
                  <use xlink:href="css.svg#icon-js"></use>
                </svg>
                <p class="paragraph">CSS</p>
              </div>
              <div class="grid-cell">
                <svg class="icon">
                  <use xlink:href="css.svg#icon-js"></use>
                </svg>
                <p class="paragraph">CSS</p>
              </div>
              <div class="grid-cell">
                <svg class="icon">
                  <use xlink:href="css.svg#icon-js"></use>
                </svg>
                <p class="paragraph">CSS</p>
              </div>
              <div class="grid-cell">
                <svg class="icon">
                  <use xlink:href="css.svg#icon-js"></use>
                </svg>
                <p class="paragraph">CSS</p>
              </div>
              <div class="grid-cell">
                <svg class="icon">
                  <use xlink:href="css.svg#icon-js"></use>
                </svg>
                <p class="paragraph">CSS</p>
              </div>
            </div>
        </div>
    </div>
      `;
  return div;
}
