import "./Logo.css"

import E from "./images/nav-images/1-E.png"
import W from "./images/nav-images/2-W.png"
import A from "./images/nav-images/3-A.png"
import L from "./images/nav-images/4-L.png"
import D from "./images/nav-images/5-D.png"
import J from "./images/nav-images/6-J.png"
import A2 from "./images/nav-images/7-A.png"
import N from "./images/nav-images/8-N.png"
import Z from "./images/nav-images/9-Z.png"

export default function Logo() {
    return (
        <div id="logo">
            <div id="vorname">
                <img src={E} alt="E" height="310" densities={[1.5, 2]} class="letter" id="E"/>
                <img src={W} alt="W" height="310" densities={[1.5, 2]} class="letter" id="W"/>
                <img src={A} alt="A" height="310" densities={[1.5, 2]} class="letter" id="A"/>
                <img src={L} alt="L" height="310" densities={[1.5, 2]} class="letter" id="L"/>
                <img src={D} alt="D" height="310" densities={[1.5, 2]} class="letter" id="D"/>
            </div>
            <div id="nachname">
                <img src={J} alt="J" height="310" densities={[1.5, 2]} class="letter" id="J"/>
                <img src={A2} alt="A" height="310" densities={[1.5, 2]} class="letter"/>
                <img src={N} alt="N" height="310" densities={[1.5, 2]} class="letter"/>
                <img src={Z} alt="Z" height="310" densities={[1.5, 2]} class="letter"/>
            </div>
        </div>
    )
}