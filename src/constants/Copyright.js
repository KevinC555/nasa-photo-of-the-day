import React from 'react';
import styled from 'styled-components';



const StyledCopyright = styled.div`
background-color: ${pr => pr.theme.primaryColor};
color: ${pr => pr.theme.secondaryColor};
`

export default function Copyright(props) {
	const { copyright } = props;
	return (
		<StyledCopyright>
			<p>{copyright}</p>
		</StyledCopyright>
	)
}