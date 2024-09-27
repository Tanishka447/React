
import React from 'react';

interface ContentProps {
    title: string;
    description: string;
    age: string;
}

const Content: React.FC<ContentProps> = ({ title, description, age }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{age}</p>
        </div>
    );
};

export default Content;
