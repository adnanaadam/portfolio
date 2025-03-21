import PageContent from "../components/ui/projectsPageContent";
import { DesignProjectsItems } from "../db";

const DesignProjects = () => {
  return (
    <>
      <div className="w-screen h-screen min-h-screen" role="main">
        <PageContent pageContent={DesignProjectsItems} />
      </div>
    </>
  );
};

export default DesignProjects;
