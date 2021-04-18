import React from "react";
import {Link} from "react-router-dom";
import herosvg from "../assets/hero1.svg";
import "../styles/homeComponent.css";

const HomeComponent=()=>{
    return(
        <div className="home-wrapper">
            <div className="section-one">
                <img src={herosvg} alt="resume builder"/>
            </div>
            <div className="section-two">
                <h1>Keep your resume and cover letter up-to-date without any hassle.</h1>
                
                <h4>We have created a simple, beautiful and intuitive tool to create amazing resumes having the ability to get parsed by recruiters sizing in just some KBs and that too free of cost.</h4>
                <div className="feature-section">
                    <span><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 22h-20c-1.104 0-2-.896-2-2v-12c0-1.104.896-2 2-2h1.626l.078.283c.194.631.518 1.221.95 1.717h-2.154c-.276 0-.5.224-.5.5v5.5h20v-5.5c0-.276-.224-.5-.5-.5h-2.154c.497-.569.853-1.264 1.029-2h1.625c1.104 0 2 .896 2 2v12c0 1.104-.896 2-2 2zm-20-5v2.5c0 .276.224.5.5.5h19c.276 0 .5-.224.5-.5v-2.5h-20zm8.911-5h-2.911c.584-1.357 1.295-2.832 2-4-.647-.001-1.572.007-2 0-2.101-.035-2.987-1.806-3-3-.016-1.534 1.205-3.007 3-3 1.499.006 2.814.872 4 2.313 1.186-1.441 2.501-2.307 4-2.313 1.796-.007 3.016 1.466 3 3-.013 1.194-.899 2.965-3 3-.428.007-1.353-.001-2 0 .739 1.198 1.491 2.772 2 4h-2.911c-.241-1.238-.7-2.652-1.089-3.384-.388.732-.902 2.393-1.089 3.384zm-2.553-7.998c-1.131 0-1.507 1.918.12 1.998.237.012 2.235 0 2.235 0-1.037-1.44-1.52-1.998-2.355-1.998zm7.271 0c1.131 0 1.507 1.918-.12 1.998-.237.012-2.222 0-2.222 0 1.037-1.44 1.507-1.998 2.342-1.998z"/></svg></span>
                    <div>
                        <h6>Free to use forever</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti similique quisquam dolores non! Laboriosam, qui? Laboriosam obcaecati, sed at, non tempora maxime veritatis quia, ipsum itaque adipisci earum perspiciatis sunt.</p>
                    </div>
                </div>
                <div className="feature-section">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 13v5h-5l1.607-1.608c-3.404-2.824-5.642-8.392-9.179-8.392-2.113 0-3.479 1.578-3.479 4s1.365 4 3.479 4c1.664 0 2.86-1.068 4.015-2.392l1.244 1.561c-1.499 1.531-3.05 2.831-5.259 2.831-3.197 0-5.428-2.455-5.428-6s2.231-6 5.428-6c4.839 0 7.34 6.449 10.591 8.981l1.981-1.981zm.57-7c-2.211 0-3.762 1.301-5.261 2.833l1.244 1.561c1.156-1.325 2.352-2.394 4.017-2.394 2.114 0 3.48 1.578 3.48 4 0 1.819-.771 3.162-2.051 3.718v2.099c2.412-.623 4-2.829 4-5.816.001-3.546-2.231-6.001-5.429-6.001z"/></svg></span>
                    <div>
                        <h6>Fill data once stays there always</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti similique quisquam dolores non! Laboriosam, qui? Laboriosam obcaecati, sed at, non tempora maxime veritatis quia, ipsum itaque adipisci earum perspiciatis sunt.</p>
                    </div>
                </div>
                <div className="feature-section">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 13h-4v-1h4v1zm2.318-4.288l3.301 3.299-4.369.989 1.068-4.288zm11.682-5.062l-7.268 7.353-3.401-3.402 7.267-7.352 3.402 3.401zm-6 8.916v.977c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h14.056l1.977-2h-18.033v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.843l-2 2.023z"/></svg></span>
                    <div>
                        <h6>Easy to use, download and print</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti similique quisquam dolores non! Laboriosam, qui? Laboriosam obcaecati, sed at, non tempora maxime veritatis quia, ipsum itaque adipisci earum perspiciatis sunt.</p>
                    </div>
                </div>
                <div className="button-pair">
                    <Link to="/create-resume">
                    <button type="button" className="button-1">Create Resume</button>
                    </Link>
                    <Link to="/create-cover-letter">
                    <button type="button" className="button-2">Create Cover Letter</button>
                    </Link>
                </div>
                <p>*It is a beta version with limited functionalities. We're continuously working on it. More templates and features will be added soon. You suggestions and feedbacks are always welcome. <a href="https://forms.gle/7QqxsRaToqZRrdsZ7" rel="noreferrer" target="_blank">Reach out to us.</a></p>
            </div>
        </div>
    )
}

export default HomeComponent;