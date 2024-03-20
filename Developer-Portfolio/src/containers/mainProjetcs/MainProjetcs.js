import React from "react";
import "./MainProjetc.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { projectSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function MainProjetcs() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="blogs">
      <div className="blog-header">
        <h1 className="blog-header-text">{projectSection.title}</h1>
        <p className="subTitle blog-subtitle">{projectSection.subtitle}</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {projectSection.projetcs.map(project => {
            return (
              <BlogCard
                blog={{
                  url: project.url,
                  images: project.images,
                  title: project.title,
                  description: project.description,
                  mainChallenges: project.mainChallenges
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
