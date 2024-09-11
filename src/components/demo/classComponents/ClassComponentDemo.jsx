import { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, name: props.name };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="p-8 flex gap-4 justify-center items-center h-[calc(100vh-120px)]">
        <button
          type="button"
          onClick={this.decrement}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Minus
        </button>
        <p className="text-4xl">{this.props.name}</p>
        <p className="text-4xl">{this.state.count}</p>
        <button
          type="button"
          onClick={this.increment}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Plus
        </button>
      </div>
    );
  }
}

export default MyComponent;
