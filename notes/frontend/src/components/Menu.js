import React from 'react';
import {

  FooterLink,

} from "./FooterStyles";



const Menu = () => {

return (
 <div style={{ backgroundColor: "#e35d68", minHeight: "20px"}}>
       <FooterLink href="#">Home </FooterLink>
       <FooterLink href="http://localhost:3000/#/todo">Notes</FooterLink>
       <FooterLink href="http://localhost:3000/#/projects">Projects</FooterLink>
       <FooterLink href="#">Settings</FooterLink>
       </div>
        )

};

export default Menu;

