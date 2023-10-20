import Logo from "../Logo"
import Nav from "../Nav"

import "./Index.css"

export default function Index() {
    return (
        <>
            <div class="page-wrapper">
                <div id="site-nav">
                    <Logo/>
                </div>
            </div>
            <div class="page-wrapper">
                <Nav/>
            </div>
        </>
    )
}