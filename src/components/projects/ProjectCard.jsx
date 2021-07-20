import "./projectcard.scss"

function ProjectCard({ isReverse, logo , title, description }) {
    return (
        <div className={"projectcard " + (isReverse && "reverse")}>
            <div className="icon-section">
                <div className="logo-wrapper">
                    {logo}
                </div>
            </div>
            <div className="description-section">
                <h2>
                    {title}
                </h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard
