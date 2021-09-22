import React , {useState} from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {DropdownContainer , DropdownItem} from '../styles/dropdown';

function Dropdown() {
    const [show, setshow] = useState(false);
  return (
    <DropdownContainer show={show}>
      <span>Sort by</span>{" "}
      <button onClick={() => (setshow(!show))}>
        Name{" "}
        <span className="icon">
           <IoIosArrowDown className="arrow-down"/> 
           <IoIosArrowUp className="arrow-up"/>
        </span>
      </button>
      <DropdownItem show={show}>
         <ul>
           <li>Name</li>
           <li>Last invoiced</li>
           <li>Most income generated</li>
           <li>Last income generated</li>
         </ul>
      </DropdownItem>
    </DropdownContainer>
  );
}

export default Dropdown;
