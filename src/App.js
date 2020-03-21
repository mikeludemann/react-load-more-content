import React from 'react';
import logo from './logo.svg';
import './App.css';

import LoadMoreContent from './components/load-more-content';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
      <LoadMoreContent id="loadingMore" classname="list" count={4} data={[{id: 1, content: "1"}, {id: 2, content: "2"}, {id: 3, content: "3"}, {id: 4, content: "4"}, {id: 5, content: "5"}]}></LoadMoreContent>
		</div>
	);
}

export default App;
