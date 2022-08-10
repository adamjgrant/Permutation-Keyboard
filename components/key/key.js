import Component from "../../mozart.js";
import Tree from "../../permute.js";
import editor from "../editor/editor.js";

let key = new Component("key");

key.assign({
    insert_permutation(e) {
        let permutation_name = this.get_permutation_name(e);
        let permutation_json = this.get_permutation_json(permutation_name);
        let permutation = `${new Tree(permutation_json).one} `;
        editor.append_text(permutation);
    },

    get_permutation_name(e) {
        let element = e.target;
        e.stopPropagation();
        let permutation_name = element.dataset.permutation;
        if (!permutation_name) throw `Could not get permutation name from key`;
        return permutation_name;
    },

    get_permutation_json(permutation_name) {
        let permtuation_json = permutations[permutation_name];
        if (!permtuation_json) throw `Could not get permutation for ${permutation_name}`;
        return permtuation_json;
    }
});

[].concat(key.me).forEach(_key => _key.addEventListener("click", key.insert_permutation));

export default key;
