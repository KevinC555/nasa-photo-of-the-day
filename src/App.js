import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants/index';
import Title from './constants/Title';
import Explanation from './constants/Explanation';
import Image from './constants/Image';
import Copyright from './constants/Copyright';
import Date from './constants/Date';
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
		<div className="App">
			<Title title={title} />
			<div className="image">
				<Image url={url} />
			</div>
			<div className="explanation">
				<Explanation explanation={explanation} />
			</div>
			<div className="copyright date">
				<Copyright copyright={copyright} />
				<Date date={date} />
			</div>
		</div>
	);
}


