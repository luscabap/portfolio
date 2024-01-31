import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiSass,
    SiCss3,
    SiHtml5,
    SiTailwindcss,
    SiVite
} from 'react-icons/si';

export const techIcons: Record<string, React.ReactNode> = {
    React: <SiReact size={35}/>,
    TypeScript: <SiTypescript size={35}/>,
    Javascript: <SiJavascript size={35}/>,
    SASS: <SiSass size={35}/>,
    CSS: <SiCss3 size={35}/>,
    HTML: <SiHtml5 size={35}/>,
    Tailwind: <SiTailwindcss size={35}/>,
    Vite: <SiVite size={35}/>
}