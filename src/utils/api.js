// This file would contain actual API calls in production
// Currently uses mocked data for development

// Mock service to fetch reviews from Google Places API
export const fetchReviews = async () => {
  // In production, this would call a serverless function that fetches
  // data from Google Places API and returns results
  // Example:
  // const response = await fetch('/api/reviews');
  // return response.json();
  
  // For now, return mock data from our local import
  const { reviews } = await import('../data/reviews');
  return reviews;
};

// Mock service to fetch photos from Google Places API
export const fetchPhotos = async () => {
  // In production, this would call a serverless function that fetches
  // data from Google Places API and returns results
  // Example:
  // const response = await fetch('/api/photos');
  // return response.json();
  
  // For now, return mock data from our local import
  const { galleryImages } = await import('../data/gallery');
  return galleryImages;
};

// Mock service to fetch business information from Google Places API
export const fetchBusinessInfo = async () => {
  // In production, this would call a serverless function that fetches
  // data from Google Places API and returns results
  
  // Mocked business data
  return {
    name: "Vlad the Barber",
    formatted_address: "7217 Van Nuys Blvd, Van Nuys, CA 91405",
    formatted_phone_number: "(310) 123-4567",
    website: "https://vladthebarber.com",
    rating: 4.8,
    user_ratings_total: 125,
    opening_hours: {
      weekday_text: [
        "Monday: 9:00 AM - 7:00 PM",
        "Tuesday: 9:00 AM - 7:00 PM",
        "Wednesday: 9:00 AM - 7:00 PM",
        "Thursday: 9:00 AM - 7:00 PM",
        "Friday: 9:00 AM - 7:00 PM",
        "Saturday: 10:00 AM - 5:00 PM",
        "Sunday: Closed"
      ]
    }
  };
};

// FEATURE_INSTAGRAM
// This would be implemented in the future when Instagram integration is needed
export const fetchInstagramFeed = async () => {
  // This is a placeholder for future Instagram Basic Display API integration
  // Would fetch recent media from a connected Instagram account
  return null;
};

// Helper to format business hours from Google Places API format
export const formatBusinessHours = (weekdayText) => {
  if (!weekdayText) return [];
  
  return weekdayText.map(dayHours => {
    const [day, hours] = dayHours.split(': ');
    return { day, hours };
  });
}; 