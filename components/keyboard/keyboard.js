import Component from "../../mozart.js";

let keyboard = new Component("keyboard");

keyboard.assign({
    set_topic(topic) {
        this.hide_all_keyboards();
        this.show_keyboard(topic);
    },

    show_keyboard(topic) {
        let topic_keyboard = ([].concat(this.q("[data-topic]")).filter(keyboard => keyboard.dataset.topic === topic) || [])[0];
        if (!topic_keyboard) throw `No topic keyboard by the name ${topic}.`
        topic_keyboard.removeAttribute("hidden");
    },

    hide_all_keyboards() {
        [].concat(this.q("[data-topic]")).forEach(topic => {
            topic.setAttribute("hidden", "true");
        })
    }
})

export default keyboard;
