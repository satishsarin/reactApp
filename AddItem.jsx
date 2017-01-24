import React from 'react'

class AddItem extends React.Component {
	
	constructor(){
		super();
	}

	addItem(){
		this.props.add(this.refs.songName.value)
	}

	render(){
		return(
						<div>
							Song Name: <input type="text" ref="songName" />
							<button onClick= {this.addItem.bind(this)}> Add </button> 
						</div>				
		);
	}
}

export default AddItem;