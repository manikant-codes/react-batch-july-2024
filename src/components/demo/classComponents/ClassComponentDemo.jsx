import { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, name: props.name, input: "" };
  }

  static getDerivedStateFromProps(props, state) {
    return { name: props.name };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count === nextState.count) {
      return false;
    } else {
      return true;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  componentWillUnmount() {
    alert("Component will unmount!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("asd");
    this.setState({ input: "" });
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
        <div>
          <input
            type="text"
            value={this.state.input}
            onChange={(e) => {
              this.setState({ input: e.target.value });
            }}
          />
        </div>
        <div className="flex gap-4 justify-center">
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
      </div>
    );
  }
}

export default MyComponent;
