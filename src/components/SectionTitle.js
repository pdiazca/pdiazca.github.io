import React from 'react'

class SectionTitle extends React.Component {
    render () {
        return (
            <section className="header-subtitle">
                <p>{this.props.title}</p>
            </section>
        )
    }
}

export default SectionTitle