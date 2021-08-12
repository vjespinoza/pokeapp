import styled from "styled-components";

export const FormFooter = styled.footer`
	margin-top: 1.5rem;
	color: ${(props) => (props.ligth ? "white" : props.theme.colors.font)};
	font-size: 0.8rem;
	font-weight: 500;

	& span {
		cursor: pointer;
		color: ${(props) =>
			props.ligth ? props.theme.colors.secondary : props.theme.colors.primary};
	}
`;
