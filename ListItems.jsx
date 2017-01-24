import React from 'react'

class ListItems extends React.Component {

	
	render() {
			const listItems = this.props.songs.map((song, i) =>
							<li key={i}>{song}</li>
			)

			return(
					<ul>
						{listItems}
					</ul>
			)
	}

}

export default ListItems;