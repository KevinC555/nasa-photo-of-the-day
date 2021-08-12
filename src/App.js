import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants/index';
import Title from './constants/Title';
import Explanation from './constants/Explanation';
import Copyright from './constants/Copyright';
import Date from './constants/Date';
import styled from 'styled-components';
import {
	Card, CardImg, CardBody,
	CardTitle, Row, Col
} from 'reactstrap';

const StyledApp = styled.div`
display: flex;
justify-content: center;
text-align: center;
width: 100vw;
`





export default function App() {
	const [title, setTitle] = useState(null);
	const [url, setImage] = useState(null);
	const [explanation, setExplanation] = useState(null);
	const [copyright, setCopyright] = useState(null);
	const [date, setDate] = useState(null);

	useEffect(() => {
		axios.get(`${BASE_URL}?api_key=${API_KEY}`)
			.then(res => {
				console.log(res.data);
				setTitle(res.data.title);
				setExplanation(res.data.explanation);
				setImage(res.data.url);
				setCopyright(res.data.copyright);
				setDate(res.data.date);
			})
	}, [])

	return (
		<StyledApp>
			<Row>
				<Col sm="6">
					<Card>
						<CardImg className="card-img" top width="100%" src={url} alt="Card image cap" />
						<CardBody>
							<CardTitle tag="h5"><Title title={title} /></CardTitle>
							<Explanation explanation={explanation} />
							<Copyright copyright={copyright} />
							<Date date={date} />
						</CardBody>
					</Card>
				</Col>
			</Row>
		</StyledApp>
	);
}


