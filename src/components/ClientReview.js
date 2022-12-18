import React from 'react'


const ClientReview = () => {
  return (
    <div className='client-review-block'>
      <div className='client-review-bg'>
        <div className='stripe-bg'>
          <div className='text-center client-review-content'>
            <span className='section-tag main-font testimonial'>Testimonials</span>
            <div className='section-title main-font'>
              What Our client say
            </div>
            <div className='section-title-caption our-collection-caption subtext-font'>
              Our clients send us bunch of smilies with our services and we love them
            </div>
            <div className="row">
                <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#quote-carousel" data-slide-to="0" className="active"><img className="img-responsive " src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg" alt=""/>
                        </li>
                        <li data-target="#quote-carousel" data-slide-to="1"><img className="img-responsive" src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" alt=""/>
                        </li>
                        <li data-target="#quote-carousel" data-slide-to="2"><img className="img-responsive" src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" alt=""/>
                        </li>
                    </ol>
                    <div className="carousel-inner text-center">
                        <div className="item active">
                            <blockquote>
                                <div className="row">
                                    <div className='client-name main-font'>Jacob Jones</div>
                                    <div className='client-role subtext-font'>Founder of the DAIVIET Company</div>
                                    <p className='subtext-font review-details'>
                                        “ you will get all the best. The team is working hard to give us plenty of resources for the job. Had a great experience working with them.
                                        Thanks very much.”
                                    </p>
                                </div>
                            </blockquote>
                        </div>
                        <div className="item">
                            <blockquote>
                                <div className="row">
                                    <div className='client-name main-font'>Jacob Jones</div>
                                    <div className='client-role subtext-font'>Founder of the DAIVIET Company</div>
                                    <p className='subtext-font review-details'>
                                        “ you will get all the best. The team is working hard to give us plenty of resources for the job. Had a great experience working with them.
                                        Thanks very much.”
                                    </p>
                                </div>
                            </blockquote>
                        </div>
                        <div className="item">
                            <blockquote>
                                <div className="row">
                                    <div className='client-name main-font'>Jacob Jones</div>
                                    <div className='client-role subtext-font'>Founder of the DAIVIET Company</div>
                                    <p className='subtext-font review-details'>
                                        “ you will get all the best. The team is working hard to give us plenty of resources for the job. Had a great experience working with them.
                                        Thanks very much.”
                                    </p>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <img className='quote-img' src='assets/images/quote.svg' alt=''></img>
                </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default ClientReview;