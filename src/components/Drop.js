import React, { useState } from 'react';
import './drop.css'
import { MdChevronRight , MdExpandMore} from "react-icons/md";

const CustomDropdown = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    onChange(option);
  };

  return (
    <div className="custom-dropdown">
      <div
        className="dropdown-header"
        onClick={() => setShowOptions(!showOptions)}
      >
        {selectedOption || <>
            Select
        {showOptions?<MdExpandMore style={{backgroundColor:"transparent",paddingTop:"8px",}}/>:<MdChevronRight style={{backgroundColor:"transparent",paddingTop:"8px",}}/>}
        </>   }
      </div>
      {showOptions && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <div className='suboptions' key={option} onClick={() => handleOptionSelect(option)}>
              {option}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
