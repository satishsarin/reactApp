import React from 'react'

class ListItems extends React.Component {

	_removeItem(i){
		this.props.remove(i);
	}


	render() {
			let listItems = this.props.songs.map((song, i) =>
							<li key={i} onClick= {this._removeItem.bind(this, i)} > {song} </li>

			)

			return(
					<ul>
						{listItems}
					</ul>
			)
	}

}

export default ListItems;

