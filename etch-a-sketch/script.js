function createGrid() {
  const container = document.querySelector(".container");
  let currColor;

  for (let r = 0; r < 100; r++) {
    const div = document.createElement("div");
    div.classList.add("row");

    for (let i = 0; i < 250; i++) {
      const sq = document.createElement("div");
      sq.classList.add("square");

      sq.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
      });
      div.appendChild(sq);
    }

    container.append(div);
  }

  const reset = document.querySelector('#reset');

    reset.addEventListener('click', () => {
        const sq = document.querySelectorAll('.square');
        
        sq.forEach((s) => {
            s.style.backgroundColor = "white";
        });

    });
}

createGrid();