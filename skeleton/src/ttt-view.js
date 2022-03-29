class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.handleClick = this.handleClick.bind(this);
    this.bindEvents();
  }

  setupBoard() {
    const ul = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        li.setAttribute("data-pos-x", `${i}`);
        li.setAttribute("data-pos-y", `${j}`);
        ul.appendChild(li);
      }
    }
    ul.setAttribute("id", "list");
    this.el.appendChild(ul);
  }

  bindEvents() {
    // const that = this;
    // const ul = document.querySelector(".list");
    this.el.addEventListener("click", this.handleClick);
  }

  handleClick(e) { 
    e.stopPropagation();
    let ele = e.target;
    ele.classList.add('done');
    // debugger;
    ele.classList.add(`${this.game.currentPlayer}`);
    ele.innerText = this.game.currentPlayer;
    this.makeMove(ele);
  }

  makeMove(square) {
    let pos = [square.getAttribute("data-pos-x"), square.getAttribute("data-pos-y")];
    // debugger;
    this.game.playMove(pos);
    console.log(this.game.currentPlayer);
  }
}

module.exports = View;
