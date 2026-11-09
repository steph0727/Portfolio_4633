
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig(({ command }) => ({
    base: command === "serve" ? "/" : "/Portfolio_4633/",

    input: {
        index: resolve(import.meta.dirname, "index.html"),
        about: resolve(import.meta.dirname, "about.html"),
        projects: resolve(import.meta.dirname, "projects.html"),
        resume: resolve(import.meta.dirname, "resume.html"),
        contact: resolve(import.meta.dirname, "contact.html"),
        login: resolve(import.meta.dirname, "login.html"),
        callback: resolve(import.meta.dirname, "callback.html"),
        admin: resolve(import.meta.dirname, "admin.html")
    }
}));
