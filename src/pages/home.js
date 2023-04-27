import CustomDropdown from "../components/Drop";
import { useState } from "react";
import '../globalstyle.css'
import './home.css'
// import Country from "./country";
import { useNavigate } from "react-router-dom";


const countryStateMap = {
  India: ['Gujrat', 'Maharastra', 'Delhi'],
  Canada: ['Ontario', 'Quebec'],
  Mexico: ['Jalisco', 'NuevoLeón', 'Sonora'],
};

const countryOptions = Object.keys(countryStateMap);

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedState(null);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
  };
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedCountry) {
      alert('Please select a country');
    } else if (!selectedState) {
      alert('Please select a state');
    } else {
      console.log(selectedState);
      navigate("/country",{
        state:{
          country:selectedCountry,
          State1:selectedState
        },
      });
    }
  };

  const stateOptions = selectedCountry
    ? countryStateMap[selectedCountry]
    : [];

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="dropdown__container">
          <CustomDropdown
            options={countryOptions}
            onChange={handleCountrySelect}
          />
          {selectedCountry && (
            <CustomDropdown
              options={stateOptions}
              onChange={handleStateSelect}
            />
          )}
        </div>
        <button type="submit" style={{ cursor: "pointer", margin:"80px",padding:"8px 12px",textDecoration:"none",borderRadius:"10px",boxShadow:"none",fontFamily:"Montserrat",fontWeight:"bold",letterSpacing:"2px",fontSize:"20px"}}>Submit</button>
      </form>
    </div>
  );
};

export default Home;
