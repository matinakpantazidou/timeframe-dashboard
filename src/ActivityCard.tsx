import React from 'react';
import { Activity } from './types';
import './ActivityCard.scss';

interface ActivityCardProps {
  activity: Activity;
  timeframe: 'daily' | 'weekly' | 'monthly';
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, timeframe }) => {
  const { title, timeframes } = activity;

  const getPreviousLabel = () => {
    switch (timeframe) {
      case 'daily':
        return 'Yesterday';
      case 'weekly':
        return 'Last Week';
      case 'monthly':
        return 'Last Month';
      default:
        return '';
    }
  };

  return (
    <div className="activity-card">
      <h2>{title}</h2>
      <p>{`Current: ${timeframes[timeframe].current}hrs`}</p>
      <p>{`${getPreviousLabel()} - ${timeframes[timeframe].previous}hrs`}</p>
    </div>
  );
};

export default ActivityCard;
