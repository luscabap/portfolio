import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiSass,
    SiCss3,
    SiHtml5,
    SiTailwindcss,
    SiVite,
    SiJest,
    SiTestinglibrary,
    SiGit,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiStorybook,
    SiRedux,
    SiStyledcomponents
} from 'react-icons/si';

const iconProps = {
    size: 35
}

export const techIcons: Record<string, React.ReactNode> = {
    React: <SiReact {...iconProps}/>,
    TypeScript: <SiTypescript {...iconProps}/>,
    Javascript: <SiJavascript {...iconProps}/>,
    SASS: <SiSass {...iconProps}/>,
    CSS: <SiCss3 {...iconProps}/>,
    HTML: <SiHtml5 {...iconProps}/>,
    Tailwind: <SiTailwindcss {...iconProps}/>,
    Vite: <SiVite {...iconProps}/>,
    Jest: <SiJest {...iconProps} />,
    TestingLibrary: <SiTestinglibrary {...iconProps}/>,
    GIT: <SiGit {...iconProps} />,
    Next: <SiNextdotjs {...iconProps} />,
    Node: <SiNodedotjs {...iconProps} />,
    Express: <SiExpress {...iconProps} />,
    Mongodb: <SiMongodb {...iconProps} />,
    Storybook: <SiStorybook {...iconProps} />,
    Redux: <SiRedux {...iconProps}/>,
    StyledComponents: <SiStyledcomponents {...iconProps}/>

}