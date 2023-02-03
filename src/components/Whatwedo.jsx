import React from "react";

const Whatwedo = () => {
  return (
    <div class="mt-10">
      <p class="text-5xl text-center font-bold">What We Do</p>
      <div class="flex mt-10 space-x-4">
        <p class="text-2xl  font-bold mt-8">Our Services</p>
        <p class="text-s text-stone-400">
          It has elements must have an alt prop, either with meaningful text, or
          an empty string for decorative images img elements must have an alt
          prop, either with meaningful text, or an empty string for decorative
          images img elements must have an alt prop, either with meaningful
          text, or an empty string for decorative images img elements must have
          an alt prop, either with meaningful text, or an empty string for
          decorative images{" "}
        </p>
      </div>
      <div class="grid grid-cols-4 gap-6 mt-10">
        <div
          class="w-52 h-52 bg-blue-900 rounded-lg  text-white  flex flex-col space-y-2"
          style={{ alignItems: "center" }}
        >
          <i class="fa-solid fa-rocket text-6xl mt-3"></i>
          <p class="text-xl font-bold mt-8">Design</p>
          <p class="text-xs p-3" style={{ textAlign: "center" }}>
            Buy Delibaro and Marino in Hong Kong
          </p>
        </div>
        <div
          class="w-52 h-52 shadow-xl rounded-lg  flex flex-col space-y-3"
          style={{ alignItems: "center" }}
        >
          <i class="fa-solid fa-gear text-6xl mt-8"></i>
          <p class="text-xl mt-4 font-bold text-center p-5">
            Front End Development
          </p>
        </div>
        <div
          class="w-52 h-52 shadow-xl rounded-lg  flex flex-col space-y-3"
          style={{ alignItems: "center" }}
        >
          <i class="fa-solid fa-gear text-6xl mt-8"></i>
          <p class="text-xl mt-4 font-bold text-center p-5">
            Back End Development
          </p>
        </div>
        <div
          class="w-52 h-52 shadow-xl rounded-lg  flex flex-col space-y-3"
          style={{ alignItems: "center" }}
        >
          <i class="fa-brands fa-app-store-ios text-6xl mt-8"></i>
          <p class="text-xl mt-4 font-bold text-center p-5">
            Application Development
          </p>
        </div>
        <div
          class="w-52 h-52 shadow-xl rounded-lg  flex flex-col space-y-3"
          style={{ alignItems: "center" }}
        >
          <i class="fa-solid fa-cloud-arrow-up text-6xl mt-8"></i>
          <p class="text-xl mt-4 font-bold text-center p-5">Cloud Services</p>
        </div>
        <div
          class="w-52 h-52 shadow-xl rounded-lg  flex flex-col space-y-3"
          style={{ alignItems: "center" }}
        >
          <i class="fa-solid fa-chart-simple text-6xl mt-8"></i>
          <p class="text-xl mt-4 font-bold text-center p-5">Analytics</p>
        </div>
        <div
          class="w-52 h-52 shadow-xl rounded-lg  flex flex-col space-y-3"
          style={{ alignItems: "center" }}
        >
          <i class="fa-solid fa-gear text-6xl mt-8"></i>
          <p class="text-xl  font-bold text-center p-5">Q-A And Testing</p>
        </div>
        <div
          class="w-52 h-52 shadow-xl rounded-lg  flex flex-col space-y-3"
          style={{ alignItems: "center" }}
        >
          <i class="fa-solid fa-ticket text-6xl mt-8"></i>
          <p class="text-xl mt-4 font-bold text-center p-5">
            Back Office Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
