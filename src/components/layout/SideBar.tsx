import React, { useState } from 'react';
import { IoPaperPlane } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


const SideBar: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(true); // Default will be expanded
    const [numUnreadMessages, setNumUnreadMessages] = useState(0); // Set to 0 for now, TODO make API call to get unread messages

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="bg-[#7fb598] w-[214px] h-full rounded-tr-lg rounded-br-lg justify-center p-[12px] pt-[16px] space-y-1">
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="absolute top-4 right-[-12px] bg-white text-[#7fb598] rounded-full p-1 shadow-md hover:bg-[#e4f3ec]"
            >
                {isExpanded ? <FiChevronLeft /> : <FiChevronRight />}
                Toggle
            </button>
            <button
                className="w-[190px] h-[46px] flex items-center bg-transparent 
                        hover:bg-[#e4f3ec] hover:text-[#7eb698]
                        rounded-lg  text-base font-normal text-white"
            >
                <IoPaperPlane className=" w-[23px] h-[23px] ml-[15px] mr-[10px]" />
                Messages
                <div className="bg-[#de3b41] rounded-full w-[28px] h-[28px] ml-[20px] flex items-center justify-center text-sm text-white">
                    {numUnreadMessages}
                </div>
            </button>
            <button className="w-[190px] h-[46px] flex items-center bg-transparent hover:bg-[#e4f3ec] hover:text-[#7eb698] rounded-lg  text-base font-normal text-white">
                <BiSolidContact className=" w-[23px] h-[23px] ml-[15px] mr-[10px]" />
                Contact
            </button>
            <button className="w-[190px] h-[46px] flex items-center bg-transparent hover:bg-[#e4f3ec] hover:text-[#7eb698] rounded-lg  text-base font-normal text-white">
                <FaPeopleGroup className=" w-[23px] h-[23px] ml-[15px] mr-[10px]" />
                Community
            </button>
        </div>
    )
}

export default SideBar