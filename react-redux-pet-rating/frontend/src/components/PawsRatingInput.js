import {useState} from 'react';

const PawsRatingInput = ({ rating, disabled, onChange }) => { 
  
  const [activeRating, setActiveRating] = useState(rating);

  const handleMouseEnter = (value) => {
    setActiveRating(value);
  }

  const handleMouseLeave = (rating) => {
    setActiveRating(rating);
  }
  
  return (
    <>
    <input
      type="number"
      disabled={disabled}
      value={rating}
      onChange={onChange}
    />
    
    <div className="rating-input">
      <div className={activeRating >= 1 ? "filled" : "empty"} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(rating)}>
        <i className="fa fa-paw"></i>
      </div>
      <div className={activeRating >= 2 ? "filled" : "empty"} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(rating)}>
        <i className="fa fa-paw"></i>
      </div>
      <div className={activeRating >= 3 ? "filled" : "empty"} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(rating)}>
        <i className="fa fa-paw"></i>
      </div>
      <div className={activeRating >= 4 ? "filled" : "empty"} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={() => handleMouseLeave(rating)}>
        <i className="fa fa-paw"></i>
      </div>
      <div className={activeRating === 5 ? "filled" : "empty"} onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={() => handleMouseLeave(rating)}>
        <i className="fa fa-paw"></i>
      </div>
    </div>
</>
  );
};

export default PawsRatingInput;