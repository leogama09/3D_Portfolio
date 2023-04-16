import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    bootstrap,
    nextjs,
    php,
    postman,
    sass,
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
    pokemon,
    php_blog,
    weather,
    fighting,
    pokenext,
    secret_word,
    finder,
    crud,
    quiz,
    crypto,
    todo,
    drumkit,
    countdown,
    slideshow,
    iphone,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    // {
    //   id: "work",
    //   title: "Work",
    // },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.JS Developer",
      icon: mobile,
    },
    {
      title: "PHP Developer",
      icon: backend,
    },
    {
      title: "Certified SCRUM Professional",
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
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "nextjs",
      icon: nextjs,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "postman",
      icon: postman,
    },
    {
      name: "sass",
      icon: sass,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pokemon Game",
      description:
        "A JavaScript Pokémon Game with HTML Canvas.",
      tags: [
        {
          name: "html5",
          color: "orange-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
      image: pokemon,
      source_code_link: "https://github.com/leogama09/Pokemon-JavaScript-Game",
      deployed_link: "https://pokemon-java-script-game.vercel.app/"
    },
    {
      name: "PHP Blog",
      description:
      "A blog for developers built on PHP. Discover new PHP articles!",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
      ],
      image: php_blog,
      source_code_link: "https://github.com/leogama09/PHP_Blog",
      deployed_link: "http://phpbloggama.000webhostapp.com//"
    },
    {
      name: "Weather App",
      description:
      "Weather app built on HTML, CSS & JS. Enter your location and get the weather information!",
      tags: [
        {
          name: "html5",
          color: "orange-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/leogama09/weather-app",
      deployed_link: "https://leogama09.github.io/weather-app/"
    },
    {
      name: "Fighting Game",
      description:
      "A JavaScript Fighting Game with HTML Canvas. Fight against a friend!",
      tags: [
        {
          name: "html5",
          color: "orange-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
      image: fighting,
      source_code_link: "https://github.com/leogama09/JavaScript-Fighting-Game",
      deployed_link: "https://java-script-fighting-game.vercel.app/"
    },
    {
      name: "PokeNext",
      description:
      "PokeNext is an App built on Next.js to query Pokemons.",
      tags: [
        {
          name: "nextjs",
          color: "green-pink-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
      ],
      image: pokenext,
      source_code_link: "https://github.com/leogama09/PokeNext",
      deployed_link: "https://pokenext-leogama09.vercel.app/"
    },
    {
      name: "Secret Word",
      description:
      "A game that consists about guessing the word! Build on React.JS",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
      image: secret_word,
      source_code_link: "https://github.com/leogama09/secret-word-project",
      deployed_link: "https://leogama09.github.io/secret-word-project/"
    },
    {
      name: "GitHub API",
      description:
      "A GitHub API built on React.JS & Typescript. Search for any user on GitHub!",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
      ],
      image: finder,
      source_code_link: "https://github.com/leogama09/github-api",
      deployed_link: "https://github-api-leogama09.vercel.app/"
    },
    {
      name: "CRUD",
      description:
      "A CRUD built on vanilla JavaScript. Register, read, update or delete your clients information.",
      tags: [
        {
          name: "html5",
          color: "orange-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
      image: crud,
      source_code_link: "https://github.com/leogama09/crud-project",
      deployed_link: "https://leogama09.github.io/crud-project/"
    },
    {
      name: "Programming Quiz",
      description:
      "A programming quiz built on React.JS. Challenge yourself with many questions!",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
      image: quiz,
      source_code_link: "https://github.com/leogama09/React-quiz",
      deployed_link: "https://react-quiz-one-psi.vercel.app/"
    },
    {
      name: "Crypto Price App",
      description:
      "A crypto price app built on JavaScript. Check the latest price of your favorite cryptocoins!",
      tags: [
        {
          name: "html5",
          color: "orange-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/leogama09/crypto-price-app",
      deployed_link: "https://leogama09.github.io/crypto-price-app/"
    },
    {
      name: "To-do List",
      description:
      "A todo list built on React.JS & Typescript. Register your daily tasks!",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/leogama09/React-TS-Todo-List",
      deployed_link: "https://react-ts-todo-list-xi.vercel.app/"
    },
    {
      name: "Slideshow",
      description:
      "A slideshow with the best anime built on vanilla JavaScript.",
      tags: [
        {
          name: "html5",
          color: "orange-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
      image: slideshow,
      source_code_link: "https://github.com/leogama09/slideshow-project",
      deployed_link: "https://leogama09.github.io/slideshow-project/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };