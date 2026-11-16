export const profile = {
  name: 'Miraj Karim',
  designation: 'Frontend Developer | MERN Stack Learner',
  location: 'Mohammadpur, Dhaka, Bangladesh',
  email: 'mirajkarim003@gmail.com',
  phone: '01943146418',
  phoneIntl: '8801943146418',
  github: 'https://github.com/mirajkarim003-svg',
  linkedin: 'https://linkedin.com/in/miraj-karim',
  resumeView: 'https://drive.google.com/file/d/1p7ttHG5ASbK4uqflPEhaemnIC-4irmOZ/view?usp=sharing',
  resumeDownload: 'https://drive.google.com/uc?export=download&id=1p7ttHG5ASbK4uqflPEhaemnIC-4irmOZ',
}

export const skills = [
  { group: 'Frontend', items: [['HTML', 85], ['CSS', 80], ['JavaScript', 70], ['React.js', 70], ['Next.js', 60], ['Tailwind CSS', 80], ['Responsive Web Design', 80]] },
  { group: 'Backend', items: [['Node.js', 55], ['Express.js', 55], ['REST APIs', 60]] },
  { group: 'Database', items: [['MongoDB', 55]] },
  { group: 'Tools and Practice', items: [['Git', 65], ['GitHub', 70], ['Problem Solving', 65]] },
]

export const education = [
  { title: 'Business Administration and Management (General)', place: 'Mohammadpur Government College', period: '2026 - Present', note: 'Studying at college while learning web development on the side.' },
  { title: 'Secondary School Certificate (SSC), Science', place: 'Quaderia Taiyebia Kamil Madrasah', period: 'Passed 2026', note: 'GPA 4.50' },
]

export const experience = [
  { title: 'Web Development Bootcamp', place: 'Programming Hero', period: 'Ongoing, 7-month program', note: 'Learning HTML, CSS, JavaScript, React, Node.js, Express and MongoDB through weekly assignments and hands-on projects.' },
  { title: 'Self-driven Project Building', place: 'Personal and course projects', period: '2026', note: 'Designed, built and deployed live projects, from React front ends to full-stack apps with authentication and a database.' },
]

export const projects = [
  {
    slug: 'studiospace', name: 'StudioSpace', image: '/images/studiospace.png',
    short: 'A marketplace to list and book creative studios for photo, film, podcast and music work.',
    description: 'StudioSpace is a peer-to-peer marketplace where people can find and book creative studios (photo, film, podcast, music, workshop). Users can register, log in, browse and filter studios, and book a space. Hosts can list their own studio with hourly rate, security deposit, capacity, amenities and an overview.',
    stack: ['Next.js', 'Express.js', 'MongoDB', 'Better Auth', 'JWT'],
    live: 'https://studiospace-client-plum.vercel.app/', github: 'https://github.com/mirajkarim003-svg/studiospace-client',
    challenges: ['The Express server runs on a free hosting tier that sleeps when idle, so the first request could fail with a 502 until the server woke up.', 'Connecting authentication between the Next.js client and the separate Express server.', 'Building the filter and booking flow so users get the right studios and the right price.', 'Deploying the client and the server separately and making them work together.'],
    future: ['Online payments for bookings and deposits.', 'A full host dashboard to manage listings and bookings.', 'Reviews and ratings for studios.', 'An availability calendar to prevent double bookings.', 'Image upload instead of pasting image URLs.'],
  },
  {
    slug: 'bazardor', name: 'BazarDor (বাজার দর)', image: '/images/bazardor.png',
    short: 'A Bengali market price tracker to check everyday product prices at a glance.',
    description: 'BazarDor is a Bengali market price tracker that helps users check everyday product prices and compare price changes across different markets. It has a scrolling price ticker, daily price rises and falls, category browsing with sorting, market-wise prices on each product, sign in and sign up, and profile management.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Better Auth', 'MongoDB', 'react-hot-toast'],
    live: 'https://bazardor-miraj.vercel.app/', github: 'https://github.com/mirajkarim003-svg/Bazardor',
    challenges: ['Showing Bengali text, numbers and price changes clearly in a dense layout.', 'Structuring product data so each product can show prices from different markets.', 'Protecting pages and managing profiles with Better Auth.', 'Keeping the scrolling ticker and loading states smooth, with skeletons and a custom 404 page.'],
    future: ['Automatic daily price updates from a real data source.', 'Price history charts for each product.', 'Price alerts for products a user follows.', 'More markets and districts.'],
  },
  {
    slug: 'dev-stack-builder', name: 'Dev Stack Builder', image: '/images/devstack.png',
    short: 'A React website to explore technologies and build your own tech stack.',
    description: 'Dev Stack Builder is a simple React website where users can explore different technologies with their category, rating, difficulty and description. Users can add technologies to their own stack and remove them when needed. The site is responsive and shows toast messages on every add or remove.',
    stack: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'React-Toastify', 'JSON', 'Vite'],
    live: 'https://dev-stack-bay.vercel.app/', github: 'https://github.com/mirajkarim003-svg/dev-stack',
    challenges: ['Loading the technology data from a JSON file with useEffect and handling the loading state.', 'Keeping the selected stack in state, adding and removing items without duplicates.', 'Showing the right message when the stack is empty (conditional rendering).', 'Making the layout and the mobile menu work on all screen sizes.'],
    future: ['Save the stack so it stays after a page refresh.', 'Search and filters for technologies.', 'Compare technologies side by side.', 'Share a built stack with a link.'],
  },
]
