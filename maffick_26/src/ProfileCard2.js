import React from 'react';
import { Mail, MapPin, Briefcase } from 'lucide-react';
import './ProfileCard2.css';

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img 
          src={user.avatar} 
          alt={user.name}
          className="profile-avatar"
        />
      </div>
      <div className="profile-body">
        <h3 className="profile-name">{user.name}</h3>
        <p className="profile-role">{user.role}</p>
        
        <div className="profile-info">
          <div className="info-item">
            <Mail size={14} />
            <span>{user.email}</span>
          </div>
          <div className="info-item">
            <MapPin size={14} />
            <span>{user.location}</span>
          </div>
          <div className="info-item">
            <Briefcase size={14} />
            <span>{user.company}</span>
          </div>
        </div>
        
        <div className="profile-stats">
          <div className="stat">
            <div className="stat-value">{user.followers}</div>
            <div className="stat-label">Followers</div>
          </div>
          <div className="stat">
            <div className="stat-value">{user.following}</div>
            <div className="stat-label">Following</div>
          </div>
          <div className="stat">
            <div className="stat-value">{user.posts}</div>
            <div className="stat-label">Posts</div>
          </div>
        </div>
        
        <button className="profile-button">View Profile</button>
      </div>
    </div>
  );
};

export default function App() {
  const user = {
    name: 'Sarah Johnson',
    role: 'Senior Product Designer',
    email: 'sarah.j@example.com',
    location: 'San Francisco, CA',
    company: 'Design Studio',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    followers: '2.5K',
    following: '892',
    posts: '156'
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <ProfileCard user={user} />
    </div>
  );
}