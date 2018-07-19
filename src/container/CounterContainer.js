import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement, multiplication } from '../actions';

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        value: state[ownProps.index]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrement: (index) => dispatch(increment(index)),
        onDecrement: (index) => dispatch(decrement(index)),
        onMultiple: (index, num) => dispatch(multiplication(index, num)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)