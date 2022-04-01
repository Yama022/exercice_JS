import React from 'react';

import nasaLogo from 'src/assets/Nasa-logo.png';

import './style.scss';

export default function Nasa(data) {
  console.log(data.data);
  const {
    copyright,
    date,
    explanation,
    hdurl,
    title,
    url,
  } = data.data;
  return (
    <div className="nasa">
      <h1 className="nasa__title">L'image du jour de la NASA :</h1>
      <h1 className="nasa__subtitle">{title}</h1>
      <h4 className="nasa__date">le {date}</h4>
      <a href={url} target="_blank">
        <img src={hdurl} alt="hdurl" />
        </a>
      <p className="nasa__desc">{explanation}</p>
      <h5 className="nasa__copyright">© {copyright}</h5>
      <img src={nasaLogo} alt="logo Nasa" className="nasa__logo"/>
    </div>
  )

}
