import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import counter from './reducers'
import { Provider } from 'react-redux'

const store = createStore(counter)
const rootEl = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
)

// render()
// store.subscribe(render)


// const render = () => ReactDOM.render(
//     <App
//         state={store.getState()}
//         onIncrement={() => store.dispatch(increment())}
//         onDecrement={() => store.dispatch(decrement())}
//         onMultipaler={(num) => store.dispatch(multiplication(num))}
//     />,

//     rootEl
// )

// render()
// store.subscribe(render)