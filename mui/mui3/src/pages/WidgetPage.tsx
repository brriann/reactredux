import React from 'react';
import PersonCard from '../components/widget/PersonCard';
import PageParent from './PageParent';

// TODO - image module imports
//@ts-ignore
import headshot1 from '../assets/headshot1.JPG';
//@ts-ignore
import headshot2 from '../assets/headshot2.JPG';
import ProgressCard from '../components/widget/ProgressCard';
import InfoCard from '../components/widget/InfoCard';

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

const progressItems = [
    {
        title: 'Metric',
        value: 7,
        maxValue: 9
    },
    {
        title: 'Progress',
        value: 55,
        maxValue: 80
    },
    {
        title: 'Visual',
        value: 14,
        maxValue: 50
    },
];

function WidgetPage() {
    return (
        <PageParent>
            {people.map(p => (
                <PersonCard key={p.name} {...p} />
            ))}
            {progressItems.map(pi => (
                <ProgressCard key={pi.title} {...pi} />
            ))}
            <InfoCard />
        </PageParent>
    );
}

export default WidgetPage;