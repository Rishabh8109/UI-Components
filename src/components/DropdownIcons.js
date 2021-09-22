import React , {useState} from 'react';
import {DropdownContainer , DropdownItem} from '../styles/dropdown';
import {BsThreeDots , BsFileEarmarkPlus , BsArchive} from 'react-icons/bs';
import {FiEdit2} from 'react-icons/fi';
import {AiOutlineDelete} from 'react-icons/ai';


function DropdownIcons() {
    const [show, setshow] = useState(false);
    return (
        <DropdownContainer show={show}>
        <button onClick={() => (setshow(!show))}>
          <BsThreeDots />
        </button>
        <DropdownItem show={show}>
           <ul>
             <li><FiEdit2 />Edit</li>
             <li><BsFileEarmarkPlus /> Export</li>
             <li><BsArchive /> Archive</li>
             <li><AiOutlineDelete /> Delete</li>
           </ul>
        </DropdownItem>
      </DropdownContainer>
    )
}

export default DropdownIcons
