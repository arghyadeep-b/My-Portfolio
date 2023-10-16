import React from "react";

// eslint-disable-next-line react/prop-types
function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "stats", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
}

export default NavigationDots;
