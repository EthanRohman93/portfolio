import React from 'react';
import Link from 'next/link';

type PropsType = {
    pname: string;
}

const ProjectButton = ( {pname}: PropsType ) => {
    return (
        <div>
            <Link href={`/project/${pname}`} style={{ textDecoration: 'none' }}>
                <button type="button">Details</button>
            </Link>
        </div>
    );
};

export default ProjectButton;
