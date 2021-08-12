import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
font-size: 10px;
background-color: ${pr => pr.theme.primaryColor};

`

export default function Title(props) {
	const { title } = props;
	return (
		<StyledTitle>
			<h1>{title}</h1>
		</StyledTitle>
	)
}