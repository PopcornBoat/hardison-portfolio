const Resume = () => {
    return (
        <div className="d-flex flex-column pdf-object">
            <h2 className="text-center mt-3">My Resume</h2>
            <div className="flex-grow-1 w-100 d-flex justify-content-center">
                <object
                    data="/resume/Hardison_resume.pdf"
                    type="application/pdf"
                    className="w-100"
                    
                >
                    <p className="text-center mt-3">
                        Your browser does not support PDFs.
                        <a href="/resume/Hardison_resume.pdf" download>Download the Resume</a> instead.
                    </p>
                </object>
            </div>
        </div>
    );
};

export default Resume;




