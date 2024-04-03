import React from 'react';

type paramsType={
    params: {
        pname: string;
    }
}

const page = ({ params } : paramsType) => {
    const { pname } = params;
    return (
        <div className='m-2'>
            <h1>Dynamic route name {pname}</h1>
        </div>
    )
}

export default page;
