import React from "react";
import Sidebar from "./Sidebar";
import Table from "./Table";
import Input from "./Input";
import Button from "./Buttton";
import SearchIcon from "@material-ui/icons/Search";

const Embold = () => {
  return (
    <>
      <main className="z-0 flex flex-row">
        <Sidebar />
        <div className="mx-auto py-6 sm:px-6 lg:px-8 px-5 flex flex-col w-full">
          <div className="items-start flex flex-col">
            <h2>User list</h2>
            <div class="relative text-gray-600 focus-within:text-gray-400 mt-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  class="p-1 focus:outline-none focus:shadow-outline"
                >
                  <SearchIcon />
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="py-2 h-8 text-sm text-black border-2 border-black-50 rounded-full outline-none pl-10"
                placeholder="Search..."
                autocomplete="off"
              />
            </div>

            <Table />

            <form>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-4 justify-between">
                  <div className="flex flex-row gap-10 mt-10">
                    <Input title="Username" patterns="[a-zA-Z0-9]+" />
                    <Input title="Email" type="email" pattern="[a-zA-Z0-9]+" />
                  </div>

                  <div className="flex flex-row gap-10">
                    <Input title="First Name" patterns="[a-zA-Z0-9]+" />
                    <Input title="Last Name" patterns="[a-zA-Z0-9]+" />
                  </div>

                  <div className="flex flex-row gap-10">
                    <Input title="Role" />
                  </div>

                  <div className="flex flex-row gap-10">
                    <label class="inline-flex items-center mt-3">
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-gray-600"
                        checked
                      />
                      <span class="ml-2 text-gray-700">Send Notifications</span>
                    </label>
                  </div>
                </div>

                <div className="w-32 h-12 mt-10 ml-28">
                  <label class="w-64 flex flex-col h-32 justify-center items-center px-4 py-6 bg-white text-blue rounded-lg tracking-wide uppercase border border-blue cursor-pointer">
                    <svg
                      class="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <input
                      type="file"
                      class="hidden"
                      accept="image/jpg, image/png"
                    />
                  </label>
                  <Button
                    title="select image"
                    bgColor="bg-gray-100"
                    color="white"
                  />
                </div>
              </div>
            </form>

            <hr className="bg-gray-100 w-full mt-10" />
          </div>
          <div className="flex flex-row gap-4">
            <Button
              title="add user"
              bgColor="bg-green-300"
              color="text-white"
            />
            <Button title="cancel" bgColor="bg-gray-100" />
            {/* <button className="text-center bg-gray-100 w-64 p-2 mt-4 outline-none">Select Image</button> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Embold;
