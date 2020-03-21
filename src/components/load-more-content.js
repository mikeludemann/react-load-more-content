import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

export default class LoadMoreContent extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount(){
		let cln = "." + this.props.classname;
		const idn = "#" + this.props.id;
		$(document).ready(function() {
			$(cln).slice(0, 4).show();
			$(cln).slice(4, $(cln).length).hide();
			if ($(cln + ":hidden").length !== 0) {
				$(idn).show();
			}
			$(idn).on('click', function(e) {
				e.preventDefault();
				$(cln + ":hidden").slice(0, 4).slideDown();
				if ($(cln + ":hidden").length === 0) {
					$(idn).fadeOut('slow');
				}
			});
		});
	}

	render() {
		return (
			<div>
				{this.props.data.map(elem => 
					<div className={this.props.classname}>{elem.content}</div>
				)}
				<div id={this.props.id}>Load More</div>
			</div>
		);
	}
}

LoadMoreContent.propTypes = {
	data: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired,
	classname: PropTypes.string.isRequired
}
