import styled from "styled-components";
import { FaSearch, FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";
import '../App.scss'

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff; // Change this color to match your desired header background
  color: white;
  //box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin-right: 10px;
  width: 80%;
`;

const Title = styled.h1`
  font-size: 22px;
  color: #000;
  font-family: "Montserrat", Arial, Tahoma;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: justify;
  margin: 0;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid #ca000a;
  color: #ca000a;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  text-transform: uppercase;

  &:hover {
    background-color: #ca000a;
    color: white;
  }
`;

const IconButton = styled.button`
  background-color: ${(props) => (props.black ? "black" : "#ca000a")};
  border: 1px solid ${(props) => (props.black ? "black" : "#ca000a")};
  color: white;;
  padding: 10px;
  font-size: 24px;
 
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-right: 0; // No margin between icon buttons

  &:hover {
    background-color: #ca000a;
    color: white;
  }

  &:not(:last-child) {
    // margin-right: 10px; // Add margin between button and first icon button
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />

        <Title>
          L'agence Digital
          <br />
          des acteurs publics africains
        </Title>
      </LogoContainer>
      <NavActions>
        <Button>Offres d'emplois</Button>
        <IconButton>
          <FaSearch />
        </IconButton>
        <IconButton black>
          <FaBars />
        </IconButton>
      </NavActions>
    </HeaderContainer>
  );
}

export default Header;
