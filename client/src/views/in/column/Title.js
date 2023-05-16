/* eslint-disable react/prop-types */
import React from 'react'
// import background from '../../../assets/images/background.png'

const Title = ({ data }) => {
  const name = data.name
  const exp = data.experience
  // const file = data.imgSrc
  const hashtags = data.hashtags.map((hashtag) => {
    return (
      <nobr key={hashtag}>
        <a className="hashtag" href="">
          #{hashtag}&emsp;
        </a>
      </nobr>
    )
  })
  return (
    <header>
      <div className="banner">
        <div className="banner-text">
          {/* <hr/> */}
          <h1 className="responsive-headline">{name}</h1>
          {/* <hr/> */}
          <h1></h1>
          <div className="exp-text">{exp}</div>
          {/* <hr /> */}
          <h1></h1>
          {hashtags}
        </div>
      </div>
    </header>
  )
}

export default Title
