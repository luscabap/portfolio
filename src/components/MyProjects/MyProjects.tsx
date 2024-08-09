import { useTranslation } from "react-i18next";
import Project from "./Projects/Project";
import * as Styles from "./styles";
import { ProjectProps } from "../../types/ProjectType";

export default function MyProjects() {
  const { t } = useTranslation();

  const projects = t('projects', { returnObjects: true }) as ProjectProps[]

  return (
    <Styles.ContainerProject id="project">
      <h2 className="containerProject__title">&lt; {t("projectsTitle")} /&gt;</h2>

      {
        projects.map((project, i) => (
          <Project 
            key={i}
            title={project.title}
            description={project.description}
            img={project.img}
            techs={project.techs}
            deploy={project.deploy}
            repo={project.repo}
            concluido={project.concluido}
            repoName={t("projectRepoName")}
            subtitulo={t("projectSubtitle")}
            primario={project.primario}
          /> 
        ))
      }
    </Styles.ContainerProject>
  );
}
