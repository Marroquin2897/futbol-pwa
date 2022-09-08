import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { MdAccountCircle, MdOutlineControlPoint, MdOutlineLocalPostOffice, MdVisibility,MdOutlineBrightness7,MdOutlineCancel } from "react-icons/md";

const fontStyles = {color: '#560000', fontSize: '80px'};
class MenuVert extends React.Component  {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
         <NavbarToggler onClick={this.toggleNavbar} className="mr-2" style={{fontSize: "40px"}}/> 
         <NavbarBrand href="/" className="mr-2">Menu</NavbarBrand>         
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/"><MdAccountCircle style={fontStyles} />Mi Perfil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/registrar-escuela"><MdOutlineControlPoint style={fontStyles}/>Registrar Escuela</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href=""><MdVisibility style={fontStyles} />Ver Posiciones</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href=""><MdOutlineLocalPostOffice style={fontStyles}/>Notificaciones</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href=""><MdOutlineBrightness7 style={fontStyles}/>Configuracion</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href=""><MdOutlineCancel style={fontStyles}/>Cerrar Sesion</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
       
      </div>
    );
  }
}
export default MenuVert