import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import workData from '../data/work'
import ReactMarkdown from 'react-markdown'

class WorkContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            selectedWork: "",
            headerImage: "",
            firstColour: "",
            secondColour: "",
            tools: [],
            roles: [],
            tags: [],
        }
    }

    componentDidMount() {
        let selectWork = "../markdowns/" + this.props.workSlug + ".md";

        fetch(selectWork).then((response) => response.text()).then((text) => {
            this.setState({ 
                selectedWork: text,
            })

            workData.work.forEach((work) => {
                if(work.slug === this.props.workSlug) {
                    this.setState({
                        title: work.name,
                        headerImage: work.headerImage,
                        firstColour: work.firstColour,
                        secondColour: work.secondColour,
                        tools: work.tools,
                        roles: work.roles,
                        tags: work.tags,
                        selectedWork: text,
                    })
                }
            })
        })
    }

    render () {
        return (
            <div className="animated fadeIn delay-3s">
                <Header />
                <div className="blog-container">
                    <div className="header-post">
                        <div class="header-post-bg" style={{background: `linear-gradient(${this.state.firstColour}, ${this.state.secondColour})`}}></div>
                        <img className="animated slideInUp"  src={this.state.headerImage} alt="" />
                    </div>

                    <div class="blog">
                        <div class="blog-post">
                            <div class="info clearfix">
                                <div class="work-desc left-text clearfix">
                                    <h1 class="blog-post-title">{this.state.title}</h1>
                                    <div class="bit-tags">
                                        {this.state.tags.map((tag, key) =>
                                            <span key={key}>{tag}</span>
                                        )}
                                    </div>
                                </div>

                                <div class="work-roles">
                                    <WorkPageList 
                                        listTitle="Role"
                                        listItems={this.state.roles}/>
                                    <WorkPageList 
                                        listTitle="Tools"
                                        listItems={this.state.tools}/>
                                </div>
                            </div>
                            <div class="post-content left-text">
                                <ReactMarkdown 
                                    source={this.state.selectedWork}
                                    escapeHtml={false}
                                />
                                <p class="center-text">
                                    <Link to="/#work">Back to Case Studies</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                     <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

class WorkPageList extends React.Component {
    render () {
        return(
            <ul class="blog-info-list left-text">
                <span class="bold">{this.props.listTitle}</span>
                {this.props.listItems.map((item, key) =>
                    <li key={key}>{item}</li>
                )}
            </ul>
        )
    }
}

export default WorkContent