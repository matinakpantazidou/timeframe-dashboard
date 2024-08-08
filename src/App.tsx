import React, { useState } from 'react';
import './App.scss';
import { timeframes } from './data';
import { Activity } from './types';
import ActivityCard from './ActivityCard';

const App: React.FC = () => {
  const [activeTimeframe, setActiveTimeframe] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  return (
    <div className="dashboard">
      <div className="profile-card">
        <h1>User's Profile</h1>
        {/* Add more profile details here */}
        <div className="timeframe-buttons">
          <button onClick={() => setActiveTimeframe('daily')}>Daily</button>
          <button onClick={() => setActiveTimeframe('weekly')}>Weekly</button>
          <button onClick={() => setActiveTimeframe('monthly')}>Monthly</button>
        </div>
      </div>
      <div className="activity-cards">
        {timeframes.map((activity: Activity) => (
          <ActivityCard key={activity.title} activity={activity} timeframe={activeTimeframe} />
        ))}
      </div>
    </div>
  );
};

export default App;
