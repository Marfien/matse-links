import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App)
    .mount('#index')

export function toggleNavbar() {
    let header = document.getElementById("header")!!;
    let icon = document.getElementById("burgericon")!!;
    let classList = header.classList;

    if (!classList.contains("open")) {
        classList.add("open");
        icon.classList.add("open")
    } else {
        classList.remove("open")
        icon.classList.remove("open")
    }
}