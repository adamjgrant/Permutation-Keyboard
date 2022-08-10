import Component from "../../mozart.js";

let editor = new Component("editor");

editor.assign({
    append_text(text) {
      this.me.innerHTML += text;
    }
})

export default editor;
