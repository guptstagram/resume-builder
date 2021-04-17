import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {Redirect} from "react-router";
import "../sass/style.scss";

const ResumeComponent=()=>{
    
    let resumeDetails=useSelector(state=>state.resumeDetailsReducer);
    console.log(resumeDetails);
    
    const handlePrintButton=()=>window.print();

    return resumeDetails.name?<div id="wrapper">
        <div className="print-button" onClick={handlePrintButton}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 11v12h-24v-12h4v-10h10.328c1.538 0 5.672 4.852 5.672 6.031v3.969h4zm-6-3.396c0-1.338-2.281-1.494-3.25-1.229.453-.813.305-3.375-1.082-3.375h-7.668v13h12v-8.396zm-2 5.396h-8v-1h8v1zm0-3h-8v1h8v-1zm0-2h-8v1h8v-1z"/></svg></div>
        <div className="a4-wrapper">
            <div className="intro-section">
                <h1>{resumeDetails.name}</h1>
                {resumeDetails.title?<h2>{resumeDetails.title.trim()}</h2>:null}
                <p>{resumeDetails.about.trim()}</p>
            </div>
            <div className="social-section">
                {resumeDetails.phone?<div className="social">
                    <div className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
                    </div>
                    <p>{resumeDetails.phone.trim()}</p>
                </div>:null}
                {resumeDetails.email?<div className="social">
                    <div className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg></div>
                    <p>{resumeDetails.email.trim()}</p>
                </div>:null}
                {resumeDetails.web?<div className="social">
                    <div className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/></svg></div>
               <p>{resumeDetails.web.trim()}</p>
                </div>:null}
                {resumeDetails.github? <div className="social">
                    <div className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></div>
              <p>{resumeDetails.github.trim()}</p>
                </div>:null}
                {resumeDetails.linkedin?<div className="social">
                    <div className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></div>
                    <p>{resumeDetails.linkedin.trim()}</p>
                </div>:null}
                {resumeDetails.twitter?<div className="social">
                    <div className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></div>
               <p>{resumeDetails.phone.trim()}</p>
                </div>:null}
            </div>
            {resumeDetails.expertise?<div className="skills-sections">
                <div className="section-heading"><h3>EXPERTISE</h3></div>
                <div className="skill-stack">
                    {resumeDetails.expertise.split(",").map(exp=>exp.trim()?<div className="skill"><p>{exp.trim()}</p></div>:null)}
                </div>
            </div>:null}
            {resumeDetails.exp[0].role?<div className="exp-section">
                <div className="section-heading"><h3>WORK EXPERIENCE</h3></div>
                {resumeDetails.exp.map(ex=><div className="exp-card">
                    <h2>{ex.role.trim()}</h2>
                    <h4>{ex.org.trim()}</h4>
                    <h6>{ex.from.trim()} - {ex.to.trim()}</h6>
                    {ex.desc.split("<br>").map(des=><p>{des.trim()}</p>)}
                </div>)}
            </div>:null}
            {resumeDetails.cert[0].name?<div className="exp-section">
                <div className="section-heading"><h3>CERTIFICATIONS</h3></div>
                {resumeDetails.cert.map(ex=><div className="exp-card">
                    <h2>{ex.name.trim()}</h2>
                    <h4>{ex.org.trim()}</h4>
                    <h6>{ex.date.trim()}</h6>
                </div>)}
            </div>:null}
            {resumeDetails.skills?<div className="skills-sections">
                <div className="section-heading"><h3>LIFE SKILLS</h3></div>
                <div className="skill-stack">
                    {resumeDetails.skills.split(",").map(skill=>skill.trim()?<div className="skill"><p>{skill.trim()}</p></div>:null)}
                </div>
            </div>:null}
            {resumeDetails.edu[0].degree?<div className="edu-section">
                <div className="section-heading"><h3>EDUCATION</h3></div>
                {resumeDetails.edu.map(ex=><div className="exp-card">
                    <h2>{ex.degree.trim()}</h2>
                    <h4>{ex.institute.trim()}</h4>
                    <h6>{ex.from.trim()} - {ex.to.trim()}</h6>
                </div>)}
            </div>:null}
        </div>
    </div>:<Redirect to="create-resume"/>
}

export default ResumeComponent;