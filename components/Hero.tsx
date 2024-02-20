import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <main className="lg:w-2/3 w-full mx-auto relative shadow-md px-5 py-7 bg-white">
      <div className="relative pb-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:text-center lg:text-left">
            <h1
              className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight 
            md:text-3xl md:tracking-tight"
            >
              <span className="block xl:inline text-[#010125]">
                Brings Events to the
              </span>
              <br />
              <span className="block text-orange-500 xl:inline">
                Web3 Marketplace
              </span>
            </h1>

            <p
              className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto 
            md:mt-5 md:text-base lg:mx-0 "
            >
              Welcome to Web3 event market place.<br/> create vibrant expositions
              conneting enthusiasts with <br/>experts,  products and services in a
              decentralized <br/>anonymous enviroment.

            </p>
            <div className="mt-5 sm:mt-8 sm:justify-center lg:justify-start  ">
              <Link
                href={"/events/create"}
                className="bg-[#010125] p-2 sm:p-3 rounded-full py-3 px-4  
              text-white border hover:bg-transparent hover:text-[#010125] hover:border-[010125]
              duration-300 transition-all text-[14px]"
              >
                Add Events
              </Link>
              <button
                className="bg-orange-500 p-2 sm:p-3 rounded-full py-3 px-4 text-white mx-2
               hover:bg-transparent border hover:text-orange-500 hover:border-orange-500 duration-300
              transition-all my-4 text-[14px]"
              >
                Explore Marketplace
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex justify-center items-center">
        <img
          className="h-56 md:object-contain sm:object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://img.freepik.com/free-vector/business-partners-handshake_74855-5222.jpg?t=st=1661167225~exp=1661167825~hmac=33b5b2e34224ea0dfd65c9f3a054e1e1eb411626fe15e0becbfe343ab31f3ba1"
          alt="img"
        />
      </div>
    </main>
  );
};

export default Hero;
