import React from 'react';
import ProjectInfo from "../../components/project/ProjectInfo"

type ParamsType = {
    params: {
        pname: string;
    }
}

export function generateStaticParams() {
  return [{ pname: 'answer-bot' }, { pname: 'capstone' }]
}


const ProjectDetails = ({ params }: ParamsType) => {
    return ( 
        <div>
            <p>Current filename: {params.pname}</p>
        </div>
    )
}
export default ProjectDetails;
