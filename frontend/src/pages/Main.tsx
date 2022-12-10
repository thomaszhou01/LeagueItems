import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import Calculator from '../components/Calculator';

function Main() {
	return (
		<div>
			<h1>League Item Calculator</h1>
			<Calculator />
		</div>
	);
}

export default Main;
