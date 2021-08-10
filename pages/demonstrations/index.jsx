import Link from "next/link";
import { useState } from "react"
import Template from "../../components/Template"
import styles from './index.module.css'

export default function Projects({ projects, information }) {
    const [selectedProjects, setSelectedProjects] = useState(projects);

    return (
        <Template title={information.title} description={information.description}>
            <h1 className={styles.h1}>
                {information.title}<br />
                <small>
                    {information.description}<br />
                </small><br />
            </h1>

            <div className={styles.content}>
                <div>
                    {selectedProjects.map((projectElement) => (
                        <div className={styles.projectCard}>
                            <div className={styles.title}>{projectElement.title}</div>
                            <div className={styles.description}>{projectElement.description}</div>
                            <br /><br />
                            <Link href={projectElement.link}>
                                <a className={styles.button} target="_blank">Open</a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Template>
    )
}

export async function getStaticProps() {
    const information = {
        title: "Demonstrations",
        description: "Some demonstration systems that I am maintaining at now."
    }

    let projects = [
        {
            title: 'Notes',
            description: 'Cloud based annotation system, developed using Amplify, React, GraphQL and DynamoDB. Using the AWS React  tutorial as base of the code.',
            link: 'https://notes.gabrielvanderlei.com'
        }
    ];

    return {
        props: {
            projects,
            information
        },
    }
}
