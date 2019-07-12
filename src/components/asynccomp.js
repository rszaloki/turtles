import { Component, h } from 'preact';

export default class App extends Component {
  state = { a: null }

  async componentDidMount () {
    const a = async () => {
      setTimeout(() => {
        this.setState({a:'a'});
      }, 5000)
    }

    await a()

  }

  render ({}, {a}) {
    return (
      <div>{a}</div>
    );
  }
}
