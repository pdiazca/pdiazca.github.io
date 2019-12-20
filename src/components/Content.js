import React from 'react'
import Header from './Header'
import Intro from './Intro'
import Info from './Info'
import Work from './Work'
import Footer from './Footer'
// import './App.scss'

class App extends React.Component {

    render () {
        return (
        <div className="animated fadeIn delay-2s">
            <Header />
            <section className="container main clearfix">
                <Intro />
                <Info />
                <Work />
                <Footer />
            </section>
        </div>
        )
    }
}

export default App;
