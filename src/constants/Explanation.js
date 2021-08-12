import React from 'react';
import styled from 'styled-components';

const StyledExplanation = styled.div`
background-color: ${pr => pr.theme.secondaryColor};
color: white;
`





export default function Explanation(props) {
	const { explanation } = props;
	return (
		<StyledExplanation>
			<p>{explanation}</p>
		</StyledExplanation>
	)
}