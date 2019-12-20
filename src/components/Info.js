import React from 'react'
import SectionTitle from './SectionTitle'
import globalData from '../data/global'

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skillListOne: [],
            skillListTwo: [],
            info: "",
            linkText: "",
            current: 0,
            infoClass: "animated fadeIn"
        }
    }

    componentDidMount() {
        this.setState({
            skillListOne: globalData.globalData.skillsListOne,
            skillListTwo: globalData.globalData.skillsListTwo,
            linkText: "Read More?",
            info: globalData.globalData.info.one
        })
    }

    changeInfo() {
        let currentText = this.state.current + 1;

        this.setState({
            current: currentText,
            infoClass: "animated fadeOut"
        })

        setTimeout(() => {

            switch(this.state.current) {
                case 1:
                    this.setState({
                        infoClass: "animated fadeIn",
                        info: globalData.globalData.info.two,
                        linkText: "Theres More!" 
                    })
                    break;
                case 2: 
                    this.setState({
                        infoClass: "animated fadeIn",
                        info: globalData.globalData.info.three,
                        linkText: "Back"
                    })
                    break;
                case 3:
                    this.setState({ 
                        infoClass: "animated fadeIn",
                        info: globalData.globalData.info.one,
                        current: 0,
                        linkText: "See More?" 
                    })
                    break;
                default:
                    this.setState({ info: globalData.globalData.info.one }) ;
            }

        }, 800)
    }


    render () {
        return (
            <div>
                <section className="about-section clearfix">
                    <SectionTitle title="Who?" />
                    <section className="header-description">
                        <p className={this.state.infoClass} data-current={this.state.current} dangerouslySetInnerHTML={{ __html: this.state.info }}></p>
                        <button onClick={this.changeInfo.bind(this)} alt="More Text" class="read-more-link">{this.state.linkText}</button>
                    </section>
                </section>
                <section className="about-section clearfix">
                    <SectionTitle title="What?" />
                    <section className="header-description clearfix">
                        <SkillList list={this.state.skillListOne}/>
                        <SkillList list={this.state.skillListTwo}/>
                    </section>
                </section>
          </div>
        )
    }
}

class SkillList extends React.Component {
    render () {
        return(
            <ul className="clearfix">
            {this.props.list.map((item, key) =>
                <li key={key}>{item}</li>
            )}
            </ul>
        )
    }
}

export default Info