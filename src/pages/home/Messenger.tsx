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
import SideBar from "../../components/layout/SideBar";


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
                <SideBar />
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
                    {/** Add Grpchat Button */}
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
