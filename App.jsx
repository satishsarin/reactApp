import React from 'react';
import AddItem from './AddItem.jsx'
import ListItems from './ListItems.jsx'


class App extends React.Component {
	 	
	 	constructor(){
	 		super();
	 		this.state = {songLists: [] }
	 	}

	 	_addsong(name){
	 		this.state.songLists.push(name)
			this.setState({songLists: this.state.songLists})
		}

		_handleRemove(id){
			this.state.songLists.splice(id,1);
			this.setState({songLists: this.state.songLists})
		}

	 	render() {
	    return (
			       <div>
			          <AddItem add={this._addsong.bind(this)} />
			          <ListItems songs={this.state.songLists} remove={this._handleRemove.bind(this)} />
			       </div>
	    );
	 	}
}

export default App;

