import React from 'react';

class Item extends React.Component {
    render() {
        return (<div onClick={this.props.onClick} className={this.props.className} ref={element => this.listItem = element}>
            {this.props.children}
        </div>);
    }
}

export default Item;
