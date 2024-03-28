import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { listAvatar } from "./assets/avatar";

export default function DetailHero() {
  let location = useLocation();
  const [detail, setDetail] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const fetchDetailHero = async () => {
    try {
      const response = await axios.get(
        `https://api.dazelpro.com/mobile-legends/hero/${location.state.hero_id}`,
        { headers: { accept: "application/json" } }
      );
      setDetail(response.data.hero[0]);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchDetailHero();
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
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

      <div className="container mx-auto mt-8">
        <div className="max-w-md mx-auto border border-gray-300 p-8 rounded-lg shadow-lg">
          {detail && (
            <div key={detail?.hero_id}>
              <h1 className="text-3xl font-bold mb-4">{detail?.hero_name}</h1>
              <p className="text-lg mb-2">Role: {detail?.hero_role}</p>
              <p className="text-lg mb-2">
                Specialist: {detail?.hero_specially}
              </p>
              <ul className="text-lg mb-4">
                <li>
                  Hero Durability : {detail?.hero_overview.hero_durability}
                </li>
                <li>Hero Offence : {detail?.hero_overview.hero_offence}</li>
                <li>Hero Ability : {detail?.hero_overview.hero_ability}</li>
                <li>
                  Hero Difficulty : {detail?.hero_overview.hero_difficulty}
                </li>
              </ul>
              <img
                src={`${listAvatar?.find((gambar) =>
                  gambar
                    ?.toLowerCase()
                    .includes(detail?.hero_name?.toLowerCase())
                )}`}
                alt={detail?.hero_name}
                className="w-50 h-auto rounded-lg mx-auto"
              />
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <Link
            to={"/search"}
            className="inline-block px-4 py-2 mt-10 bg-red-400 text-white rounded-md hover:bg-blue-300 transition duration-300 ease-in-out"
          >
            Kembali
          </Link>
        </div>
      </div>
    </>
  );
}
