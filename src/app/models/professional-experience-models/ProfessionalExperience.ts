import type { Location } from '../utils/Location';
export interface ProfessionalExperience {
    title: string
    company: string,
    client: string,
    location: Location,
    remote: boolean,
    startDate: string,
    endDate: string,
    body: string[]    
}