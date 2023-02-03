import React from "react";

const Services = () => {
  return (
    <div class="mt-16">
      <p class="text-orange-400 font-bold text-sm">SERVICES</p>
      <div class="flex justify-between space-x-14 ">
        <div class="w-18 mt-3">
          <p class="text-2xl font-bold">Our Capabilities</p>
          <p class="text-xs mt-3 text-stone-400">
            We will bring the breathe of our experience and industry knowledge
            to help you succeed
          </p>
        </div>
        <div class="w-18 mt-3 ml-4">
          <i class="fa-solid fa-calendar-check text-blue-500 text-3xl"></i>
          <p class="text-sm font-bold mt-1">Consult</p>
          <p class="text-xs mt-3 text-stone-400">
            Leverage agile framework to provide a robust high level synopsys
            overviews
          </p>
        </div>
        <div class="w-18 mt-3">
          <i class="fa-solid fa-plus text-green-400 text-3xl"></i>
          <p class="text-sm font-bold mt-1">Create</p>
          <p class="text-xs mt-3 text-stone-400">
            We will bring the breathe of our experience and industry knowledge
            to help you succeed
          </p>
        </div>
        <div class="w-18 h-44 shadow-2xl  pl-6 p-3">
          <i class="fa-solid fa-pager text-3xl text-red-400"></i>
          <p class="text-sm font-bold mt-1">Collaborate</p>
          <p class="text-xs mt-3  text-stone-400">
            We will bring the breathe of our experience and industry knowledge
            to help you succeed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
