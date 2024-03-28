import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { listAvatar } from "./assets/avatar";

export default function DataHero() {
  const [hero, setHero] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  async function getDataHero() {
    try {
      const response = await axios.get(
        "https://api.dazelpro.com/mobile-legends/hero"
      );
      console.log("RESPON DATA : ", response.data.hero);
      setHero(response.data.hero);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getDataHero();
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-gray-800 shadow-md ">
        <div className="container mx-auto px-4 py-4 md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <span className="text-white text-xl font-bold ml-8">
              Mobile Legends
            </span>
            <button
              className="block md:hidden text-white"
              onClick={toggleNavbar}
            >
              <img className="w-6 p6 " src="/menu.png"></img>
            </button>
          </div>
          <ul className={`${isOpen ? "block" : "hidden"} md:flex md:space-x-4`}>
            <li>
              <Link to="/" className="text-white hover:text-gray-400 ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-400">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-20 mt-10">
        {hero.map((datahero) => (
          <div
            key={datahero.hero_id}
            className="bg-white rounded-lg p-4 shadow-md"
          >
            <div className="font-3xl font-bold underline">
              {datahero.hero_name}
            </div>
            <div className="font-md">Role :{datahero.hero_role}</div>
            <div className="font-md">Specialist :{datahero.hero_specially}</div>

            <img
              src={`${listAvatar?.find((gambar) =>
                gambar
                  ?.toLowerCase()
                  .includes(datahero?.hero_name?.toLowerCase())
              )}`}
              alt={datahero.hero_name}
              className="w-full h-auto rounded-lg mt-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
