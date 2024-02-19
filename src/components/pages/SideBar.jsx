import { BsTools } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { TbSitemap } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { GiMineTruck } from "react-icons/gi";
import { GrStorage } from "react-icons/gr";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="">
      <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      <div>
        <div className="fixed xl:flex xl:w-64 xl:flex-col xl:fixed xl:inset-y-0">
          <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-gray-900 ">
            {/* <div className="flex items-center flex-shrink-0 px-4">
              <p className="font-semibold text-xl text-white">FOSSIL CONTRACTING</p>
            </div> */}

            <div className="flex flex-col flex-1 px-3 mt-8">
              <div className="space-y-4">
                <nav className="flex-1 space-y-2 sm:px-2">
                  <Link to="/" title="" className="flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-lg group">
                    <TiHome className="mr-2" />
                    <span className="hidden sm:inline ">Dashboard</span>
                  </Link>

                  <Link to="/sites" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group">
                    <TbSitemap className="mr-2" />
                    <span className="hidden sm:inline">Sites</span>
                  </Link>

                  <Link to="/operators" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group">
                    <GrUserWorker className="mr-2" />
                    <span className="hidden sm:inline">Operators</span>
                  </Link>
                </nav>

                <hr className="border-gray-700" />

                <nav className="flex-1 space-y-2">
                  <Link to="/plant" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group">
                    <GiMineTruck className="mr-2" />
                    <span className="hidden sm:inline">Plant</span>
                  </Link>

                  <Link to="/workshop" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group">
                    <BsTools className="mr-2" />
                    <span className="hidden sm:inline">Workshop</span>
                  </Link>

                  <Link to="/stores" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group">
                    <GrStorage className="mr-2" />
                    <span className="hidden sm:inline">Stores</span>
                  </Link>
                </nav>

                <hr className="border-gray-700" />

                <nav className="flex-1 space-y-2">
                  <Link to="/settings" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group">
                    <MdOutlineSettings className="mr-2" />
                    <span className="hidden sm:inline">Settings</span>
                  </Link>
                </nav>
              </div>

              <div className="pb-4 mt-auto">
                <button type="button" className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white transition-all duration-200 rounded-lg hover:bg-gray-700">
                  <FaRegUser className="mr-2" /> Eng. Jakwe
                  <svg className="w-5 h-5 ml-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;