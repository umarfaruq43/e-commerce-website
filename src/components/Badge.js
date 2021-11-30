import React from "react";

const Badge = ({ badgeNo }) => {
  return (
    <>
      <div>
        <span className="text-Orange  text-xs font-semibold bg-Pale-orange p-1 ml-4 rounded-md">
          {`${badgeNo}%`}
        </span>
      </div>
    </>
  );
};

export default Badge;
