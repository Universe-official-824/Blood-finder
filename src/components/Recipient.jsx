import React from "react";
import { FaStarOfLife } from "react-icons/fa";

const Recipient = () => {
  return (
    <div className="flex justify-center items-center min-w-screen min-h-screen">
      <div className="p-4 border rounded-md shadow-md">
        <div className="flex items-center mb-3">
          <label htmlFor="name" className="flex items-center min-w-[150px]">
            Name <FaStarOfLife className="w-1 h-1 text-red-500 ml-1" />
          </label>
          <input
            type="text"
            placeholder="enter name"
            required
            className="flex-1 border-2 border-slate-300 rounded-md p-1 ml-2"
          />
        </div>

        <div className="flex items-center mb-3">
          <label htmlFor="contact" className="flex items-center min-w-[150px]">
            Contact No <FaStarOfLife className="w-1 h-1 text-red-500 ml-1" />
          </label>
          <input
            type="text"
            placeholder="enter contact number"
            required
            className="flex-1 border-2 border-slate-300 rounded-md p-1 ml-2"
          />
        </div>

        <div className="flex items-center mb-3">
          <label htmlFor="location" className="flex items-center min-w-[150px]">
            Location <FaStarOfLife className="w-1 h-1 text-red-500 ml-1" />
          </label>
          <input
            type="text"
            placeholder="enter location"
            required
            className="flex-1 border-2 border-slate-300 rounded-md p-1 ml-2"
          />
        </div>

        <div className="flex items-center mb-3">
          <label htmlFor="blood_group" className="flex items-center min-w-[150px]">
            Blood Group <FaStarOfLife className="w-1 h-1 text-red-500 ml-1" />
          </label>
          <select
            name="blood_group"
            className="flex-1 border-2 border-slate-300 rounded-md p-1 ml-2"
          >
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Recipient;
