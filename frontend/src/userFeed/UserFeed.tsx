import { useEffect, useState } from "react";

function UserFeed() {
    const userId = "123"
    const [jobs, setJobs] = useState<{ id: string; title: string; company: string }[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate API call
        setLoading(true);
        setTimeout(() => {
            // Simulated job postings for the user
            setJobs([
                { id: "1", title: "Frontend Developer", company: "Tech Corp" },
                { id: "2", title: "Backend Engineer", company: "DataWorks" },
                { id: "3", title: "Full Stack Developer", company: "Webify" },
            ]);
            setLoading(false);
        }, 1000)
    }, [userId])

    return (
        <div>
            <h1>User Feed</h1>
            {loading ? (
                <p>Loading job postings...</p>
            ) : (
                <ul>
                    {jobs.map((job) => (
                        <li key={job.id}>
                            <strong>{job.title}</strong> at {job.company}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserFeed