import { Presentation, Lightbulb, Rocket, Users } from 'lucide-react';

export const aboutFeatures = [
    {
        icon: Presentation,
        title: 'Professional Development Workshops',
        description:
            'Learn and develop important industry skills through hands-on workshops led by experienced students, and get quality advice from industry professionals.',
    },
    {
        icon: Lightbulb,
        title: 'Industry Insights',
        description:
            'Attend more specialised events to gain hands on insight into career paths and options from our industry representatives.',
    },
    {
        icon: Users,
        title: 'Networking',
        description:
            'Connect with like-minded peers, alumni, and industry partners to build lasting professional relationships.',
    },
    {
        icon: Rocket,
        title: 'Career Development',
        description:
            'Access career guidance, mentorship programs, and exclusive opportunities from our tech partners.',
    },
];

export const packagesData = [
    {
        name: 'Bronze',
        color: 'from-amber-600 to-amber-800',
        features: [
            'Social media marketing',
            'Up to 2x newsletter features per year',
            "Company merchandise distributed at O'day",
            'Invited to Skill Development events',
        ],
    },
    {
        name: 'Silver',
        color: 'from-gray-400 to-gray-600',
        features: [
            'All Bronze benefits',
            'Up to 3x newsletter features per year',
            'Invited to Industry Insight events',
        ],
    },
    {
        name: 'Gold',
        color: 'from-yellow-400 to-yellow-600',
        popular: true,
        features: [
            'All Silver benefits',
            'Up to 5x newsletter features per year',
            '1 custom event tailored to meet your needs',
        ],
    },
];

export const teamData = [
    {
        name: 'Erin Blanchard',
        role: 'President',
        pfpUrl: 'https://media.licdn.com/dms/image/v2/D5603AQFLhGsNP_DFBA/profile-displayphoto-shrink_400_400/B56ZV6S50MHsAg-/0/1741513531074?e=1767830400&v=beta&t=RHgg5Lo17NB-C7hoz0RVZTkpFifj1xK4rqbN4t-iRao',
        bio: 'Leads the vision, strategy and initiatives to empower student growth and prepare members for industry work.',
    },
    {
        name: 'Mridula Halder',
        role: 'Vice President',
        pfpUrl: 'https://media.licdn.com/dms/image/v2/D5603AQFuO7vGeXdJKA/profile-displayphoto-scale_400_400/B56Ziy1yj0G0Ak-/0/1755347102666?e=1767830400&v=beta&t=p91-3k3mk9Ds9N648g_jeR3MDc1KhOD8bodiojYNE_E',
        bio: 'Supports operations to ensure impactful events and their smooth execution.',
    },
    {
        name: 'Matthew Adler',
        role: 'Sponsors Director',
        pfpUrl: 'https://media.licdn.com/dms/image/v2/D5603AQGI-Lj3-mh5QQ/profile-displayphoto-shrink_400_400/B56ZWJcoXUGsAk-/0/1741767739277?e=1767830400&v=beta&t=-ItrNZscBndPlDrXFcCbeUZfG1gztilAux__fblW3JQ',
        bio: 'Builds and manages industry partnerships to create valuable connections and opportunities for members.',
    },
];
