import React from 'react';
import MyAppBar from '../../components/layout/AppBar';
import ProfileInformation from '../../components/cards/ProfileInfoCard';

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page min-h-screen bg-gray-100">
      {/* AppBar fixed on top */}
      <MyAppBar />
      {/* Add top margin to avoid content being under AppBar */}
      <div className="pt-[64px]">
        <ProfileInformation />
      </div>
    </div>
  );
};

export default ProfilePage;
