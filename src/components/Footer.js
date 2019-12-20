import React from 'react'
import SectionTitle from './SectionTitle'
import globalData from '../data/global'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            links: []
        }
    }

    componentDidMount() {
        this.setState({
            message: globalData.globalData.footerMessage,
            links: globalData.globalData.socialLinks
        })
    }

    render () {
        return (
            <div class="about-section clearfix">
                <SectionTitle title="GET IN TOUCH!" />
                <section className="header-description clearfix">
                    <p dangerouslySetInnerHTML={{ __html: this.state.message }}></p>
                    {this.state.links.map((link, key) =>
                        <a href={link.link} className="soc-link" target="_blank" key={key} rel="noopener noreferrer"><span className="sr-reader">{link.site}</span><i className={link.icon} aria-hidden="true"></i></a>
                    )}
                </section>
            </div>
        )
    }
}

export default Footer