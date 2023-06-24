import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { dev1, dev2, dev3, dev4, dev5, dev6, dev7, gunadarma, its, unbraw, uniba, unnesa, unsap } from "../../assets/about_image";

const AboutCompanyPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl mt-5">
        {/* Header */}
        <header className="py-4 text-center text-white bg-purple-500 rounded-xl">
          <div className="flex items-center justify-between px-4">
            <Link to="/" className="flex items-center">
              <ArrowLeftIcon className="w-6 h-6 mr-2" />
              Back
            </Link>
            <h1 className="text-2xl font-bold">About</h1>
            <div className="w-6"></div>
          </div>
        </header>

        {/* Content */}
        <div className="container py-12 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Content */}
            <div className="flex-col p-4 bg-white rounded-lg shadow-lg ">
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="text-gray-700">Misi kami adalah membuat perjalanan udara jadi lebih mudah dan menyenangkan.</p>
            </div>
            {/* Right Content */}
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
              <p className="text-gray-700">Visi kami di Flytix adalah menjadi tempat terbaik untuk beli dan booking tiket pesawat online.</p>
            </div>
          </div>

          {/* Team Development */}
          <div className="mt-12">
            <h2 className="mb-6 text-3xl font-bold text-center">Team Development</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {/* Team Member 1 */}
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center mb-2">
                  <img src={dev1} alt="Developer 1" className="w-24 h-24 rounded-full" />
                  <h3 className="h-16 mt-2 text-xl font-bold text-center">Muhammad Helmy Fadlail Albab</h3>
                </div>
                <div className="flex items-center h-20 mt-2 text-sm">
                  <img src={unbraw} alt="University Logo" className="w-6 h-6 mr-2" />
                  <span>Universitas Brawijaya</span>
                </div>
                <p className="text-gray-700">Product Owner</p>
              </div>
              {/* Team Member 2 */}
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center mb-2">
                  <img src={dev2} alt="Developer 2" className="w-24 h-24 rounded-full" />
                  <h3 className="h-16 mt-2 text-xl font-bold text-center">Dza Habbin Nofaylah</h3>
                </div>
                <div className="flex items-center h-20 mt-2 text-sm">
                  <img src={uniba} alt="University Logo" className="w-6 h-6 mr-2" />
                  <span>Universitas Bahaudin Mudhary Madura</span>
                </div>
                <p className="text-gray-700">Scrum Master</p>
              </div>
              {/* Team Member 3 */}
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center mb-2">
                  <img src={dev3} alt="Developer 3" className="w-24 h-24 rounded-full" />
                  <h3 className="h-16 mt-2 text-xl font-bold text-center">Muhammad Huda Nugroho</h3>
                </div>
                <div className="flex items-center h-20 mt-2 text-sm">
                  <img src={gunadarma} alt="University Logo" className="w-6 h-6 mr-2" />
                  <span>Universitas Gunadarma</span>
                </div>
                <p className="text-gray-700">Back-end Developer</p>
              </div>
              {/* Team Member 4 */}
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center mb-2">
                  <img src={dev4} alt="Developer 4" className="w-24 h-24 rounded-full" />
                  <h3 className="h-16 mt-2 text-xl font-bold text-center">Theresia Nawangsih</h3>
                </div>
                <div className="flex items-center h-20 mt-2 text-sm">
                  <img src={its} alt="University Logo" className="w-6 h-6 mr-2" />
                  <span>Institut Teknologi Sepuluh Nopember</span>
                </div>
                <p className="text-gray-700">Back-end Developer</p>
              </div>
              {/* Team Member 5 */}
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center mb-2">
                  <img src={dev5} alt="Developer 5" className="w-24 h-24 rounded-full" />
                  <h3 className="h-16 mt-2 text-xl font-bold text-center">Christin Henin Oei</h3>
                </div>
                <div className="flex items-center h-20 mt-2 text-sm">
                  <img src={unbraw} alt="University Logo" className="w-6 h-6 mr-2" />
                  <span>Universitas Brawijaya</span>
                </div>
                <p className="text-gray-700">Back-end Developer</p>
              </div>
              {/* Team Member 6 */}
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center mb-2">
                  <img src={dev6} alt="Developer 6" className="w-24 h-24 rounded-full" />
                  <h3 className="h-16 mt-2 text-xl font-bold text-center">Endang Hendayatna</h3>
                </div>
                <div className="flex items-center h-20 mt-2 text-sm">
                  <img src={unsap} alt="University Logo" className="w-6 h-6 mr-2" />
                  <span>Universitas Sebelas April</span>
                </div>
                <p className="text-gray-700">Front-end Developer</p>
              </div>
              {/* Team Member 7 */}
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center mb-2">
                  <img src={dev7} alt="Developer 7" className="w-24 h-24 rounded-full" />
                  <h3 className="h-16 mt-2 text-xl font-bold text-center">Fauzi Ibnu Hakim</h3>
                </div>
                <div className="flex items-center h-20 mt-2 text-sm">
                  <img src={unsap} alt="University Logo" className="w-6 h-6 mr-2" />
                  <span>Universitas Sebelas April</span>
                </div>
                <p className="text-gray-700">Front-end Developer</p>
              </div>
              {/* Team Member 8 */}
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center mb-2">
                  <img src="dev-1.jpg" alt="Developer 8" className="w-24 h-24 rounded-full" />
                  <h3 className="h-16 mt-2 text-xl font-bold text-center">Yana Wahyu Indra Pramugari</h3>
                </div>
                <div className="flex items-center h-20 mt-2 text-sm">
                  <img src={unnesa} alt="University Logo" className="w-6 h-6 mr-2" />
                  <span>Universitas Negeri Surabaya</span>
                </div>
                <p className="text-gray-700">Front-end Developer</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="py-4 mt-5 text-center text-white bg-purple-500 rounded-xl">
            &copy; {new Date().getFullYear()} FlyTix AeroTech. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};
export default AboutCompanyPage;
