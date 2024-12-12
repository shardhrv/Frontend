import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type UserType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  dateOfBirth?: string;
  country?: string;
  educationLevel?: string;
  academicYear?: string;
  major?: string;
  gpa?: string;
  profileImage?: string; 
  role?: string;
};

const ProfileInformation: React.FC = () => {
  const [user, setUser] = useState<UserType>({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Fetch user data from backend on mount
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleImageClick = () => {
    // Trigger the hidden file input when the image is clicked
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Convert the file to a Base64 string
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setUser((prevUser) => ({ ...prevUser, profileImage: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const updatedUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      dob: user.dateOfBirth, 
      country: user.country,
      educationLevel: user.educationLevel,
      academicYear: user.academicYear,
      major: user.major,
      gpa: user.gpa,
      profileImage: user.profileImage, // Sending this to backend
    };

    try {
      await axios.post('/api/users/update', updatedUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Profile updated successfully');
      navigate('/home');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200 mt-[64px]">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">Profile Information</h1>
        {user.role && (
          <span className="inline-block bg-[#7EB698] text-white text-sm px-3 py-1 rounded-full">
            {user.role}
          </span>
        )}
      </div>

      <div className="flex items-center mb-6">
        <img
          src={user.profileImage || 'src/assets/DemoProfileImage.png'}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border border-gray-200 cursor-pointer"
          onClick={handleImageClick} // Clicking image triggers file selection
        />
        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />

        <div className="ml-6 flex space-x-4">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 w-40 focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
            placeholder="First Name"
            value={user.firstName || ''}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 w-40 focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
            placeholder="Last Name"
            value={user.lastName || ''}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            type="email"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
            placeholder="Email Address"
            value={user.email || ''}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <input
            type="password"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
            placeholder="Password"
            onChange={() => {
              // Handle password changes as needed
            }}
          />

          <div className="flex space-x-4">
            <div className="relative w-1/2">
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
                value={user.dateOfBirth || ''}
                onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })}
              />
            </div>

            <select
              className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
              value={user.country || ''}
              onChange={(e) => setUser({ ...user, country: e.target.value })}
            >
              <option value="">Country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="flex space-x-4">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
              value={user.educationLevel || ''}
              onChange={(e) => setUser({ ...user, educationLevel: e.target.value })}
            >
              <option value="">Education Level</option>
              <option value="Middle School">Middle School</option>
              <option value="High School">High School</option>
              <option value="University">University</option>
            </select>

            <select
              className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
              value={user.academicYear || ''}
              onChange={(e) => setUser({ ...user, academicYear: e.target.value })}
            >
              <option value="">Academic Year</option>
              {Array.from({ length: 13 }, (_, i) => i + 1).map((year) => (
                <option key={year} value={year.toString()}>Year {year}</option>
              ))}
            </select>
          </div>

          <div className="flex space-x-4">
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
              placeholder="Major"
              value={user.major || ''}
              onChange={(e) => setUser({ ...user, major: e.target.value })}
            />

            <div className="relative w-1/2">
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
                placeholder="GPA"
                value={user.gpa || ''}
                onChange={(e) => setUser({ ...user, gpa: e.target.value })}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 bg-[#7EB698] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#6aa482]"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileInformation;
