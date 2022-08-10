import Component from "../../mozart.js";
import keyboard from "../keyboard/keyboard.js";

let topic_switcher = new Component("topic_switcher");

topic_switcher.assign({
    set_topic() {
        let topic = topic_switcher.me.value;
        this.store.current_topic = topic;
        keyboard.set_topic(topic);
    }
});
topic_switcher.set_topic();

topic_switcher.me.addEventListener("change", topic_switcher.set_topic);

export default topic_switcher;
