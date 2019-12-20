import React from 'react'
import Content from './components/Content'
import Loader from './components/Loader'
import './App.scss'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        this.setState({loading: true})

        setTimeout(()=>{
            this.setState({loading: false})
        }, 3000)
    }

    render () {
        let content = this.state.loading ? <Loader /> : <Content />;

        return (
        <div>
            {content}
        </div>
        )
    }
}

export default App;
