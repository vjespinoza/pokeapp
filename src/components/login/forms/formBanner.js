import styled from "styled-components";

export const BannerContainer = styled.div`
	display: flex;
	align-content: center;
	padding: 2rem;
	width: 50%;
	height: 100%;
	background-color: ${(props) => (props.rigth ? props.theme.colors.primary : "#fff")};
	position: absolute;
	bottom: ${(props) => (props.isActive ? 0 : "100%")};
	left: ${(props) => (props.rigth ? "50%" : 0)};
	transition: bottom ease-in-out 200ms;
	z-index: 90;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const BannerImage = styled.img`
	width: 100%;
`;
