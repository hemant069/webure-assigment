import React from "react";

const Why = () => {
  return (
    <div class="flex flex-row mt-20 justify-around bg-blue-900 p-10">
      <img
        class="w-60  rounded-t-full bg-blue-900 bg-inherit"
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRg8hqATfC08OPSAr2L6kxt8nVzs3sGxzZourB4zuHRko6hO2My"
      ></img>

      <div class="flex flex-col space-y-4 w-96 mt-8">
        <p class="text-orange-500  text-sm">WHY CHOOSE US</p>
        <p class="text-2xl font-bold text-white">
          Take on any Challenge of the Digital World
        </p>

        <div class=" flex  space-x-2 text-stone-300 text-xs">
          <i class="fa-solid fa-circle-check mt-1"></i>
          <p>Corporate Financial Advisory</p>
        </div>
        <div class=" flex  space-x-2 text-stone-300 text-xs">
          <i class="fa-solid fa-circle-check mt-1"></i>
          <p>Development of Financial Models</p>
        </div>
        <div class=" flex  space-x-2 text-stone-300 text-xs">
          <i class="fa-solid fa-circle-check mt-1"></i>
          <p>Deal Structuring</p>
        </div>
        <div class=" flex  space-x-2">
          <div class="border-b-2">
            <input
              class="bg-inherit text-md text-white mt-4 font-bold"
              placeholder="Enter your email id"
            ></input>
          </div>
          <button class="bg-red-500 rounded-2xl pl-2 mt-4 h-8  text-white w-32 text-xs ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Why;
