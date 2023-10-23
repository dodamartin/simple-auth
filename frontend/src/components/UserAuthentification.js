import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import RegistrationForm from './RegistrationForm';
import LoginFrom from './LoginFrom';

const UserAuthentication = () => {
  const [activeTab, setActiveTab] = useState('registration');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='container'>
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

      {activeTab === 'registration' && <RegistrationForm />}
      {activeTab === 'login' && <LoginFrom />}
    </div>
  );
};

export default UserAuthentication;
