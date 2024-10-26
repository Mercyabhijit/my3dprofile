import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Digital Artist",
      icon: web,
    },
    {
      title: "Designer",
      icon: mobile,
    },
    {
      title: "3d Modeller",
      icon: backend,
    },
    {
      title: "Illustrator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Student",
      School_name: "The Frank Anthony Public School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "till 5th Grade",
      points: [
        "House Captain",
        "Won in sports",
        "Took part in activities like group singing, and dancing",
      ],
    },
    {
      title: "Student",
      company_name: "The Frank Anthony Public School",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "till 10th Grade",
      points: [
        "Part of Cultural Club, Cooking Club, Interactive Club.",
        "Took part in events like personality and treasure hunt",
      ],
    },
    {
      title: "Student",
      company_name: "The Frank Anthony Public School",
      icon: shopify,
      iconBg: "#383E56",
      date: "till 12th Grade",
      points: [
        "Event management for fest",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Loved the poster that was made.",
      name: "Client",
      designation: "Anonymouse",
      company: "Private",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Love the creativity and color combinations",
      name: "Client",
      designation: "Anonymouse",
      company: "Private",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D model",
      description:
        "3D platform where i made a interior of a bedroom.",
      tags: [
        {
          name: "3D",
          color: "blue-text-gradient",
        },
        {
          name: "Interior",
          color: "green-text-gradient",
        },
        {
          name: "Design model",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Game",
      description:
        "Fun Flappy bird game.",
      tags: [
        {
          name: "Game",
          color: "blue-text-gradient",
        },
        {
          name: "Bird",
          color: "green-text-gradient",
        },
        {
          name: "Future",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Mercyabhijit/flappybird-game.git",
    },
    {
      name: "ARVR",
      description:
        "A quiz made with AR applications",
      tags: [
        {
          name: "AR",
          color: "blue-text-gradient",
        },
        {
          name: "Future",
          color: "green-text-gradient",
        },
        {
          name: "Game",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Mercyabhijit/animal-quiz.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };