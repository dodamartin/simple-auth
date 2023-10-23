import React from 'react';

const TabNavigation = ({ activeTab, onTabChange }) => {
  return (
    <div className="tab-navigation">
      <button
        className={`tab-button ${activeTab === 'registration' ? 'active' : ''}`}
        onClick={() => onTabChange('registration')}
      >
        Registration
      </button>
      <button
        className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
        onClick={() => onTabChange('login')}
      >
        Login
      </button>
    </div>
  );
};

export default TabNavigation;
