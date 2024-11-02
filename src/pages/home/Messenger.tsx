import MyAppBar from "../../components/layout/AppBar";
import { IoPaperPlane } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import DemoProfileImage from '../../assets/DemoProfileImage.png';
import { IoSettingsOutline } from "react-icons/io5";
import ChatIcon from '../../assets/ChatIcon.png';
import { BiSearchAlt } from "react-icons/bi";
import MessageList from "../../components/lists/MessageList";
import { IoMdAddCircleOutline } from "react-icons/io";



const numUnreadMsg = 9

function MessageHome() {
    const items = [
        { title: 'Alice', numUnread: 9, icon: <img src={DemoProfileImage} />, numUsers: 2 },
        { title: 'Matthew', numUnread: 0, numUsers: 2 },
        { title: 'Elle', numUnread: 0, numUsers: 2 },
        { title: 'Alice, Matthew, +', numUnread: 3, numUsers: 3 },
        { title: 'Harvard grp chat', numUnread: 0, numUsers: 5 },
    ];

    return (
        <div className="w-screen h-screen overflow-hidden bg-white">
            <div className="w-full">
                <MyAppBar />
            </div>

            <main className="flex w-screen h-full">
                {/* SideBar */}
                <div className="bg-[#7fb598] w-[214px] h-full rounded-lg justify-center p-[12px] pt-[16px] space-y-1">
                    <button
                        className="w-[190px] h-[46px] flex items-center bg-transparent 
                        hover:bg-[#e4f3ec] hover:text-[#7eb698]
                        rounded-lg  text-base font-normal text-white"
                    >
                        <IoPaperPlane className=" w-[23px] h-[23px] ml-[15px] mr-[10px]" />
                        Messages
                        <div className="bg-[#de3b41] rounded-full w-[28px] h-[28px] ml-[20px] flex items-center justify-center text-sm text-white">
                            {numUnreadMsg}
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
                    <div className="flex absolute bottom-5 justify-center items-center">
                        <div className='rounded-full overflow-hidden bg-white ml-2 w-[38px] h-[38px] mr-2'>
                            <img src={DemoProfileImage} />
                        </div>
                        <div className="flex-col">
                            <div className="font-light text-base">John</div>
                            <button className="text-white font-light text-sm hover:text-gray-500 transition duration-100">
                                View Profile
                            </button>
                        </div>
                        <button className="w-[20px] h-[20px] flex relative ml-[35px] items-center justify-center rounded-full">
                            <IoSettingsOutline className="text-white w-[20px] h-[20px] hover:text-gray-500 transition duration-100" />
                        </button>
                    </div>
                </div>
                {/* Recent Chats */}
                <div className="bg-gray-100 w-[256px] h-full rounded-lg justify-center p-[16px] pt-[16px] space-y-1 ">
                    <div className="flex items-center pb-1">
                        <img
                            src={ChatIcon}
                            className="w-10 h-10 mr-2"
                        />
                        <h1 className="text-[#171a1f] text-2xl font-semibold"> Recent Chats</h1>
                    </div>
                    {/* Searchbar */}
                    <div className="relative h-[35px]">
                        <input
                            type="text"
                            placeholder="Search ..."
                            className="h-[35px] w-[223px] pl-8 pr-4 py-1 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400 text-[#bcc1ca] font-light"
                        />
                        <BiSearchAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                    </div>
                    {/* MessageList */}
                    <div className="space-y-0 pt-4">
                        {items.map((item, index) => (
                            <MessageList key={index} title={item.title} numUnread={item.numUnread} icon={item.icon} numUsers={item.numUsers} />
                        ))}
                    </div>
                    <button className="absolute left-[330px] bottom-[23px] w-[125px] h-[35px] pr-1 bg-[#4bb688] rounded-[18px] border border-[#e4f4ed] justify-center items-center gap-1.5 inline-flex text-white text-sm font-light">
                        <IoMdAddCircleOutline className="scale-110" />
                        Group Chat
                    </button>
                </div>
            </main >
        </div >
    );
}

export default MessageHome;
