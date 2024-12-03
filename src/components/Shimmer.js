import React from "react";

const containerStyle = {
  display: "flex",
  flexWrap: "wrap", // Ensures wrapping when space runs out
  gap: "10px", // Adds spacing between shimmers
  margin:'12px 12px', 
  alignItems:'center',
  justifyContent:'center',
};

const shimmerStyle = {
  width: "22vw", // Adjust as needed
  height: "30vh", // Adjust as needed
  backgroundColor: "#ccc", // Mock shimmer effect
  borderRadius: "8px", // Optional: rounded corners
};

const Shimmer = () => {
  return (
    <div style={containerStyle}>
      {Array.from({ length: 14 }).map((_, index) => (
        <div key={index} style={shimmerStyle}></div>
      ))}
    </div>
  );
};
export default Shimmer;
