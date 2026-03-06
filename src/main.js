import "./style.css";
import { greet } from "./utils.js";

document.querySelector(".hero h1").textContent = greet("GH Actions Deploy");
