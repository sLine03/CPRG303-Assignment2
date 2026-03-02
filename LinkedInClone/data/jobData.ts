// data/jobData.ts

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;
  logo: string;
  postedAgo: string;
  applicants: number;
  saved: boolean;
  easyApply: boolean;
};

export type JobFilter = 'All' | 'Remote' | 'Full-time' | 'Part-time' | 'Contract';

export const JOB_LISTINGS: Job[] = [
  {
    id: '1',
    title: 'AI Architect',
    company: 'ATS Corporation',
    location: 'Toronto, ON',
    type: 'Full-time',
    salary: '$140k – $180k',
    logo: '',
    postedAgo: '2h ago',
    applicants: 87,
    saved: false,
    easyApply: true,
  },
  {
    id: '2',
    title: 'UX Designer',
    company: 'Air Canada',
    location: 'Montreal, QC',
    type: 'Full-time',
    salary: '$120k – $160k',
    logo: '',
    postedAgo: '5h ago',
    applicants: 212,
    saved: true,
    easyApply: false,
  },
  {
    id: '3',
    title: 'Frontend Engineer',
    company: 'Suncor Energy',
    location: 'Remote',
    type: 'Remote',
    salary: '$110k – $145k',
    logo: '',
    postedAgo: '1d ago',
    applicants: 340,
    saved: false,
    easyApply: true,
  },
  {
    id: '4',
    title: 'Data Analyst',
    company: 'Northrop Grumman',
    location: 'Edmonton, AB',
    type: 'Full-time',
    salary: '$150k – $200k',
    logo: '',
    postedAgo: '2d ago',
    applicants: 156,
    saved: false,
    easyApply: true,
  },
  {
    id: '5',
    title: 'Backend Engineer',
    company: 'Shopify',
    location: 'Remote',
    type: 'Remote',
    salary: '$130k – $170k',
    logo: '',
    postedAgo: '3d ago',
    applicants: 98,
    saved: true,
    easyApply: false,
  },
  {
    id: '6',
    title: 'Marketing Manager',
    company: 'Shoppers Drug Mart',
    location: 'Calgary, AB',
    type: 'Full-time',
    salary: '$95k – $125k',
    logo: '',
    postedAgo: '4d ago',
    applicants: 430,
    saved: false,
    easyApply: true,
  },
];

export const SAVED_JOBS: Job[] = JOB_LISTINGS.filter(j => j.saved);