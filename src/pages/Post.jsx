import React from 'react';
import PostImg from "../assets/login_img.jpg"

const Post = () => {
  return (
    <div className="post-page">
      <div className="post">
        <img src={PostImg} alt="" className="post-img" />
        <p className="article">To create a footer to stay at the bottom of a web page We can fix the position of it at the bottom of the webpage so that, if you scroll down that webpage you can still view the footer from any position at the page. To make a footer fixed at the bottom of the webpage, you could use.To create a footer to stay at the bottom of a web page We can fix the position of it at the bottom of the webpage so that, if you scroll down that webpage you can still view the footer from any position at the page. To make a footer fixed at the bottom of the webpage, you could use</p>
      </div>
      <div className="related">
        <div className='rlt-post'>
          <img src={PostImg} alt="" className="rlt-post-img" />
          <div className="rlt-heading"><span>
            To create a footer to stay at the bottom of a web page We can fix the position of it at the bottom of th
          </span>
          </div>
        </div>
        <div className='rlt-post'>
          <img src={PostImg} alt="" className="rlt-post-img" />
          <div className="rlt-heading"><span>
            To create a footer to stay at the bottom of a web page We can fix the position of it at the bottom of th
          </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post;