import HeroImage from "/assets/Fadlan_Hussein.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/coreldraw-x7.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    delay: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    delay: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    delay: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    delay: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    delay: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    delay: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    delay: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    delay: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Corel Draw X7",
    ket: "Design App",
    delay: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    delay: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    delay: "1100",
  },
];

import Project1 from "/assets/project/proyek1.png";
import Project2 from "/assets/project/proyek2.png";
import Project3 from "/assets/project/proyek3.png";
import Project4 from "/assets/project/proyek4.webp";
import Project5 from "/assets/project/proyek5.webp";
import Project6 from "/assets/project/proyek6.webp";

export const projectCategory = [
  {
    id: 1,
    name: "Web Development",
    slug: "web-dev",
  },
  {
    id: 2,
    name: "Data Analysis",
    slug: "data-analysis",
  },
  {
    id: 3,
    name: "HR Projects",
    slug: "hr-projects",
  },
];

export const listProject = [
  {
    id: 1,
    category: "web-dev",
    gambar: Project1,
    nama: "Digital Clock",
    desk: "Berikut ini adalah contoh proyek jam digital sederhana",
    tools: ["HTML", "CSS", "Javascript"],
    delay: "200",
    demourl: "https://digital-clock-five-blue.vercel.app/",
  },
  {
    id: 2,
    category: "web-dev",
    gambar: Project2,
    nama: "Shopping Shop",
    desk: "Berikut ini adalah contoh proyek toko online sederhana",
    tools: ["HTML", "CSS", "Javascript"],
    delay: "200",
    demourl: "https://shopping-shop-beryl.vercel.app/",
  },
  {
    id: 3,
    category: "web-dev",
    gambar: Project3,
    nama: "Calculator",
    desk: "Berikut ini adalah contoh proyek kalkulator sederhana",
    tools: ["HTML", "CSS", "Javascript"],
    delay: "200",
    demourl: "https://fadlan-calculator.vercel.app/",
  },
  {
    id: 1,
    category: "data-analysis",
    gambar: Project2,
    nama: "Company Profile",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"],
    delay: "300",
  },
  {
    id: 1,
    category: "hr-projects",
    gambar: Project3,
    nama: "Web Pernikahan 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    delay: "400",
  },
  {
    id: 4,
    gambar: Project4,
    nama: "Website Course",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    delay: "500",
  },
  {
    id: 5,
    gambar: Project5,
    nama: "Web Portfolio",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    delay: "600",
  },
  {
    id: 6,
    gambar: Project6,
    nama: "Company Profile 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    delay: "700",
  },
];
