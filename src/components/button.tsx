import styled from "styled-components";

type buttonType = {
  caption?: string
  color?: string
  icon: any
  url: string
}

const navigate = (e: any, url: string, middle = false) => {
  if (!middle) return window.location.href = `https://${url}`
  return window.open(`https://${url}`)
}


function CustomButton(props: buttonType) {
  return (
    <Container color={props.color} onClick={(e) => navigate(e, props.url)} onAuxClick={(e) => navigate(e, props.url, true)}>
      {props.icon}
      <Caption>{props.caption || "BUTTON"}</Caption>
    </Container>
  );
}

const Container = styled.button(props => ({
  display: 'flex',
  backgroundColor: props.color ?? "#F44336",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  borderRadius: "2px",
  height: "60px",
  width: '280px',
  border: 'none',
  paddingLeft: "16px",
  fontSize: "22px",
  opacity: "75%",
  paddingRight: "16px",
  transform: '.05s',
  WebkitBackfaceVisibility: 'hidden',
  boxShadow: "0px 1px 5px  0.35px #000",
  ":hover": {
    opacity: "100%",
    cursor: "pointer"
  },
  ":active": {
    opacity: "100%",
    transform: "translateY(4px)"
  }
}))


const Caption = styled.span`
  font-family: Roboto, sans-serif;
  font-weight: 900;
  color: #fff;
  margin-left: 7px;
`;

export default CustomButton;
