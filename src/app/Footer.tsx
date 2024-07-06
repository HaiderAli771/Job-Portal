import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 pt-[30px]">
                <div className="flex flex-row ">
                    <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                        <h6 className="text-lg font-bold">Job</h6>
                        <p className="text-[15px] mt-4">
                            Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris d...
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-full sm:w-1/4 mb-6 sm:mb-0">
                        <h6 className="text-lg font-bold pr-[16px] ">Company</h6>
                        <ul className="mt-4">
                            <li className="text-sm">About Us</li>
                            <li className="text-sm">Our Team</li>
                            <li className="text-sm">Partners</li>
                            <li className="text-sm">For Candidates</li>
                            <li className="text-sm">For Employers</li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                        <h6 className="text-lg font-bold">Job Categories</h6>
                        <ul className="mt-4">
                            <li className="text-sm">Telecommunications</li>
                            <li className="text-sm">Hotels & Tourism</li>
                            <li className="text-sm">Construction</li>
                            <li className="text-sm">Education</li>
                            <li className="text-sm">Financial Services</li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                        <h6 className="text-lg font-bold">Newsletter</h6>
                        <p className="text-sm mt-4">
                            Eu nunc pretium vitae platea. Non netus elementum vulputate
                        </p>
                        <div className="flex flex-col gap-2 mt-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border-white border-[1px] rounded-lg bg-black p-2"
                            />
                            <button className="rounded-xl w-full bg-[#309689] text-white py-2  mt-2">
                                Subscribe now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center mt-8 text-center text-sm">
                    <p>© Copyright Job Portal 2024. Design by Figma.guru</p>
                    <div className="flex justify-center gap-4 pr-2">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;