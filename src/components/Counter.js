import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.inputText = React.createRef()
    }


    calculate = () => {
        // console.log(this.props.index)
        const multipaler = this.inputText.current.value
        const multiple = this.props.onMultiple
        multiple(this.props.index, multipaler)
    }

    layer = () => {
        const delayer = this.props.onIncrement
        const index = this.props.index
        setTimeout(function(){delayer(index)},1000)
        
    }

    render() {
        const { value, onIncrement, onDecrement, index } = this.props
        // console.log(value)
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button className="button" onClick={() => onIncrement(index)}>
                    +
                </button>
                <button className="button" onClick={() => onDecrement(index)}>
                    -
                </button>
                <input type="text" placeholder="0" ref={this.inputText} />
                <button className="button" onClick={this.calculate}>
                    x
                </button>
                <button className="button" onClick={this.layer}>
                Increment Async
                </button>
            </p >

        )
    }
}

