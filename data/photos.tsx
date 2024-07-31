// Define the type for each photo object in the array, now including an id
export type PhotoItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  url: string;
  className: string;
};

// Create an array of objects adhering to the PhotoItem type, now including className
const photoGallery: PhotoItem[] = [
  {
    id: 1,
    title: 'Algarve Beach',
    description: 'A beautiful beach in Algarve.',
    category: 'travel',
    url: 'https://images.unsplash.com/photo-1654797554078-83d21229b006?q=80&w=2005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    className: 'hidden', // Custom class for styling
  },
  {
    id: 2,
    title: 'Dean Village',
    description: 'Historic area in Edinburgh.',
    category: 'architecture',
    url: 'https://images.unsplash.com/photo-1610991135724-89a7b9fba1fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxlaXRofGVufDB8fDB8fHww',
    className: '', // Custom class for styling
  },
  {
    id: 3,
    title: 'Minimal',
    description: 'Simple and modern interior.',
    category: 'interior',
    url: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1pbmltYWx8ZW58MHx8MHx8fDI%3D',
    className: '', // Custom class for styling
  },
  {
    id: 4,
    title: 'Forest Path',
    description: 'Path through a forest.',
    category: 'nature',
    url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcmVzdHxlbnwwfHwwfHx8Mg%3D%3D',
    className: '', // Custom class for styling
  },
  {
    id: 5,
    title: 'House',
    description: 'Snow-covered mountain house.',
    category: 'architecture',
    url: 'https://images.unsplash.com/photo-1496865534669-25ec2a3a0fd3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8Mg%3D%3D',
    className: '', // Custom class for styling
  },
  {
    id: 6,
    title: 'Lemons',
    description: 'Fresh lemons on a table.',
    category: 'food',
    url: 'https://images.unsplash.com/photo-1432457990754-c8b5f21448de?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZvb2R8ZW58MHx8MHx8fDI%3D',
    className: '', // Custom class for styling
  },
  {
    id: 7,
    title: 'Ocean',
    description: 'Calm ocean waves.',
    category: 'nature',
    url: 'https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNlYXxlbnwwfHwwfHx8Mg%3D%3D',
    className: '', // Custom class for styling
  },
  {
    id: 8,
    title: 'City Tram',
    description: 'Tram in an urban area.',
    category: 'urban',
    url: 'https://images.unsplash.com/photo-1516900557549-41557d405adf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0eXxlbnwwfHwwfHx8Mg%3D%3D',
    className: '', // Custom class for styling
  },
  {
    id: 9,
    title: 'Forest',
    description: 'Starry sky over a forest.',
    category: 'nature',
    url: 'https://images.unsplash.com/photo-1721786642795-6041d379208f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
    className: '', // Custom class for styling
  },
  {
    id: 10,
    title: 'Road',
    description: 'Mountain road scenery.',
    category: 'travel',
    url: 'https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D',
    className: '', // Custom class for styling
  },
];

export default photoGallery;
