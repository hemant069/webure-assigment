import React from 'react'

const Cards = () => {
  return (
    <div class="flex justify-between mt-20">
        <div class="w-52 h-48 bg-blue-600 rounded-lg text-white  flex flex-col space-y-3" style={{"alignItems":"center"}}>
            <p class="text-3xl font-bold mt-8">96%</p>
            <p class="text-xs font-bold">Client retetion</p>
            <p class="text-xs pl-4 pr-4" style={{"textAlign":"center"}}>Buy Delibaro and Marino in Hong Kong</p>
        </div>
        <div class="w-52 h-48 bg-red-500 rounded-lg text-white  flex flex-col space-y-3" style={{"alignItems":"center"}}>
            <p class="text-3xl mt-8 font-bold">10+</p>
            <p class="text-xs font-bold">Client retetion</p>
            <p class="text-xs pl-4 pr-4" style={{"textAlign":"center"}}>Buy Delibaro and Marino in Hong Kong</p>
        </div>
        <div class="w-52 h-48 bg-yellow-500 rounded-lg text-white  flex flex-col space-y-3" style={{"alignItems":"center"}}>
            <p class="text-3xl font-bold mt-8">70+</p>
            <p class="text-xs font-bold">Client retetion</p>
            <p class="text-xs pl-4 pr-4" style={{"textAlign":"center"}}>Buy Delibaro and Marino in Hong Kong</p>
        </div>
        <div class="w-52 h-48 bg-stone-500 rounded-lg text-white  flex flex-col space-y-3" style={{"alignItems":"center"}}>
            <p class="text-3xl  font-bold mt-8">$40M</p>
            <p class="text-xs font-bold">Client retetion</p>
            <p class="text-xs pl-4 pr-4" style={{"textAlign":"center"}}>Buy Delibaro and Marino in Hong Kong</p>
        </div>
    </div>
  )
}

export default Cards