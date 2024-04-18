import React from 'react';
import ProjectInfo from "../../components/project/ProjectInfo"

type ParamsType = {
    params: {
        pname: string;
    }
}

export function generateStaticParams() {
  return [{ pname: 'doughflow' }, { pname: 'thesis' }, { pname: 'portfolio' }]
}


const ProjectDetails = ({ params }: ParamsType) => {
    return ( 
        <div>
            <ProjectInfo pname={params.pname} />
        </div>
    )
}
export default ProjectDetails;
