
import React, { useEffect, useState } from 'react';
import { User } from '../types';

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch user with ID 1 as a mock profile
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        <div className="relative px-8 pb-8">
          <div className="absolute -top-16 left-8">
            <div className="p-1 bg-white rounded-2xl shadow-lg">
              <img 
                src={`https://ui-avatars.com/api/?name=${user.name}&background=6366f1&color=fff&size=128&bold=true`} 
                alt={user.name}
                className="w-32 h-32 rounded-xl"
              />
            </div>
          </div>
          <div className="pt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{user.name}</h1>
              <p className="text-slate-500 font-medium">@{user.username} • {user.company.name}</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-md">
                Edit Profile
              </button>
              <button className="p-2.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-100 transition-all">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-600">
                <i className="fa-solid fa-envelope w-6 text-slate-400"></i>
                <span className="text-sm truncate">{user.email}</span>
              </li>
              <li className="flex items-center text-slate-600">
                <i className="fa-solid fa-phone w-6 text-slate-400"></i>
                <span className="text-sm">{user.phone}</span>
              </li>
              <li className="flex items-center text-slate-600">
                <i className="fa-solid fa-globe w-6 text-slate-400"></i>
                <span className="text-sm text-indigo-600 hover:underline cursor-pointer">{user.website}</span>
              </li>
              <li className="flex items-start text-slate-600">
                <i className="fa-solid fa-location-dot w-6 mt-1 text-slate-400"></i>
                <span className="text-sm">
                  {user.address.street}, {user.address.suite}<br />
                  {user.address.city}, {user.address.zipcode}
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Account Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-slate-50 rounded-xl">
                <p className="text-lg font-bold text-slate-900">1.2k</p>
                <p className="text-[10px] text-slate-500 uppercase font-semibold">Posts</p>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-xl">
                <p className="text-lg font-bold text-slate-900">42k</p>
                <p className="text-[10px] text-slate-500 uppercase font-semibold">Followers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Professional Profile</h3>
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Company</label>
                <p className="text-slate-900 font-medium mt-1">{user.company.name}</p>
                <p className="text-slate-500 text-sm italic">"{user.company.catchPhrase}"</p>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Expertise</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {user.company.bs.split(' ').map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full border border-indigo-100">
                      {skill}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full border border-emerald-100">
                    Product Strategy
                  </span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-semibold rounded-full border border-amber-100">
                    Cloud Infrastructure
                  </span>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Biography</label>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Dedicated and results-oriented professional with extensive experience in {user.company.bs}. 
                  Specializing in driving growth through innovative solutions and strategic leadership. 
                  Currently based in {user.address.city}, helping companies navigate complex digital transformations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Upgrade to Pro Analytics</h3>
              <p className="text-indigo-100 text-sm mb-6 max-w-sm">Get access to advanced reporting tools, real-time tracking, and unlimited user accounts.</p>
              <button className="px-6 py-2.5 bg-white text-indigo-600 font-bold rounded-xl hover:bg-slate-100 transition-all">
                Learn More
              </button>
            </div>
            <i className="fa-solid fa-crown absolute -right-4 -bottom-4 text-8xl text-indigo-500 opacity-30 transform -rotate-12"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
