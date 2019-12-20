import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import workData from '../data/work'

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedWork: "",
        }
    }

    render () {
        return (
            <div id="work" className="about-section clearfix"> 
                <SectionTitle title="Case Studies" />
                <section className="header-description clearfix">
                    {workData.work.map((item, key) =>
                        <section className="bit clearfix work-bit" key={key}>
                            <Link to={item.slug} className="bit-link">{item.name}</Link>            
                            <div className="bit-tags clearfix">
                                {item.tags.map((tags, key) =>
                                    <span key={key}>{tags}</span>
                                )}
                            </div>
                            <p>{item.snippet}</p>
                            <Link to={item.slug} data-url={item.slug} class="read-more-link">Read More</Link>
                        </section>
                    )}
                </section>
            </div>
        )
    }
}

export default Work