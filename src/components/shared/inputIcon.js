import styled from "styled-components";

export const InputIcon = styled.div`
	color: ${(props) => (props.ligth ? "white" : props.theme.colors.font)};
	position: absolute;
	top: 12px;
	right: 5px;
	cursor: pointer;
`;
