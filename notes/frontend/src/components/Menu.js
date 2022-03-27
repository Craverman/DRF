import React from 'react';
import {

  FooterLink,

} from "./FooterStyles";


const Menu = () => {

return (
 <div style={{ backgroundColor: "#e35d68", minHeight: "20px"}}>
       <FooterLink href="#">Home </FooterLink>
       <FooterLink href="#">Notes </FooterLink>
       <FooterLink href="#">My Profile </FooterLink>
       <FooterLink href="#">Settings</FooterLink>
       </div>
        )

};

export default Menu;

