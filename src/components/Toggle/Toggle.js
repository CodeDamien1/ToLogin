import { useState } from 'react';
import './Toggle.css';

const Toggle = ({ onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle && onToggle(!isChecked);
  };

  return (
    <div>
      <input type="checkbox" id="toggle" checked={isChecked} onChange={handleToggle} />
      <label htmlFor="toggle"></label>
    </div>
  );
};

export default Toggle;