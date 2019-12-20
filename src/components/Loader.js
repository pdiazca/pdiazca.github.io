import React from 'react'

class Loader extends React.Component {
    render () {
        return (
            <div className="animated fadeIn delay-3s loading-container">
                <div>
                    <p>PABLO DIAZ</p>
                    <span>UI.UX.DEV</span>
                </div>
            </div>
        )
    }
}

export default Loader