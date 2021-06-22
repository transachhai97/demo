import React from 'react';
import Item from "./Item";

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.items && this.props.items.length) {
            return <div>{this.props?.items.map((item) => this.renderItem(item))}</div>;
        }
        return <div>ok</div>
    }

    renderItem(item) {
        return <Item key={item} item={item}
                     active={item === this.props?.activeId}
                     scrollIntoView={this.scrollElementIntoViewIfNeeded}/>
    }

    scrollElementIntoViewIfNeeded(domNode) {
        var containerDomNode = React.findDOMNode(this);
        // Determine if `domNode` fully fits inside `containerDomNode`.
        // If not, set the container's scrollTop appropriately.
    }
}

export default List;
