import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	increment,
	incrementByValue,
	decrement,
	decrementByValue,
} from './valueSlice.js';

const Home = () => {
	const count = useSelector((state) => state.value);
	const dispatch = useDispatch();
	const [customValue, setCustomValue] = useState(0);

	return (
		<div>
			<div className="home">
				<h1>Counter Value: {count}</h1>
				<div className="custom-group">
					<label className="custom-label" htmlFor="custom">
						Enter custom value
					</label>
					<input
						className="custom_input"
						type="text"
						value={customValue}
						placeholder="0"
						onChange={(e) => setCustomValue(e.target.value)}
						name="custom"
					/>
				</div>
				<div className="btn-group">
					<button onClick={() => dispatch(increment())}>Increment</button>
					<button
						onClick={() => dispatch(incrementByValue(Number(customValue) || 0))}
					>
						Increment By Value
					</button>
					<button onClick={() => dispatch(decrement())}>Decrement</button>
					<button
						onClick={() => dispatch(decrementByValue(Number(customValue) || 0))}
					>
						Decrement By Value
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
