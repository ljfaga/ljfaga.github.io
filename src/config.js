// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "ljfaga";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Olá! Eu sou o Lucas James Faga, educador e doutor em Física.\nAqui você vai encontrar um pouco da minha jornada no mundo da educação e na pesquisa científica: vídeoaulas de cosmologia, planos de aula de Física de (linhas construtivista e maker), artigos e dissetações publicadas, referências bibliográficas e demais trabalhos que realizei!\nPara quaisquer dúvidas e sugestões, fique a vontade para entrar em contato.\nUm abraço!";
  
export const moreInfo2 =
  "Olá! Eu sou o Lucas James Faga, educador e doutor em Física.\nAqui você vai encontrar um pouco da minha jornada no mundo da educação e na pesquisa científica: vídeoaulas de cosmologia, planos de aula de Física de (linhas construtivista e maker), artigos e dissetações publicadas, referências bibliográficas e demais trabalhos que realizei!\nPara quaisquer dúvidas e sugestões, fique a vontade para entrar em contato.\nUm abraço!";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="solar:square-academic-cap-bold" className="display-4" />,
    name: "Doutor, mestre, bacharel e licenciado em Física",
  },
  {
    id: 2,
    skill: <Icon icon="streamline-ultimate:saving-bank-international" className="display-4" />,
    name: "Pesquisa de reconhecimento internacional",
  },
  {
    id: 3,
    skill: <Icon icon="game-icons:star-swirl" className="display-4" />,
    name: "Astrofísico (cosmologia)",
  },
  {
    id: 4,
    skill: <Icon icon="iconoir:book" className="display-4" />,
    name: "Produção de materiais didáticos",
  },
  {
    id: 5,
    skill: <Icon icon="clarity:blocks-group-line" className="display-4" />,
    name: "BNCC",
  },
  {
    id: 6,
    skill: <Icon icon="tdesign:user-talk-1" className="display-4" />,
    name: "Divulgador científico",
  },
  {
    id: 9,
    skill: <Icon icon="icomoon-free:make-group" className="display-4" />,
    name: "Pedagogia costrutivista e maker",
  },
  {
    id: 10,
    skill: <Icon icon="solar:code-line-duotone" className="display-4" />,
    name: "Programador e cientista de dados",
  },
  {
    id: 10,
    skill: <Icon icon="pixel:technology" className="display-4" />,
    name: "Entusiasta de tecnologia",
  },
  {
    id: 10,
    skill: <Icon icon="lucide:languages" className="display-4" />,
    name: "Português, Inglês e Francês",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://www.linkedin.com/in/lucas-james-faga-97000421b/";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
