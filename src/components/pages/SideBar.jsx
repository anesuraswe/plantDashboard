//import React from 'react'
import { BsTools } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { TbSitemap } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { GiMineTruck } from "react-icons/gi";
import { GrStorage } from "react-icons/gr";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const SideBar = () => {
  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      <div>
        <div className="hidden xl:flex xl:w-64 xl:flex-col xl:fixed xl:inset-y-0">
          <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-gray-900">
            <div className="flex items-center flex-shrink-0 px-4">
              <p className="font-semibold text-xl text-white">
                FOSSIL CONTRACTING
              </p>
            </div>

            <div className="flex flex-col flex-1 px-3 mt-8">
              <div className="space-y-4">
                <nav className="flex-1 space-y-2">
                  <a
                    href="#"
                    title=""
                    className="flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-lg group"
                  >
                    <div className="text-sm text-center flex ">
                    <TiHome style={{ marginRight: '8px', fontSize: '20px' }}/>
                    Dashboard
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group"
                  >
                    <div className="text-sm text-center flex ">
                    <TbSitemap style={{ marginRight: '8px', fontSize: '20px' }} />
                    Sites
                    </div>
                    
                  </a>

                  <a
                    href="#"
                    className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group"
                  >
                    <div className="text-sm text-center flex ">
                    <GrUserWorker style={{ marginRight: '8px', fontSize: '20px' }} /> 
                     Operators
                    </div>
                  </a>
                </nav>

                <hr className="border-gray-700" />

                <nav className="flex-1 space-y-2">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group"
                  >
                    <div className="text-sm text-center flex ">
                    <GiMineTruck style={{ marginRight: '8px', fontSize: '22px' }}/>
                    Plant
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group"
                  >
                   <div className="text-sm text-center flex ">
                   <BsTools style={{ marginRight: '8px', fontSize: '20px' }}/>
                    Workshop

                   </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group"
                  >
                    <div className="text-sm text-center flex ">
                    <GrStorage style={{ marginRight: '8px', fontSize: '20px' }}/>
                    Stores
                    </div>
                  </a>
                </nav>

                <hr className="border-gray-700" />

                <nav className="flex-1 space-y-2">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group"
                  >
                  <div className="text-sm text-center flex ">
                  <MdOutlineSettings style={{ marginRight: '8px', fontSize: '20px' }}/>
                    Settings
                  </div>
                  </a>
                </nav>
              </div>

              <div className="pb-4 mt-auto">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white transition-all duration-200 rounded-lg hover:bg-gray-700"
                >
                  {/* <img className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-female.png" alt="" /> */}
                  <FaRegUser style={{ marginRight: '8px', fontSize: '20px' }}/>Eng. Jakwe
                  <svg
                    className="w-5 h-5 ml-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <script>
    var chart1Options = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        series: [
            {
                name: 'New user',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55, 57],
            },
            {
                name: 'Returning user',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 76, 85, 101],
            },
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '32%',
                endingShape: 'rounded',
                borderRadius: 3,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 4,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            show: false,
        },
        fill: {
            opacity: 1,
        },
        colors: ['#4F46E5', '#E4E4E7'],
        legend: {
            position: 'bottom',
            markers: {
                radius: 12,
                offsetX: -4,
            },
            itemMargin: {
                horizontal: 12,
                vertical: 20,
            },
        },
    }

    var chart1 = new ApexCharts(document.querySelector('#chart1'), chart1Options)

    chart1.render()

    var chart2Options = {
        chart: {
            type: 'donut',
            width: '120%',
        },
        plotOptions: {
            pie: {
                expandOnClick: true,
                donut: {
                    size: '60%',
                    labels: {
                        show: true,
                    },
                },
            },
        },
        series: [68, 22, 10],
        labels: ['Direct Source', 'Referral', 'Social'],
        colors: ['#4F46E5', '#C7D2FE', '#E0E7FF'],
        legend: {
            position: 'bottom',
            markers: {
                radius: 12,
                offsetX: -4,
            },
            itemMargin: {
                horizontal: 12,
                vertical: 20,
            },
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                },
            },
        },
    }

    var chart2 = new ApexCharts(document.querySelector('#chart2'), chart2Options)

    chart2.render()
</script> */}
    </div>
  );
};

export default SideBar;
