'use client';

import { useEffect } from 'react';
import { trackPageView } from '@/lib/mixpanel';

interface MixpanelProviderProps {
  children: React.ReactNode;
}

const MixpanelProvider = ({ children }: MixpanelProviderProps) => {
  useEffect(() => {
    // Track initial page view
    trackPageView('Home Page', {
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
    });

    // Track time on page
    const startTime = Date.now();
    
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackPageView('Home Page', {
        time_spent: timeSpent,
        exit_intent: true,
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return <>{children}</>;
};

export default MixpanelProvider;
