import { Presentation, Lightbulb, Rocket, Users } from 'lucide-react';
import fenwickLogo from '../assets/companyLogos/fenwickLogo.png';
import macquarieLogo from '../assets/companyLogos/macquarieLogo.png';
import pwcLogo from '../assets/companyLogos/pwcLogo.png';
import westpacLogo from '../assets/companyLogos/westpacLogo.png';
import erinPfp from '../assets/erinPfp.jpeg';
import mridulaPfp from '../assets/mridulaPfp.jpeg';
import mattPfp from '../assets/mattPfp.jpeg';

export interface SponsorCarouselData {
    companyName: string;
    image: string;
    linkedinUrl: string;
}

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

export const sponsorCarouselData: SponsorCarouselData[] = [
    {
        companyName: 'Macquarie',
        image: macquarieLogo,
        linkedinUrl:
            'https://www.linkedin.com/company/macquariegroup/posts/?feedView=all',
    },
    {
        companyName: 'PWC',
        image: pwcLogo,
        linkedinUrl: 'https://www.linkedin.com/company/pwc/posts/?feedView=all',
    },
    {
        companyName: 'Fenwick',
        image: fenwickLogo,
        linkedinUrl: 'https://www.linkedin.com/company/fenwick-it/',
    },
    {
        companyName: 'Westpac',
        image: westpacLogo,
        linkedinUrl: 'https://www.linkedin.com/company/westpac/',
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
        pfpUrl: erinPfp,
        bio: 'Leads the vision, strategy and initiatives to empower student growth and prepare members for industry work.',
        linkedInUrl: 'https://www.linkedin.com/in/erin-blanchard-290aab2a5/',
        societyEmail: 'president@techsoc.activateuts.com.au',
    },
    {
        name: 'Mridula Halder',
        role: 'Vice President',
        pfpUrl: mridulaPfp,
        bio: 'Supports operations to ensure impactful events and their smooth execution.',
        linkedInUrl: 'https://www.linkedin.com/in/mridula-halder/',
        societyEmail: 'vicepresident@techsoc.activateuts.com.au',
    },
    {
        name: 'Matthew Adler',
        role: 'Sponsors Director',
        pfpUrl: mattPfp,
        bio: 'Builds and manages industry partnerships to create valuable connections and opportunities for members.',
        linkedInUrl: 'https://www.linkedin.com/in/matthew-adler-39b9092b9/',
        societyEmail: 'pr@techsoc.activateuts.com.au',
    },
];

export const techsocLinkedInUrl =
    'https://www.linkedin.com/company/uts-tech-society/posts/?feedView=all';
