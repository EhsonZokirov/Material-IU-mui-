import React from "react";

function Section4() {
  return (
    <div>
      <div className="text-center grid md:grid-cols-3 gap-5 bg-[#AA9E54] my-10 text-white w-[100%] p-[100px]">
        <div>
          <p>Location</p>
          <h1>101 Cuba St,</h1>
          <h1>Te Aro, Wellington</h1>
        </div>
        <div>
          <p>Hours</p>
          <h1>Tuesday to Friday</h1>
          <h1>7AM - 3PM</h1>
        </div>
        <div>
          <p>Mondays?</p>
          <h1>
            We are closed on Mondays <br /> to reflect and refuel
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Section4;
