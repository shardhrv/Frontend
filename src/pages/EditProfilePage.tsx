import BackgroundLayout from '../components/BackgroundLayout';

function ProfilePage() {
    return (
        <BackgroundLayout>
            <div className="absolute w-[922px] h-[610px] top-[80px] bg-[#ffffff] rounded-[32px] shadow-[0px_4px_4px_#00000040] justify-center items-center">
                <h1 className='text-center text-[#3a3335] text-[34px] font-bold pt-[36px]'> Profile Setup </h1>
                <h2 className='text-center text-[#8f8e8e] text-sm font-normal leading-[21px] pt-[5px] pb-[40px]'> Enter your details to proceed further</h2>
                <div className="flex space-x-[64px]">
                    <div className='space-y-[22px] pl-[81px]'>
                        <div className="relative">
                            <label className="text-[#8f8e8e] text-xs absolute top-2 left-3">
                                Date of Birth *
                            </label>
                            <input
                                type='string'
                                // type="email"
                                // value={}
                                // onChange={(e) => setEmail(e.target.value)}
                                className="w-[420px] h-[60px] pt-5 pl-3 bg-white rounded-lg border border-[#a9a9a9] text-black text-sm font-semibold"
                                placeholder="MM-DD-YYYY"
                            />
                            {/* Icon */}
                        </div>
                        <div className="relative">
                            <label className="text-[#8f8e8e] text-xs absolute top-2 left-3">
                                Country
                            </label>
                            <input
                                type='string'
                                // type="email"
                                // value={}
                                // onChange={(e) => setEmail(e.target.value)}
                                className="w-[420px] h-[60px] pt-5 pl-3 pr-10 bg-white rounded-lg border border-[#a9a9a9] text-black text-sm font-semibold"
                                placeholder="Conutry"
                            />
                            {/* Icon */}
                        </div>
                        <div className='flex space-x-[24px]'>
                            <div className='relative'>
                                <label className="text-[#8f8e8e] text-xs absolute top-2 left-3">
                                    Educational Level *
                                </label>
                                <select
                                    // type="email"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="w-[198px] h-[60px] pt-5 pl-2 pr-5 bg-white rounded-lg border border-[#a9a9a9] text-[#000000] text-sm font-semibold"
                                >
                                    <option value="" disabled selected>
                                        Education Level
                                    </option>
                                    <option value="uni">Undergraduate</option>
                                    <option value="highschool">High School</option>
                                    <option value="middleschool">Middle School</option>
                                </select>
                            </div>

                            <div className='relative'>
                                <label className="text-[#8f8e8e] text-xs absolute top-2 left-[11px]">
                                    Academic Year *
                                </label>
                                <input
                                    type='string'
                                    // type="email"
                                    // value={}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="w-[198px] h-[60px] pt-5 pl-3 pr-10 bg-white rounded-lg border border-[#a9a9a9] text-black text-sm font-semibold"
                                    placeholder="Year"
                                />
                            </div>
                            {/* Icon */}
                        </div>
                        <div className="relative">
                            <label className="text-[#8f8e8e] text-xs absolute top-2 left-3">
                                Contact Details *
                            </label>
                            <input
                                type='string'
                                // type="email"
                                // value={}
                                // onChange={(e) => setEmail(e.target.value)}
                                className="w-[420px] h-[60px] pt-5 pl-3 pr-10 bg-white rounded-lg border border-[#a9a9a9] text-black text-sm font-semibold"
                                placeholder="Phone number"
                            />
                            {/* Icon */}
                        </div>
                    </div>

                    <div className=''>
                        <label className="flex items-center gap-3 w-[210px] rounded-md hover:bg-slate-50 grow mb-[11px]">
                            <span className='text-[#8f8e8e] text-xs font-normal underline leading-[18px]'>
                                * Privacy policy and preferences
                            </span>
                            <input
                                type="checkbox"
                                onChange={() => { }}
                                className="checked:accent-[#4a9b74] checked:border-transparent scale-125"
                            />
                        </label>
                        <div className="w-[263px]">
                            <span className="text-[#8f8e8e] text-xs font-normal leading-[18px]">
                                StuCo will process and share your information in accordance with our
                            </span>
                            <span className="text-[#8f8e8e] text-xs font-normal underline leading-[18px]">
                                &nbsp;privacy policy
                            </span>
                            <span className="text-[#8f8e8e] text-xs font-normal leading-[18px]">
                                . Refer to our&nbsp;
                            </span>
                            <span className="text-[#8f8e8e] text-xs font-normal underline leading-[18px]">
                                privacy policy
                            </span>
                            <span className="text-[#8f8e8e] text-xs font-normal leading-[18px]">
                                &nbsp;for more information.
                            </span>
                        </div>

                        <label className="flex items-center gap-3 w-[109px] rounded-md hover:bg-slate-50 grow mb-[11px] mt-[40px]">
                            <span className='text-[#8f8e8e] text-xs font-normal underline leading-[18px]'>
                                * Terms of use
                            </span>
                            <input
                                type="checkbox"
                                onChange={() => { }}
                                className="checked:accent-[#4a9b74] checked:border-transparent scale-125"
                            />
                        </label>
                        <div className="w-[263px]">
                            <span className="text-[#8f8e8e] text-xs font-normal leading-[18px]">
                                StuCo will process and share your information in accordance with our
                            </span>
                            <span className="text-[#8f8e8e] text-xs font-normal underline leading-[18px]">
                                &nbsp;privacy policy
                            </span>
                            <span className="text-[#8f8e8e] text-xs font-normal leading-[18px]">
                                . Refer to our&nbsp;
                            </span>
                            <span className="text-[#8f8e8e] text-xs font-normal underline leading-[18px]">
                                privacy policy
                            </span>
                            <span className="text-[#8f8e8e] text-xs font-normal leading-[18px]">
                                &nbsp;for more information.
                            </span>
                        </div>

                        <label className="flex items-center gap-3 w-[150px] rounded-md hover:bg-slate-50 grow mb-[11px] mt-[40px]">
                            <span className='text-[#8f8e8e] text-xs font-normal underline leading-[18px]'>
                                Receive notifications?
                            </span>
                            <input
                                type="checkbox"
                                onChange={() => { }}
                                className="checked:accent-[#4a9b74] checked:border-transparent scale-125"
                            />
                        </label>
                    </div>

                </div>
                <div className='absolute left-[251px] pt-[35px]'>
                    <button
                        className="w-[420px] h-[50px] bg-[#4a9b74] rounded-[10px] text-white text-sm font-bold mt-5 hover:bg-[#3a7f5e] hover:shadow-lg active:scale-95 transition-all duration-200 "
                        onClick={() => { }}
                    >
                        Continue
                    </button>
                </div>


            </div>
        </BackgroundLayout>
    )
}


export default ProfilePage;
