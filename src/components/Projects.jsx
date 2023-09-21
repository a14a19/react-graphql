import { useQuery } from '@apollo/client';
import Spinner from './Spinner';
import { GET_PROJECTS } from '../queries/projectQueries';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    console.log(data, "Project data")

    if (loading) return <Spinner />

    if (error) return <p>Something went wrong</p>

    return <>
        {
            data.projects.length > 0 ?
                (
                    <div>
                        {data.projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )
                :
                (
                    <p>
                        No Projects
                    </p>
                )
        }
    </>

}