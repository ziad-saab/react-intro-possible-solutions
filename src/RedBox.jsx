import React from 'react';

class RedBox extends React.Component {
    render() {

        const numChildren = this.props.children.length;

        return (
            <div className="red-box">
                <p>Congrats, you passed me {numChildren} children!!!</p>
                {this.props.children}
            </div>
        );
    }
}

export default RedBox;
