import React from 'react';
import Button from './Button';
import Img from '../svg/SvgCharts'

const CardContainer = () => (
    <div>
        <div className="max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">

            {/* <------Image----> */}

            <div className="w-1/3 bg-cover" src={Img}></div>

            {/* <------Text Card----> */}

            <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Design</a>
                </div>

                <div className="mt-2">
                    <a href="#" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Accessibility tools for designers and developers</a>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

                    <div className="flex items-center">
                        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Khatab wedaa</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default CardContainer;