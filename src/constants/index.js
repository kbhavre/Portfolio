import img1 from '../assets/ninjaNotes.png';
import img2 from '../assets/medicare.png';
import img3 from '../assets/nexcent.png';
import img4 from '../assets/DiaAlert.png';

export const lgNavLinks = [
    {   id: 1,
        title: "Work",
        href: "/work"
    },
    {   id: 2,
        title: "Skills",
        href: "/skills"
    },
    {   id: 3,
        title: "About",
        href: "/about"
    },
    {   id: 4,
        title: "Contact",
        href: "/contact"
    },
]

export const smNavLinks = [
    {
        id: 1,
        title: "Home",
        href: "/"
    },
    {   id: 2,
        title: "Work",
        href: "/work"
    },
    {   id: 3,
        title: "Skills",
        href: "/skills"
    },
    {   id: 4,
        title: "About",
        href: "/about"
    },
    {   id: 5,
        title: "Contact",
        href: "/contact"
    },
]

export const projects = [
    {
        id: 1,
        title: "Ninja Notes",
        img: img1,
        tech: ["React", "Aceternity", "TypeScript", "Node.js", "MongoDB"],
        para: "Ninja Notes is a platform designed for university students, offering handwritten notes, previous year papers, and technical blogs. It allows students to save their notes for future reference, enhancing their learning experience and helping them perform better academically.",
        linkref: "https://ninjanotesorg.vercel.app/"
    },
    {
        id: 2,
        title: "Medicare",
        img: img2,
        tech: ["React", "Javascript", "Stripe.js", "Node.js", "MongoDB"],
        para: "Medicare is a healthcare platform built during a hackathon, focusing on streamlining the doctor appointment process. It allows users to easily book appointments with doctors, improving access to healthcare services and ensuring a smooth scheduling experience.",
        linkref: "https://doctor-appointment-booking-silk.vercel.app/" 
    },
    {
        id: 3,
        title: "Nexcent",
        img: img3,
        tech: ["React", "Tailwind", "Stripe.js", "Node.js", "MongoDB"],
        para: "DiaAlert is a web application developed during my machine learning internship. It predicts whether a user is diabetic based on inputs like BMI, age, and glucose level, providing accurate results. This project demonstrates practical application of ML in healthcare.",
        linkref: "https://nexcent-sigma-eight.vercel.app/",
    },
    {
        id: 4,
        title: "DiaAlert",
        img: img4,
        tech: ["Python", "Numpy", "Pandas", "Matplotlib", "Streaml"],
        para: "DiaAlert is a web application developed during my machine learning internship. It predicts whether a user is diabetic based on inputs like BMI, age, and glucose level, providing accurate results. This project demonstrates practical application of ML in healthcare.",
        linkref: "https://dia-alert.streamlit.app/",
    },
    
]

