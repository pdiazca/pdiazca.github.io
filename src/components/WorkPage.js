import React from 'react'
import Loader from './Loader'
import WorkContent from './WorkContent'

class WorkPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({ 
                loading: false
            })
        }, 3500)
    }

    render () {
        let content = this.state.loading ? <Loader /> : <WorkContent workSlug={this.props.match.params.slug}/>;

        return (
            <div>
                {content}
            </div>
        )
    }
}

export default WorkPage