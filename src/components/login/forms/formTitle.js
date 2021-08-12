import styled from "styled-components";

export const FormTitle = styled.h2`
	margin-bottom: 2rem;
	font-size: 2rem;
	color: ${(props) => (props.ligth ? "white" : props.theme.colors.font)};
`;
