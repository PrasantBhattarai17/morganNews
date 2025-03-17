import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[5rem]  flex justify-between">
      <div className="text-center text-3xl font-bold font-mono py-3 px-5 text-[#18062a]">
        MorganNews
      </div>
      <div className="text-center w-[50%] py-3 flex justify-around ">
        <input
          className="bg-[#f3f3f6] hover:bg-white focus:bg-white font-mono w-[60%] h-[80%] border-2 text-xl px-3 rounded-3xl border-[#faebf9] outline-0"
          placeholder="What are you looking for?"
          type="text"
        ></input>
        <div className="w-[40%] flex h-[80%] justify-around px-5 gap-0 ">
        <button className="w-26 h-full text-black text-2xl font-mono font-semibold ">Sign Up</button>
        <button className="cursor-pointer    w-26 h-full bg-black text-white rounded-3xl text-xl font-semibold font-mono hover:bg-[#212020]">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
