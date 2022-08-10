import Component from "../../mozart.js";
import Tree from "../../permute.js";

let key = new Component("key");

key.assign({
    insert_permutation(e) {
        let permutation_name = this.get_permutation_name(e);
        console.log(permutation_name)
    },

    get_permutation_name(e) {
        let element = e.target;
        e.stopPropagation();
        return element.dataset.permutation;
    }
});

[].concat(key.me).forEach(_key => _key.addEventListener("click", key.insert_permutation));

export default key;
