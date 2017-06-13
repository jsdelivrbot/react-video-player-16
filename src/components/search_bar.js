import React, { Component } from 'react';



class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	onInputChange(term) {
		this.setState({term: term});
		this.props.onSearchTermChange(term);
	}

	render() {
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={(event) => this.onInputChange(event.target.value)} />
				<button onClick={(e) => {this.setState({ term: '' }); document.querySelector('input').value = '';}}>Clear</button>
			</div>
		);
	}
}

export default SearchBar;

