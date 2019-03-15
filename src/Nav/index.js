import React, { Component } from 'react';

class Nav extends Component {
	render(){
		const style = this.props.style;

		return(
			<div className='nav' style={style} >
				<a className='nav-copy' id='top' href='#photos'>top</a>
				<a className='nav-copy' id='sort'>sort</a>
			</div>
		)
	}
}
export default Nav;
