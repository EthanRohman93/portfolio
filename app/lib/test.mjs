import { getProjectNames, getProjectData } from './projectsService';

const testProjectService = async () => {
    console.log('Fetching project names...');
    const projectNames = await getProjectNames();
    console.log('Project Names:', projectNames);
    console.log('\nFetching project data for "capstone"...');
    const projectData = await getProjectData('capstone');
    console.log('Project Data:', projectData);
};

testProjectService().catch(console.error);

