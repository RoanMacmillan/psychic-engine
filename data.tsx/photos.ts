// Define the type for each photo object in the array
type PhotoItem = {
    title: string;
    description: string;
    url: string;
  };
  
  // Create an array of objects adhering to the PhotoItem type
  const photoGallery: PhotoItem[] = [
    {
      title: 'Sunset Beach',
      description: 'A beautiful sunset over the ocean.',
      url: 'https://images.unsplash.com/photo-1654797554078-83d21229b006?q=80&w=2005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
   
   

    {
      title: 'Ocean Waves',
      description: 'Powerful waves crashing on the shore.',
      url: 'https://images.unsplash.com/photo-1610991135724-89a7b9fba1fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxlaXRofGVufDB8fDB8fHww',
    },
    {
      title: 'City Lights',
      description: 'Skyline of a city illuminated at night.',
      url: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1pbmltYWx8ZW58MHx8MHx8fDI%3D',
    },
    {
      title: 'Forest Path',
      description: 'A serene path through a dense forest.',
      url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcmVzdHxlbnwwfHwwfHx8Mg%3D%3D',
    },

    {
      title: 'Mountain View',
      description: 'Snow-covered mountains under a clear sky.',
      url: 'https://images.unsplash.com/photo-1496865534669-25ec2a3a0fd3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8Mg%3D%3D',
    },

    {
      title: 'Desert Dunes',
      description: 'Rolling sand dunes under the bright sun.',
      url: 'https://images.unsplash.com/photo-1432457990754-c8b5f21448de?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZvb2R8ZW58MHx8MHx8fDI%3D',
    },
    
    
    {
      title: 'Autumn Leaves',
      description: 'Colorful autumn leaves on the ground.',
      url: 'https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNlYXxlbnwwfHwwfHx8Mg%3D%3D',
    },
    {
      title: 'City Park',
      description: 'A peaceful park in the middle of a bustling city.',
      url: 'https://images.unsplash.com/photo-1516900557549-41557d405adf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0eXxlbnwwfHwwfHx8Mg%3D%3D',
    },
    {
      title: 'Starry Night',
      description: 'A clear night sky filled with stars.',
      url: 'https://images.unsplash.com/photo-1721786642795-6041d379208f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
    },
    {
      title: 'Waterfall',
      description: 'A majestic waterfall in a lush landscape.',
      url: 'https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D',
    },
  ];
  
  export default photoGallery;
  