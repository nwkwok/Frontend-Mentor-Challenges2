import React from 'react';
import style from './DesignCard.module.scss';
import webProjects from './webProjects';
import appProjects from './appProjects';
import graphicProjects from './graphicProjects';

function DesignCard(props) {
  const getDesignArray = () => {
    if (props.page === 'web') {
      return webProjects;
    } else if (props.page === 'app') {
      return appProjects;
    } else if (props.page === 'graphic') {
      return graphicProjects;
    }
  };

  const designArray = getDesignArray();
  const showProjects = designArray.map((project) => {
    return (
      <div key={project.projectName} className={style.cardContainer}>
        <img src={project.projectImage} alt='project' />
        <div className={style.content}>
          <p className={style.name}>{project.projectName.toUpperCase()}</p>
          <p className={style.description}>{project.projectDesc}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={style.container}>
      {showProjects}
    </div>
  );
}

export default DesignCard;
