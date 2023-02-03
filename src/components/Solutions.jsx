import React from "react";

const Solutions = () => {
  return (
    <div class="flex flex-row mt-20 space-x-36">
      <div class="flex flex-col space-y-4 w-96 ">
        <div class="flex space-x-3 text-blue-600 font-bold text-sm">
          <p>OUR SOLUTIONS</p>
        </div>
        <p class="text-4xl font-bold">
          Launch and Scale your marketing compaigns
        </p>
        <p class="text-xs text-stone-400">
          Support small business and join the nationwide movement to encourage
          commercial support for the millions of minority owned businesses
          helping world economy.
        </p>
        <button class="bg-blue-600 rounded-md pl-2 mt-4 h-8  text-white w-32 text-xs ">
          Learn More
        </button>
      </div>
      <div class="bg-blue-600 w-96 h-70 ">
        <img
          class="w-60 bg-inherit ml-20 "
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRg8hqATfC08OPSAr2L6kxt8nVzs3sGxzZourB4zuHRko6hO2My"
        ></img>
      </div>
    </div>
  );
};

export default Solutions;
