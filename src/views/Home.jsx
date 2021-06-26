import { TextField } from '@material-ui/core';
import React from 'react'
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';

const Home = () => {
  return (
    <>
      
      <main className="z-0 flex flex-row">
        
      <Sidebar/>
        <div className="mx-auto py-6 sm:px-6 lg:px-8 px-5 flex flex-col w-full">
          <div className="items-start flex flex-col">
          
          <h2>User list</h2>
          <div class="relative text-gray-600 focus-within:text-gray-400 mt-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
            </span>
            <input type="search" name="q" className="py-2 h-8 text-sm text-black border-2 border-black-50 rounded-full outline-none pl-4" placeholder="Search..." autocomplete="off"/>
    </div>

    <Table/>
    
<div className="flex flex-row justify-between">
    <div className="flex flex-col gap-4 justify-between">
      <div className="flex flex-row gap-10 mt-10">
      <input type="search" name="q" className="py-2 h-8 text-sm text-black border border-black-80 outline-none pl-4" placeholder="Search..." autocomplete="off"/>
      <input type="search" name="q" className="py-2 h-8 text-sm text-black border border-black-80 outline-none pl-4" placeholder="Search..." autocomplete="off"/>
      </div>

      <div className="flex flex-row gap-10">
      <input type="search" name="q" className="py-2 h-8 text-sm text-black border border-black-80 outline-none pl-4" placeholder="Search..." autocomplete="off"/>
      <input type="search" name="q" className="py-2 h-8 text-sm text-black border border-black-80 outline-none pl-4" placeholder="Search..." autocomplete="off"/>
      </div>

      <div className="flex flex-row gap-10">
      <input type="search" name="q" className="py-2 h-8 text-sm text-black border border-black-80 outline-none pl-4" placeholder="Search..." autocomplete="off"/>
    
      </div>

      <div className="flex flex-row gap-10">
      <span className="text-sm">Send notifications</span>
    
      </div>


      {/* <div className="flex flex-row">
<input type="text" placeholder="name"/>
<input type="text" placeholder="name"/>
</div> */}
    </div>

<div className="w-32 h-12 bg-gray-900 mt-4"></div>
    </div>


        </div>
        </div>
      </main>
    </>
  );
};

export default Home;
