import { useEffect, useState } from "react";


function UserFeed() {
    const userId = "123";
    const [jobs, setJobs] = useState<{ id: string; title: string; company: string }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setJobs([
                { id: "1", title: "Frontend Developer", company: "Tech Corp" },
                { id: "2", title: "Backend Engineer", company: "DataWorks" },
                { id: "3", title: "Full Stack Developer", company: "Webify" },
                { id: "4", title: "DevOps Specialist", company: "Cloudify" },
                { id: "5", title: "UI/UX Designer", company: "DesignHub" },
                { id: "6", title: "QA Tester", company: "QualityFirst" },
            ]);
            setLoading(false);
        }, 1000);
    }, [userId]);

    return (
        <div>
            <div>Welcome {userId}</div>
            <div>Implement job postings here</div>
        </div>
    );
}

export default UserFeed;