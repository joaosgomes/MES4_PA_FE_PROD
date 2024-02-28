import React, { useEffect } from 'react';
import { message } from 'antd';
import { Navigator_Online } from '../../utils/Navigator_OnLine';

const OnlineStatusIndicator = () => {
  const handleNetworkChange = async () => {
    const isOnline = await Navigator_Online();
    if (isOnline === true) {
      // Online
      message.info('Online Status');
    } else if (isOnline === false) {
      // Offline
      message.error('Offline Status');
    }
  };

 

  useEffect(() => {
    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);

    return () => {
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
    };
  }, []);

  return null; 
};

export default OnlineStatusIndicator;
