import { useTranslation } from "react-i18next";
import Project from "./Projects/Project";
import * as Styles from "./styles";

export default function MyProjects() {
  const { t } = useTranslation();

  const techs = {
    techs1: ["Next", "TypeScript", "CSS", "GIT"],
    techs2: ["React", "TypeScript", "SASS", "Vite", "GIT"],
    techs3: ["React", "TypeScript", "SASS", "Vite"],
    techs4: ["React", "TypeScript", "SASS", "Jest", "TestingLibrary"],
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
      {/* {
                projects.dataProjects.map(item => 
                    <Project
                        key={item.id} 
                        title={item.title} 
                        description={item.description} 
                        img={item.img} 
                        techs={item.techs} 
                        deploy={item.deploy} 
                        repo={item.repo} 
                        id={item.id}
                        concluido={item?.concluido}
                    />)
            } */}
    <>
        <Project
            key={1}
            title={t("project1Title")}
            description={t("project1Desc")}
            img={"code-connect.png"}
            techs={techs.techs1}
            deploy={"https://lusca-code-connect.vercel.app/"}
            repo={"https://github.com/luscabap/lusca-code-connect"}
            id={1}
            concluido={true}
            repoName={t("projectRepoName")}
            subtitulo={t("projectSubtitle")}
        />

        <Project
            key={2}
            title={t("project2Title")}
            description={t("project2Desc")}
            img={"pipoca-agil.png"}
            techs={techs.techs2}
            deploy={"https://pipoca-agil-apresentacao.vercel.app/"}
            repo={"https://github.com/luscabap/pipoca-agil-apresentacao"}
            id={2}
            concluido={true}
            repoName={t("projectRepoName")}
            subtitulo={t("projectSubtitle")}
        />

        <Project
            key={3}
            title={t("project3Title")}
            description={t("project3Desc")}
            img={"tcc.png"}
            techs={techs.techs3}
            deploy={"https://tcc-ij3n.vercel.app/"}
            repo={"https://github.com/luscabap/tcc"}
            id={3}
            concluido={true}
            repoName={t("projectRepoName")}
            subtitulo={t("projectSubtitle")}
        />

        <Project
            key={4}
            title={t("project4Title")}
            description={t("project4Desc")}
            img={"sorteador.png"}
            techs={techs.techs4}
            deploy={"https://lusca-amigo-secreto.vercel.app/"}
            repo={"https://github.com/luscabap/lusca-jest"}
            id={4}
            concluido={true}
            repoName={t("projectRepoName")}
            subtitulo={t("projectSubtitle")}
        />

        <Project
            key={5}
            title={t("project5Title")}
            description={t("project5Desc")}
            img={"projeto-hamburgueria.png"}
            techs={techs.techs5}
            deploy={"https://hamburgueria-topaz-seven.vercel.app/"}
            repo={"https://github.com/luscabap/ecommerce-luscabap"}
            id={5}
            concluido={true}
            repoName={t("projectRepoName")}
            subtitulo={t("projectSubtitle")}
        />

        <Project
            key={6}
            title={t("project6Title")}
            description={t("project6Desc")}
            img={"construcao.png"}
            techs={techs.techs6}
            deploy={"#"}
            repo={"https://github.com/luscabap/ecommerce-luscabap"}
            id={6}
            concluido={false}
            repoName={t("projectRepoName")}
            subtitulo={t("projectSubtitle")}
        />
    </>
    </Styles.ContainerProject>
  );
}
