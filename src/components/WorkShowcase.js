import React from "react";
import marked from "marked";

function parseMarked(description) {
  return {
    __html: marked(description)
  };
}

const WorkShowcase = props => {
  return (
    <div className="showcase-container">
      <div
        className="showcase-image-block"
        style={{ backgroundImage: `url(${props.workSample})` }}
      />
      <div className="showcase-text-container">
        <div className="showcase-title">
          <h1>{props.title}</h1>
        </div>
        <div className="showcase-position">
          <p>{props.position}</p>
        </div>
        {props.description && (
          <div
            className="showcase-subtext"
            dangerouslySetInnerHTML={parseMarked(props.description)}
          />
        )}
      </div>
    </div>
  );
};

export default WorkShowcase;
