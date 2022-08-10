import Component from "../../mozart.js";

let topic_switcher = new Component("topic_switcher");

topic_switcher.assign({
    set_topic() {
        this.store.current_topic = topic_switcher.me.value;
    }
});
topic_switcher.set_topic();

topic_switcher.me.addEventListener("change", topic_switcher.set_topic);

export default topic_switcher;
