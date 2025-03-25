import React from "react";
import Footer from "./Footer";

const Aboutus = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-orange-200 min-h-screen p-10 flex flex-col items-center">
      {/* Three Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Column 1: Logo & Intro */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-8 border-orange-500">
          <img
            src="/path-to-logo/lynx-logo.jpg" // Replace with actual logo path
            alt="Lynx Bakery Logo"
            className="w-32 mx-auto mb-4"
          />
          <h1 className="text-3xl font-extrabold text-orange-800">Lynx Bakery</h1>
          <p className="text-gray-700 mt-4 leading-relaxed">
            At **Lynx Bakery**, we craft **delicious, premium cakes** using the finest ingredients. 
            Every slice is baked with **love and perfection** to make your special moments sweeter! 🍰✨
          </p>
        </div>

        {/* Column 2: Cakes Available */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-8 border-purple-500">
          <h2 className="text-3xl font-extrabold text-purple-700">Our Cakes</h2>
          <ul className="mt-4 text-gray-700 space-y-3">
            <li>🎂 <span className="text-red-500 font-semibold">Red Velvet Cake</span></li>
            <li>🍫 <span className="text-brown-600 font-semibold">Black Forest Cake</span></li>
            <li>🍓 <span className="text-pink-600 font-semibold">Strawberry Cake</span></li>
            <li>🥕 <span className="text-orange-600 font-semibold">Carrot Cake</span></li>
            <li>🍌 <span className="text-yellow-600 font-semibold">Banana Cake</span></li>
          </ul>
          <p className="mt-4 text-lg font-semibold text-purple-600 animate-pulse">
            🎉 And many more cakes **available on order!** Place yours today! 🍰✨
          </p>
        </div>

        {/* Column 3: Team Members */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-8 border-green-500">
          <h2 className="text-3xl font-extrabold text-green-700">Meet Our Team</h2>
          <p className="text-gray-700 mt-4">The creative hands behind your favorite cakes! 🍪🎂</p>
          <div className="mt-6 space-y-4">
            <div className="p-3 bg-green-100 rounded-lg shadow">
              <h3 className="text-lg font-bold text-green-700">🍪 Chef Sugarwhisk</h3>
              <p className="text-gray-500">Master of fluffy cakes!</p>
            </div>
            <div className="p-3 bg-pink-100 rounded-lg shadow">
              <h3 className="text-lg font-bold text-pink-700">🎂 Frosting Queen Bella</h3>
              <p className="text-gray-500">The genius behind our creamy frosting.</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg shadow">
              <h3 className="text-lg font-bold text-yellow-700">🍫 ChocoLover Mia</h3>
              <p className="text-gray-500">Our chocolate expert!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <p className="text-xl font-semibold text-orange-700">
          🎉 **Let’s Bake Magic Together!** Visit Lynx Bakery today! 🍰
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default Aboutus;
