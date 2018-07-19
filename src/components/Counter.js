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

    render() {
        const { value, onIncrement, onDecrement, index } = this.props
        // console.log(value)
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={()=>onIncrement(index)}>
                    +
                </button>
                <button onClick={()=>onDecrement(index)}>
                    -
                </button>
                <input type="text" defaultValue="0" ref={this.inputText} />
                <button onClick={this.calculate}>
                    x
                </button>
            </p >

        )
    }
}



    // constructor(props) {
    //     super(props);
    //     this.inputText = React.createRef()
    // }


    // calculate = () => {
    //     const multipaler = this.props.onMultipaler
    //     return multipaler(this.inputText.current.value)
    // }

    // render() {
    //     return (

    //         <p>
    //             Clicked: {state} times {' '}
    //             <button onClick={onIncrement}>+</button>
    //             <button onClick={onDecrement}>-</button>
    //             <input type="text" defaultValue="0" ref={this.inputText} />
    //             <button onClick={this.calculate}>x multipaler</button>
    //         </p >

    //     )
    // }