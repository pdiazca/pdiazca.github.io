import React from 'react'
import globalData from '../data/global'

class Intro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tagline: ""
        }
    }

    componentDidMount() {
        this.setState({
            name: globalData.globalData.name,
            tagline: globalData.globalData.tagline
        })
    }

    render () {
        return (
            <div>
                <h1>Hi! I'm {this.state.name}. </h1>
                <h2>{this.state.tagline}</h2>
            </div>
        )
    }
}

export default Intro