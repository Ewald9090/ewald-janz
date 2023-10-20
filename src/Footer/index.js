export default function Footer() {
    return (
        <div style={{width: "100vw"}}>
            <div style={{float: "right", fontSize: "0.9rem", marginRight: "1.1em", marginBottom: "10px", marginTop: "10px"}}>
                @{new Date().getFullYear()} Built by <a className="hannas-link" href="https://hannarosenfeld.com/">Hanna Rosenfeld</a>
            </div>
        </div>
    )
}