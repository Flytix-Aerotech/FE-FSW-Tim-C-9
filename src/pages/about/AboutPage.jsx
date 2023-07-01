import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import {
  dev1,
  dev10,
  dev11,
  dev2,
  dev3,
  dev4,
  dev5,
  dev6,
  dev7,
  dev8,
  dev9,
  gunadarma,
  its,
  unbraw,
  uniba,
  unnesa,
  unsap,
  unsri,
  upi,
} from "../../assets/about_image";

const data = [
  { jobdesk: "Product Owner", name: "Muhammad Helmy fadlail Albab", foto: dev1, university: "Universitas Brawijaya", image: unbraw },
  { jobdesk: "Scrum Master", name: "Dza Habbin Nofaylah", foto: dev2, university: "Universitas Bahaudin Mudhary Madura", image: uniba },
  { jobdesk: "Back-end Developer", name: "Muhammad Huda Nugroho", foto: dev3, university: "Universitas Gunadarma", image: gunadarma },
  { jobdesk: "Back-end Developer", name: "Theresia Nawangsih", foto: dev4, university: "Institut Teknologi Sepuluh Nopember", image: its },
  { jobdesk: "Back-end Developer", name: "Christin Henin Oei", foto: dev5, university: "Universitas Brawijaya", image: unbraw },
  { jobdesk: "Front-end Developer", name: "Endang Hendayatna", foto: dev6, university: "Universitas Sebelas April", image: unsap },
  { jobdesk: "Front-end Developer", name: "Fauzi Ibnu Hakim", foto: dev7, university: "Universitas Sebelas April", image: unsap },
  { jobdesk: "Front-end Developer", name: "Yana Wahyu Indra Pramugari", foto: dev8, university: "Universitas Negeri Surabaya", image: unnesa },
  { jobdesk: "Android Developer", name: "Rizki Nuriman", foto: dev9, university: "Universitas Pendidikan Indonesia", image: upi },
  { jobdesk: "Android Developer", name: "Dian Purnama Sari", foto: dev10, university: "Universitas Yarsi", image: unsri },
  { jobdesk: "Android Developer", name: "Heru Prayogo", foto: dev11, university: "Universitas Yarsi", image: unsri },
];

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
              {data.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
                  <div className="flex flex-col items-center mb-2">
                    <img src={item.foto} alt="Developer 1" className="w-24 h-24 rounded-full object-cover" />
                    <h3 className="h-16 mt-2 text-xl font-bold text-center">{item.name}</h3>
                  </div>
                  <div className="flex items-center h-20 mt-2 text-sm">
                    <img src={item.image} alt="University Logo" className="w-6 h-6 mr-2" />
                    <span>{item.university}</span>
                  </div>
                  <p className="text-gray-700">{item.jobdesk}</p>
                </div>
              ))}
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
