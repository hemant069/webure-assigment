import React from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    
<nav class="flex items-center justify-between flex-wrap  space-x-20">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl text-red-300 tracking-tight italic ">Webure Technologies</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-stone-400 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
    <div class="text-sm lg:flex-grow space-x-10">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-stone-400 hover:text-red-300 ">
        About Us
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-stone-400 hover:text-red-300 ">
        Services
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-stone-400 hover:text-red-300 ">
        Careers
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-stone-400 hover:text-red-300 ">
        ROI Stories
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-stone-400 hover:text-red-300 ">
        Blog
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-stone-400 hover:text-red-300 ">
        Contact Us
      </a>
      
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded-3xl text-stone-700 border-stone-300 hover:border-transparent hover:text-white hover:bg-red-300 mt-4 lg:mt-0">Let's talk</a>
    </div>
  </div>
</nav>
  );
}