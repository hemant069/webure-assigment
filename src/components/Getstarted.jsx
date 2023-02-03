import React from "react";

const Getstarted = () => {
  return (
    <div class="flex flex-row mt-20 justify-between ">
      <div class="flex flex-col space-y-4 w-96 ">
        <div class="flex space-x-3 text-orange-400 text-xs">
          <i class="fa-solid fa-circle-check mt-1"></i>
          <p>Best Business Platform - World Record 2021</p>
        </div>
        <p class="text-4xl font-bold">
          Reach Your Business Goals in Record Time
        </p>
        <p class="text-sm text-stone-400">
          Support small business and join the nationwide movement to encourage
          commercial support for the millions of minority owned businesses
          helping world economy.
        </p>
        <div class="flex mt-4 space-x-4">
          <button class="bg-red-400 rounded-3xl pl-2  h-10  text-white w-32 text-xs hover:bg-red-600">
            Get Started
          </button>
          <i class="fa-sharp fa-solid fa-circle-play mt-4 ml-3"></i>
          <p class="text-xs font-bold mt-4">Book a 30 Min Quick Meeting</p>
        </div>
      </div>
      <img
        class="w-60"
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRg8hqATfC08OPSAr2L6kxt8nVzs3sGxzZourB4zuHRko6hO2My"
      ></img>
    </div>
  );
};

export default Getstarted;
