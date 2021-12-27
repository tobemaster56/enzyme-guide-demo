import React, {useState} from "react";

/*class Counter extends React.Component<any, {count: number}> {
    state = { count: 0 };
    setCount(count:number) {this.setState({ count })};
    // increment = () => this.setState(({ count }) => ({ count: count + 1 }));
    // decrement = () => this.setState(({ count }) => ({ count: count - 1 }));
    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}*/



const Counter = ()=> {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count => count + 1);
    const decrement = () => setCount(count => count - 1);
    return (
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    );
}


export default Counter;
