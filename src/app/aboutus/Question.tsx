"use client"
import React from "react"
import { useState } from "react"

interface Props {
    title?: string;
    description?: string;
    className?: string;
    descritionClassName?: string;
    h1?: string;
    h1ClassName?: string;
    answer?: string;
    answerClassName?: string

}

const Accordion = ({ title, answer }: Props) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className=" md:pl-20  md:pr-20">

            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full outline-none "
            >
                <span >{title}</span>
                {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                <svg
                    className="fill-black shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                </svg>
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-black text-sm ${accordionOpen
                    ? "grid-rows-[1fr] opacity-100 bg-teal-700"
                    : "grid-rows-[0fr] opacity-0 "
                    }`}
            >
                <div className="overflow-hidden pt-2 text-sm md:text-lg text-white ">{answer}</div>
            </div>
        </div>
    );
};

export default Accordion;