import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = 'f90a2073229cd4ad4dc452a58842b795';

// Initialize Mixpanel
if (typeof window !== 'undefined') {
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: false,
    track_pageview: true,
    persistence: 'localStorage',
  });
}

// Event tracking functions
export const trackEvent = (eventName: string, properties?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined') {
    mixpanel.track(eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      page_title: document.title,
    });
  }
};

// User identification
export const identifyUser = (userId: string, userProperties?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined') {
    mixpanel.identify(userId);
    if (userProperties) {
      mixpanel.people.set(userProperties);
    }
  }
};

// Set user properties
export const setUserProperties = (properties: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined') {
    mixpanel.people.set(properties);
  }
};

// Track page views
export const trackPageView = (pageName: string, properties?: Record<string, string | number | boolean>) => {
  trackEvent('Page View', {
    page_name: pageName,
    ...properties,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, buttonType?: string, properties?: Record<string, string | number | boolean>) => {
  trackEvent('Button Click', {
    button_name: buttonName,
    ...(buttonType && { button_type: buttonType }),
    ...properties,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, properties?: Record<string, string | number | boolean>) => {
  trackEvent('Form Submission', {
    form_name: formName,
    ...properties,
  });
};

// Track navigation
export const trackNavigation = (destination: string, navType?: string, properties?: Record<string, string | number | boolean>) => {
  trackEvent('Navigation', {
    destination,
    ...(navType && { nav_type: navType }),
    ...properties,
  });
};

// Track CTA interactions
export const trackCTA = (ctaName: string, ctaType: string, properties?: Record<string, string | number | boolean>) => {
  trackEvent('CTA Interaction', {
    cta_name: ctaName,
    cta_type: ctaType,
    ...properties,
  });
};

// Track section views
export const trackSectionView = (sectionName: string, properties?: Record<string, string | number | boolean>) => {
  trackEvent('Section View', {
    section_name: sectionName,
    ...properties,
  });
};

// Track time on page
export const trackTimeOnPage = (timeSpent: number, pageName: string) => {
  trackEvent('Time on Page', {
    time_spent: timeSpent,
    page_name: pageName,
  });
};

export default mixpanel;
