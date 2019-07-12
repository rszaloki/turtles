import './style.scss';
import { Component, h } from 'preact';
import linkstate from 'linkstate';
import AsyncA from './components/asynccomp.js'
export default class App extends Component {
	state = { text: '', error: '' }

	clickHandler = () => {
		import('./utils.js').then(data => {
			this.setState({error: data.default})
		})
	}

	render({},{ text, error }) {
		return (
			<div id="app">
				<h1 class="avalue">a:<AsyncA/></h1>
				<h1 class="bvalue">b:<button onClick={this.clickHandler}>b</button></h1>
				<textarea value={text} onInput={linkstate(this,'text')} />
				<canvas />
				<div>{error}</div>
			</div>
		);
	}
}
