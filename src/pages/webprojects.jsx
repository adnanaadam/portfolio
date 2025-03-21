import PageContent from "../components/ui/projectsPageContent";
import { WebProjectsItems } from "../db";

const Webprojects = () => {
  return (
    <>
      <div className="w-screen h-screen min-h-screen" role="main">
        <PageContent pageContent={WebProjectsItems} />
      </div>
    </>
  );
};

export default Webprojects;
