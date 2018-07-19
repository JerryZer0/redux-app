import React, {Component} from 'react';
import Countainer from "../container/CounterContainer";

export default class CounterGroup extends Component{
    render() {
        const { amount } = this.props;
        let counters = []

        // console.log(amount)

        for (let i = 0; i < amount; i++) {

            counters.push(
                <Countainer index={i} key={i} />
            )
            // console.log(counters)
        }
        return (
            <div>
                {counters}
            </div>
        );
    }
}