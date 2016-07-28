import React, { PropTypes, Component } from 'react';


const HashtagFaceoff = (props) => {
  return (
    <div>
      <section className="OPExperience__header">
        <h1 className="text-primary text-center">HashtagFaceoff</h1>
        <p className="text-center">This is a HashtagFaceoff example.</p>
      </section>

      <section className="OPExperience__product">
        <div className="OPExperience__product-container">
          <iframe src="http://offerpop.com/hashtag/gallery/8755" width="100%" height="2000px" frameBorder="0"></iframe>
        </div>
      </section>

    </div>
  )
}

export default HashtagFaceoff;
