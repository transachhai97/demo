import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Item from "./Item";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                ],
                [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                ],
                [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                ],
                [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                ],
                [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                ]
            ],
            focus: {
                x: 2,
                y: 2,
            }
        }

        this._nodes = new Map();
    }

    componentDidMount() {
        let {
            focus
        } = this.state;
        this.scrollToItemByIndex(focus.y, focus.x)

        document.addEventListener('keydown', this._handleKey);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this._handleKey);
    }

    scrollToItemByIndex = (row, index) => {
        const node = this._nodes.get(row + '-' + index);
        console.log(node);
        if (node) {
            ReactDOM.findDOMNode(node).scrollIntoView({
                block: 'center',
                inline: 'center'
            });
        }
    }

    _handleKey = (event) => {
        let {
            focus
        } = this.state;
        let newFocus = focus;
        if (event.keyCode === 40) {
            newFocus.x = 0;
            newFocus.y = focus.y + 1;
        } else if (event.keyCode === 38) {
            newFocus.x = 0;
            newFocus.y = focus.y - 1;
        } else if (event.keyCode === 37) {
            newFocus.x = focus.x - 1;
        } else if (event.keyCode === 39) {
            newFocus.x = focus.x + 1;
        }
        console.log(newFocus);

        this.setState({
                focus: newFocus
            }, () => {
                this._click(newFocus.y, newFocus.x)
            }
        )

    }

    _click = (row, index) => {
        this.setState({
                focus: {
                    x: index,
                    y: row,
                },
            }, () => {
                this.scrollToItemByIndex(row, index)
            }
        )
    }

    render() {
        let {
            list,
            focus,
        } = this.state;

        console.log(focus);

        return <div className="container">
            {
                list.map((list, row) => {
                    return <div className="list" key={row}>
                        {
                            list.map((item, index) => {
                                return <Item
                                    key={row + '-' + index}
                                    ref={(element) => this._nodes.set(row + '-' + index, element)}
                                    className={`item ${focus.x === index && focus.y === row ? 'active' : ''} ${index%2 === 0 ? 'blue' : 'yellow'}`}
                                    onClick={() => this._click(row, index)}
                                >
                                    {row} --- {index}
                                </Item>
                            })
                        }
                    </div>

                })
            }
        </div>

    }
}

export default App;
