import React from "react";

const Checkmark = ({ modifiers }) => {
  return (
    <svg
      className={`icon icon-checkmark ${modifiers}`}
      width="14px"
      height="11px"
      viewBox="0 0 14 11"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1-Copy"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      >
        <g
          id="Browser"
          transform="translate(-980.000000, -185.000000)"
          stroke="#13A2E8"
          strokeWidth="2"
        >
          <g id="Design" transform="translate(352.000000, 32.000000)">
            <g id="Table-Header" transform="translate(65.000000, 110.000000)">
              <g
                id="Filter-Checkboxes"
                transform="translate(558.000000, 38.000000)"
              >
                <path
                  d="M10.6866697,14.2274966 L6.24673949,10.4139696 L10.6866697,14.2274966 L10,15 L10.6866697,14.2274966 Z M10.6866697,14.2274966 L11.1040956,14.5860304 L10.6866697,14.2274966 L18,6 L10.6866697,14.2274966 Z"
                  id="Line"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

Checkmark.defaultProps = {
  modifiers: ""
};

export default Checkmark;
