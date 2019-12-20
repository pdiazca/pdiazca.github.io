import React from 'react'

class Header extends React.Component {
    render () {
        return (
            <header>
                <a className="button" href="/">
                <span className="upper-text">
                UI.UX.DEV
                </span>
                <span className="centert-text">
                PABLO DIAZ
                </span>
            </a>
            <a href="/" className="main-link">
                PABLO DIAZ <span>UI.UX.DEV</span>
            </a>
                <nav>
                <a href="/#work">Case Studies</a>
                <a href="/assets/pablodiaz-resume-2019.pdf">Resume</a>
                <a href="mailto:pablo@pdiaz.ca">Contact</a>
                </nav>
            </header>
        )
    }
}

export default Header