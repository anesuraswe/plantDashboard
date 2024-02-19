import { GrUserAdmin } from "react-icons/gr";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { FaDownload } from "react-icons/fa6";
import { GiBreakingChain } from "react-icons/gi";

const Dashboard = () => {
  return (
    <div className="pl-64 ">
        <main>
            <div className="py-6">
                <div className="px-4 mx-auto sm:px-6 md:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex items-center">
                        <GrUserAdmin style={{ fontSize: '36px' }}/>
                            {/* <img className="flex-shrink-0 object-cover rounded-full w-14 h-14" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-female.png" alt="" /> */}
                            <div className="ml-5">
                                <p className="text-lg font-bold text-gray-900">Hey Eng. Jakwe! 👋</p>
                                <p className="mt-1 pl-4 text-sm font-medium text-gray-500">Monitor activities accross all sites.</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-start mt-5 space-x-5 sm:justify-end sm:mt-0">
                            <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-600 bg-white border border-gray-300 rounded-lg shadow-sm sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <svg className="w-5 h-5 mr-2 -ml-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                Feb 15 - Mar 15 
                            </button>

                            <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-600 bg-white border border-gray-300 rounded-lg shadow-sm sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
                    <div className="space-y-5 sm:space-y-6">
                        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                            <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-4 rounded-xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <p className="text-base font-bold text-gray-900">Plant Performance</p>
                                    <p className="mt-1 text-sm font-medium text-gray-500">Last 30 days: $84,840 Profits</p>

                                    <div id="chart1" className="mt-0"></div>
                                </div>
                            </div>

                            <div className="space-y-6 lg:col-span-2">
                                <div className="overflow-hidden border border-indigo-200 bg-indigo-50 rounded-xl">
                                    <div className="px-5 py-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="flex text-sm font-medium text-gray-500"><HiOutlineStatusOnline style={{ marginRight: '8px', fontSize: '20px', color: 'green' }}/>Running Plant</p>
                                                <p className="mt-2 text-xl font-bold text-gray-900">1, 693 Online</p>
                                            </div>

                                            <div></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                                    <div className="px-4 py-5 sm:p-6">
                                        <p className="mt-6 text-xs font-semibold tracking-widest text-indigo-600 uppercase">New requisition</p>
                                        <p className="mt-6 text-lg font-medium text-gray-900"><span className="font-bold">Ziminya Site</span> is requesting a disc harrow.</p>
                                        <p className="mt-3 text-sm font-medium text-gray-500">Requisition passed by the Site Agent.</p>
                                        <div className="flex items-center mt-6 space-x-4">
                                            <button
                                                type="button"
                                                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                            >
                                                Contact
                                            </button>

                                            <button
                                                type="button"
                                                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-700"
                                            >
                                                Accept
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                            {/* <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-4 rounded-xl">
                                <div className="px-4 py-5 sm:px-6">
                                    <p className="text-base font-bold text-gray-900">Recent Leads</p>
                                </div>

                                <div className="flex flex-col mt-2">
                                    <div className="-my-2 overflow-x-auto">
                                        <div className="inline-block min-w-full py-2 align-middle">
                                            <table className="min-w-full lg:divide-gray-200 lg:divide-y">
                                                <thead className="hidden lg:table-header-group">
                                                    <tr>
                                                        <th className="py-3.5 sm:px-6 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-widest">Customer</th>

                                                        <th className="py-3.5 sm:px-6 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">Email Address</th>

                                                        <th className="py-3.5 sm:px-6 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">Phone Number</th>

                                                        <th className="py-3.5 sm:px-6 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">Country</th>
                                                    </tr>
                                                </thead>

                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="bg-white">
                                                        <td className="px-4 py-4 text-sm font-bold text-gray-900 align-top sm:px-6 lg:align-middle whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-male.png" alt="" />
                                                                Darrell Steward
                                                            </div>
                                                            <div className="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                    </svg>
                                                                    tim.jennings@example.com
                                                                </div>

                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        ></path>
                                                                    </svg>
                                                                    (480) 555-0103
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                </svg>
                                                                tim.jennings@example.com
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    ></path>
                                                                </svg>
                                                                (480) 555-0103
                                                            </div>
                                                        </td>

                                                        <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top sm:px-6 lg:align-middle lg:text-left whitespace-nowrap">USA</td>
                                                    </tr>

                                                    <tr className="bg-white">
                                                        <td className="px-4 py-4 text-sm font-bold text-gray-900 align-top sm:px-6 lg:align-middle whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-male-2.png" alt="" />
                                                                Ronald Richards
                                                            </div>
                                                            <div className="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                    </svg>
                                                                    tim.jennings@example.com
                                                                </div>

                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        ></path>
                                                                    </svg>
                                                                    (480) 555-0103
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                </svg>
                                                                tim.jennings@example.com
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    ></path>
                                                                </svg>
                                                                (480) 555-0103
                                                            </div>
                                                        </td>

                                                        <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top sm:px-6 lg:align-middle lg:text-left whitespace-nowrap">USA</td>
                                                    </tr>

                                                    <tr className="bg-white">
                                                        <td className="px-4 py-4 text-sm font-bold text-gray-900 align-top sm:px-6 lg:align-middle whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-female.png" alt="" />
                                                                Jane Cooper
                                                            </div>
                                                            <div className="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                    </svg>
                                                                    tim.jennings@example.com
                                                                </div>

                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        ></path>
                                                                    </svg>
                                                                    (480) 555-0103
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                </svg>
                                                                tim.jennings@example.com
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    ></path>
                                                                </svg>
                                                                (480) 555-0103
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top sm:px-6 lg:align-middle lg:text-left whitespace-nowrap">USA</td>
                                                    </tr>

                                                    <tr className="bg-white">
                                                        <td className="px-4 py-4 text-sm font-bold text-gray-900 align-top sm:px-6 lg:align-middle whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-female-2.png" alt="" />
                                                                Jacob Jones
                                                            </div>
                                                            <div className="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                    </svg>
                                                                    tim.jennings@example.com
                                                                </div>

                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        ></path>
                                                                    </svg>
                                                                    (480) 555-0103
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                </svg>
                                                                tim.jennings@example.com
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    ></path>
                                                                </svg>
                                                                (480) 555-0103
                                                            </div>
                                                        </td>

                                                        <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top sm:px-6 lg:align-middle lg:text-left whitespace-nowrap">USA</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="overflow-hidden border border-gray-200 lg:col-span-3 bg-gray-50 rounded-xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <p className="text-base font-bold text-gray-900">Download Reports</p>
                                    <p className="mt-1 text-sm font-medium text-gray-500">Get pdf versions of reports for further analysis</p>

                                    <div className="mt-6 space-y-3">
                                        <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                                            <div className="px-4 py-4">
                                                <div className="flex items-center justify-between space-x-5">
                                                    <div className="flex items-center flex-1">
                                                        
                                                        <div className="flex-1 min-w-0 ml-4">
                                                            <p className="text-sm font-bold text-gray-900 truncate">Daily Diary</p>
                                                            <p className="mt-1 text-sm font-medium text-gray-500 truncate">Today&apos;s Activities</p>
                                                        </div>
                                                    </div>

                                                    <div className="ml-auto">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold leading-4 text-indigo-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                                                        >
                                                            <FaDownload style={{ marginRight: '8px', fontSize: '20px' }}/>
                                                            PDF
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                                            <div className="px-4 py-4">
                                                <div className="flex items-center justify-between space-x-5">
                                                    <div className="flex items-center flex-1">
                                                        <div className="flex-1 min-w-0 ml-4">
                                                            <p className="text-sm font-bold text-gray-900 truncate">Weekly Report</p>
                                                            <p className="mt-1 text-sm font-medium text-gray-500 truncate">Summary for the week</p>
                                                        </div>
                                                    </div>

                                                    <div className="ml-auto">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold leading-4 text-indigo-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                                                        >
                                                            <FaDownload style={{ marginRight: '8px', fontSize: '20px' }}/>
                                                            PDF
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                                            <div className="px-4 py-4">
                                                <div className="flex items-center justify-between space-x-5">
                                                    <div className="flex items-center flex-1">
                                                        
                                                        <div className="flex-1 min-w-0 ml-4">
                                                            <p className="text-sm font-bold text-gray-900 truncate">Monthly Report</p>
                                                            <p className="mt-1 text-sm font-medium text-gray-500 truncate">Progress review for the whole month</p>
                                                        </div>
                                                    </div>

                                                    <div className="ml-auto">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold leading-4 text-indigo-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                                                        >
                                                            <FaDownload style={{ marginRight: '8px', fontSize: '20px' }}/>
                                                            PDF
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                            {/* <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-2 rounded-xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <p className="text-base font-bold text-gray-900">Leads Breakdown</p>

                                    <div id="chart2" className="mt-6 -translate-x-10"></div>
                                </div>
                            </div> */}

                            <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-6 rounded-xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="sm:flex sm:items-start sm:justify-between">
                                        <div>
                                            <p className="flex text-base font-bold text-gray-900"><GiBreakingChain style={{ marginRight: '8px', fontSize: '22px' }}/>MAJOR BREAKDOWNS</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Equipment which is on breakdown and their statuses.</p>
                                        </div>

                                        <div className="mt-4 sm:mt-0">
                                            <a href="#" title="" className="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 uppercase hover:text-gray-900">
                                                See all Breakdowns
                                                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="divide-y divide-gray-200">
                                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                                        <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                                            <span className="text-xs font-medium text-green-900 bg-green-100 rounded-full inline-flex items-center px-2.5 py-1">
                                                <svg className="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                                                    <circle cx="4" cy="4" r="3"></circle>
                                                </svg>
                                                PROGRESS
                                            </span>
                                        </div>

                                        <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                                            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                                            <p className="text-sm font-bold text-gray-900">HOHAN TIPPER</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">FLT 102</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="text-sm font-bold text-gray-900">ALTERNATOR BELT</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Feb 17, 2024</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="mt-1 text-sm font-medium text-gray-500">TEFOMA</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                                        <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                                            <span className="text-xs font-medium text-green-900 bg-green-100 rounded-full inline-flex items-center px-2.5 py-1">
                                                <svg className="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                                                    <circle cx="4" cy="4" r="3"></circle>
                                                </svg>
                                                PROGRESS
                                            </span>
                                        </div>

                                        <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                                            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                                            <p className="text-sm font-bold text-gray-900">CAT EXCAVATOR</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">FCX 17</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="text-sm font-bold text-gray-900">BUCKET BROKEN</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">FEB 12, 2024</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="mt-1 text-sm font-medium text-gray-500">HEBE P4</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                                        <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                                            <span className="text-xs font-medium text-yellow-900 bg-yellow-100 rounded-full inline-flex items-center px-2.5 py-1">
                                                <svg className="-ml-1 mr-1.5 h-2.5 w-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                                                    <circle cx="4" cy="4" r="3"></circle>
                                                </svg>
                                                PENDING
                                            </span>
                                        </div>

                                        <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                                            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                                            <p className="text-sm font-bold text-gray-900">HOHAN TIPPER</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">FLT 52</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="text-sm font-bold text-gray-900">TYRE BURST</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Jan 17, 2024</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="mt-1 text-sm font-medium text-gray-500">ZIMINYA</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                                        <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                                            <span className="text-xs font-medium text-red-900 bg-red-100 rounded-full inline-flex items-center px-2.5 py-1">
                                                <svg className="-ml-1 mr-1.5 h-2.5 w-2.5 text-red-500" fill="currentColor" viewBox="0 0 8 8">
                                                    <circle cx="4" cy="4" r="3"></circle>
                                                </svg>
                                                DECOMISSIONED
                                            </span>
                                        </div>

                                        <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                                            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                                            <p className="text-sm font-bold text-gray-900">VOLVO EXCAVATOR</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">SXE 22</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="text-sm font-bold text-gray-900">OVERHEATING</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Jan 17, 2023</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="mt-1 text-sm font-medium text-gray-500">TEFOMA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </div>
  )
}

export default Dashboard