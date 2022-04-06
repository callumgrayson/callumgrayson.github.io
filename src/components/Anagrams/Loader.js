import React from 'react';

const Loader = (props) => {
	return (
		<div className="loaderBox">
			{props.loading && `...${props.text}...`}
		</div>
	);
};

export default Loader;
