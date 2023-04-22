import styled from "styled-components";

export const ContainerCSS = styled.div`
	text-align: center;

	h1 {
		font-size: 300px;
		cursor: default;
		user-select: none;
		color: #000000ab;
	}
	p {
		margin-top: -10vw;
		font-size: 20px;
	}
`;
export const ButtonCSS = styled.button`
	background-color: #85a1daca;
	border: none;
	border-radius: 5px;
	padding: 10px 40px 10px 40px;
	cursor: pointer;
	color: #ffffff;
	font-size: 18px;
	font-weight: 600;
	:hover {
		background-color: #283757c9;
	}
`;
