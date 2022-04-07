import React from 'react';
import PersonCard from '../components/widget/PersonCard';
import PageParent from './PageParent';

// TODO - image module imports
//@ts-ignore
import headshot1 from '../assets/headshot1.JPG';
//@ts-ignore
import headshot2 from '../assets/headshot2.JPG';

const people = [
    {
        name: 'Brian Foster',
        description: 'Slalom, Trick, Jump',
        photo: headshot1,
        value: 81.1
    },
    {
        name: 'Brenda Davis',
        description: 'Jump, Overall',
        photo: headshot2,
        value: 93.7
    }
]

function WidgetPage() {
    return (
        <PageParent>
            {people.map(p => (
                <PersonCard {...p} />
            ))}
        </PageParent>
    );
}

export default WidgetPage;