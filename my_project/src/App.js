import React, {useState} from 'react';
import style, {css} from "style component";
import {rgba} from "polished"
import logo from './logo.svg';
// import ModernNav from'./App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

    const ModernNav = () => {
      const[open , setopen] = useState(false);
      return(
        <phone>
          <nav>
            <Navbutton>
              <NacIcon
                className="uil uil-home"
                />
                <navText>Home</navText>
               </Navbutton>
          </nav>
               <Content open={open}>
               <Burger onClick ={() => setopen(!open)}
               className="uil uil-bars"/>
               </Content>
        </phone>
      )
    }
     

  
  export default ModerNav;

