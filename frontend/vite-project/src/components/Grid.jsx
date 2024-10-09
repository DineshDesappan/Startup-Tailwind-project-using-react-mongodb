import React from "react";

export default function Section() {
  return (
      <div className="grid-cols-2">
        <div className="Container pt-5 mx-auto">
          <h1 className="text-3xl text-blue-600 pt-5">
            “We have set ourselves an ambitious target of becoming a $1 Trillion
            economy by 2030”
          </h1>
          <h3 className="text-md text-indigo-600">- Thiru. M.K. Stalin</h3>
          <h5>Hon'ble Chief Minister of Tamil Nadu</h5>
        </div>
        <div>
          <img
            src="https://startuptn.in/images/cmimage.png"
            width="300px"
            height="300px"
          />
        </div>
      </div>
  );
}
