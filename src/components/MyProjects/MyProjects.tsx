import { useTranslation } from "react-i18next";
import Project from "./Projects/Project";
import * as Styles from "./styles";
import { v4 as uuid4 } from "uuid"

export default function MyProjects() {
  const { t } = useTranslation();

  const techs = {
    techs1: ["React", "TypeScript", "Tailwind", "GIT", "Storybook"],
    techs2: ["React", "TypeScript", "SASS", "GIT", "Storybook"],
    techs3: ["Next", "TypeScript", "CSS", "GIT", "PostgreSQL", "Prisma"],
    techs4: ["React", "TypeScript", "SASS", "Vite", "GIT"],
    techs5: ["React", "TypeScript", "StyledComponents", "Redux", "GIT", "Vite"],
    techs6: [
      "Next",
      "TypeScript",
      "Tailwind",
      "Jest",
      "TestingLibrary",
      "Storybook",
      "Node",
      "Express",
      "Mongodb",
    ],
  };

  return (
    <Styles.ContainerProject id="project">
      <h2 className="containerProject__title">&lt; {t("projectsTitle")} /&gt;</h2>
    <>
        <Project
            key={uuid4()}
            title={t("project1Title")}
            description={t("project1Desc")}
            img={"projects-assets/vn-advocacia.png"}
            techs={techs.techs1}
            deploy={"https://vn-advocacia.vercel.app/"}
            repo={"https://github.com/luscabap/VN-Advocacia"}
            id={uuid4()}
            concluido={"true"}
            repoName={t("projectRepoName")}
            subtitulo={t("projectSubtitle")}
        />

        <Project
            key={uuid4()}
            title={t("project2Title")}
            description={t("project2Desc")}
            img={"projects-assets/sr-dente.png"}
            techs={techs.techs2}
            deploy={"https://sr-dente.vercel.app/"}
            repo={"https://github.com/luscabap/sr-dente"}
            id={uuid4()}
            concluido={"true"}
            repoName={t("projectRepoName")}
            subtitulo={t("projectSubtitle")}
            primario={"false"}
        />

        <Project
            key={uuid4()}
            title={t("project3Title")}
            description={t("project3Desc")}
            img={"projects-assets/code-connect.png"}
            techs={techs.techs3}
            deploy={"https://lusca-code-connect.vercel.app/"}
            repo={"https://github.com/luscabap/lusca-code-connect"}
            id={uuid4()}
            concluido={"true"}
            repoName={t("projectRepoName")}
            subtitulo={t("projectSubtitle")}
        />

        <Project
            key={uuid4()}
            title={t("project4Title")}
            description={t("project4Desc")}
            img={"projects-assets/pipoca-agil.png"}
            techs={techs.techs4}
            deploy={"https://pipoca-agil-apresentacao.vercel.app/"}
            repo={"https://github.com/luscabap/pipoca-agil-apresentacao"}
            id={uuid4()}
            concluido={"true"}
            repoName={t("projectRepoName")}
            subtitulo={t("projectSubtitle")}
            primario={"false"}
        />

        <Project
            key={uuid4()}
            title={t("project5Title")}
            description={t("project5Desc")}
            img={"projects-assets/projeto-hamburgueria.png"}
            techs={techs.techs5}
            deploy={"https://hamburgueria-topaz-seven.vercel.app/"}
            repo={"https://github.com/luscabap/ecommerce-luscabap"}
            id={uuid4()}
            concluido={"true"}
            repoName={t("projectRepoName")}
            subtitulo={t("projectSubtitle")}
        />

        <Project
            key={uuid4()}
            title={t("project6Title")}
            description={t("project6Desc")}
            img={"projects-assets/construcao.png"}
            techs={techs.techs6}
            deploy={"#"}
            repo={"https://github.com/luscabap/ecommerce-luscabap"}
            id={uuid4()}
            concluido={"false"}
            repoName={t("projectRepoName")}
            subtitulo={t("projectSubtitle")}
            primario={"false"}
        />
    </>
    </Styles.ContainerProject>
  );
}
