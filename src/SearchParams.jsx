import react from "react";
import { useState } from "react";
let counter = 0;
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  counter++;
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          {counter}
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
