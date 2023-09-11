import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <>
          <section class="page-section bg-primary text-white mt-5 mb-0" id="about">
            <div class="container">
              
                <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
              
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
              
                <div class="row">
                    <div class="col-lg-4 ms-auto"><p >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                    <div class="col-lg-4 me-auto"><p >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p></div>
                </div>
              
              
            </div>
        </section>
      </>
    );
  }
}

export default About;
