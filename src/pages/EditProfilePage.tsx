function ProfilePage() {
    return (
        <main className="flex h-screen items-center justify-center pt-5">
            <div className='bg-white rounded-3xl shadow-lg items-center justify-center p-3' // container
                style={{ width: '460px', height: '108%' }}>
                <h1 className='font-bold text-center text-xl p-5 text-blue-500'> Personalize Your Profile </h1>
                <div className='text-xs font-light pb-2 text-center'>
                    Confirm Your Grade:
                    <form className='items-center flex p-3'>
                        <input placeholder='e.g., 12th grade'
                            className='rounded-md grow border border-gray-300 p-2' />
                    </form>
                </div>
                <div className='text-xs font-light pb-2 text-center'>
                    Extracurricular Activities (ECs):
                    <form className='items-center flex p-3'>
                        <textarea className='rounded-md grow border border-gray-300 p-2 h-20'
                            style={{ resize: 'none' }} />
                    </form>
                </div>
                <div className='text-xs font-light pb-2 text-center'>
                    Awards:
                    <form className='items-center flex p-3'>
                        <textarea className='rounded-md grow border border-gray-300 p-2 h-20'
                            style={{ resize: 'none' }} />
                    </form>
                </div>
                <div className='text-xs font-light pb-2 text-center'>
                    Test Scores:
                    <form className='items-center flex p-3'>
                        <textarea className='rounded-md grow border border-gray-300 p-2 h-16 align-text-top'
                            style={{ resize: 'none' }} />
                    </form>
                </div>
                <div className='text-xs font-light pb-2 text-center'>
                    Essays:
                    <form className='items-center flex p-3'>
                        <textarea className='rounded-md grow border border-gray-300 p-2 h-20'
                            style={{ resize: 'none' }} />
                    </form>
                </div>
                <div className='text-xs font-light pb-4 text-center'>
                    Upload Profile Picture:
                    <form className='items-center flex p-3'>
                        <input type='file'
                            className='rounded-md grow border border-gray-300 p-2' />
                    </form>
                </div>
                <div className="flex justify-center w-full px-3">
                    <button
                        className="border bg-blue-500 text-white font-light rounded-md hover:bg-blue-600 w-full h-10 text-sm"
                        onClick={() => { }}>
                        Complete Profile
                    </button>
                </div>
            </div>
        </main>
    )
}

export default ProfilePage;
