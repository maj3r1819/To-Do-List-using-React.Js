import React from 'react'
//written using rafc.. arrow function

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        width: "100%",
        height: "100px",
        left: "0",
        bottom:"0"
    }
    return (
        <footer className="container ">
        <p className="float-end"><a href="#">Back to top</a></p>
        <p>© 2017–2021 MajProductions, Inc. · · <a href="#">Terms</a></p>
    </footer>
    )
}
