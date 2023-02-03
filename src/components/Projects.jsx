import React from "react";

const Projects = () => {
  return (
    <div class="grid grid-cols-3 gap-6  p-10">
      <div class="space-y-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-VXlmFJTWyxc3cQdeSPuWyhO6_Nv-4shEg&usqp=CAU"></img>
        <p class="text-sm text-center">Cosmetic Forcast Marketing</p>
      </div>
      <div class="space-y-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHJLKZq4PW_8b880HreklRZ9WxgbqK_pa-g&usqp=CAU"></img>
        <p class="text-sm text-center">Sales Analytics</p>
      </div>
      <div class="space-y-2">
        <img
          class="h-18"
          src="https://idapgroup.com/blog/blog/wp-content/uploads/2021/10/image6.png"
        ></img>
        <p class="text-sm text-center">Fashion Store Mobile Apps</p>
      </div>
      <div class="space-y-2">
        <img src="https://www.shutterstock.com/image-photo/long-dropper-lowered-into-clear-260nw-2137763649.jpg"></img>
        <p class="text-sm text-center">Laura's Branding Ability</p>
      </div>
      <div class="space-y-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4HpyAcIVBflaALkqczWHHHKndY007R2H_wT4AvvWe3n_PsnV3yTMNxYYG2WiZC-WG2vo&usqp=CAU"></img>
        <p class="text-sm text-center">SEO Marketing 4.0</p>
      </div>
      <div>
        <p class="text-orange-400 font-bold text-sm">PROJECTS</p>
        <p class="text-2xl font-bold">Selected Works from Us</p>
        <button class="border-red-300 border-2 rounded-3xl pl-2  h-10 mt-4 w-32 text-xs hover:bg-red-600">
          See More
        </button>
      </div>
    </div>
  );
};

export default Projects;
