"use client";
import React, { useState } from 'react';

const SalarySlider = () => {
    const [minSalary, setMinSalary] = useState(0);
    const [maxSalary, setMaxSalary] = useState(9999);

    // Function to calculate the background style for the min salary slider
    const getMinBackgroundSize = () => {
        const min = (minSalary / 9999) * 100;
        return {
            background: `linear-gradient(to right, #309689 ${min}%, #ddd ${min}%)`
        };
    };

    // Function to calculate the background style for the max salary slider
    const getMaxBackgroundSize = () => {
        const max = (maxSalary / 9999) * 100;
        return {
            background: `linear-gradient(to right, #ddd ${max}%, #309689 ${max}%)`
        };
    };

    return (
        <div className="flex flex-col items-center p-4 bg-gray-100">
            <h2 className="text-lg font-semibold mb-2">Salary</h2>
            <div className="w-full flex justify-between mb-4">
                <input
                    type="number"
                    className="w-1/4 p-2 border border-gray-300 rounded no-spinner"
                    value={minSalary}
                    onChange={(e) => setMinSalary(Number(e.target.value))}
                    min="0"
                    max={maxSalary}
                    style={{ appearance: 'textfield', MozAppearance: 'textfield' }}
                />
                <input
                    type="number"
                    className="w-1/4 p-2 border border-gray-300 rounded no-spinner"
                    value={maxSalary}
                    onChange={(e) => setMaxSalary(Number(e.target.value))}
                    min={minSalary}
                    max="9999"
                    style={{ appearance: 'textfield', MozAppearance: 'textfield' }}
                />
            </div>
            <div className="flex items-center space-x-2 w-full">
                <input
                    type="range"
                    min="0"
                    max="9999"
                    value={minSalary}
                    onChange={(e) => setMinSalary(Number(e.target.value))}
                    className="w-full slider"
                    style={{
                        WebkitAppearance: 'none',
                        width: '100%',
                        height: '6px',
                        outline: 'none',
                        opacity: 0.7,
                        transition: 'opacity 0.2s',
                        ...getMinBackgroundSize()
                    }}
                />
                <input
                    type="range"
                    min="0"
                    max="9999"
                    value={maxSalary}
                    onChange={(e) => setMaxSalary(Number(e.target.value))}
                    className="w-full slider"
                    style={{
                        WebkitAppearance: 'none',
                        margin: 0,
                        width: '100%',
                        height: '6px',
                        outline: 'none',
                        opacity: 0.7,
                        transition: 'opacity 0.2s',
                        ...getMaxBackgroundSize()
                    }}
                />
            </div>
            <p className="text-sm mt-2">Salary: ${minSalary} - ${maxSalary}</p>
            <button
                className="mt-4 bg-teal-600 text-white px-4 py-2 rounded"
                onClick={() => console.log(`Applied salary range: ${minSalary} - ${maxSalary}`)}
            >
                Apply
            </button>
            <style>
                {`
          /* Hide the spinners on number inputs */
          input[type=number]::-webkit-outer-spin-button,
          input[type=number]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type=number] {
            -moz-appearance: textfield;
          }
        `}
            </style>
        </div>
    );
};

export default SalarySlider;