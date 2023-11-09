import React from 'react';
import { FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";

const UserProfileCard = ({ user }) => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div className="max-w-xl w-full rounded-lg shadow-xl bg-white text-center p-4 sm:p-8">
        <div className="avatar flex justify-center">
          <div className="w-32 h-32 rounded-full border-4 border-gray-300 overflow-hidden">
            <img src={user.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-4">
          <h1 className="font-bold text-xl sm:text-2xl mb-2">{user.name}</h1>
          <p className="text-gray-700 text-sm sm:text-base mb-4">{user.bio}</p>
        </div>
        <div className="flex justify-center space-x-4">
          {user.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-gray-600 hover:text-gray-800 text-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const user = {
    name: 'いうと',
    bio: '高校1年生・16歳',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1317064902058545152/4Ek5UdxK_400x400.jpg',
    socialLinks: [
    { name: 'twitter', icon: <FaXTwitter />, url: 'https://twitter.com/yourusername' },
      { name: 'instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/yourusername' },
      { name: 'github', icon: <FaGithub />, url: 'https://github.com/yourusername' },
      // LinkedInとメールを削除しました
    ],
  };

export default function App() {
  return <UserProfileCard user={user} />;
}
