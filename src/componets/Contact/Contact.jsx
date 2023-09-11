import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <>
          <section class="page-section" id="contact">
            <div class="container">
          
                <div class="row justify-content-center">
                    <div class="col-sm-2 col-sm-7">
                    
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                          
                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">  userName</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="number" type="number" placeholder="userAge"  data-sb-validations="required"></input>
                                <label for="message">userAge</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                          
                            <div class="form-floating mb-3">
                                <input class="form-control" id="password" type="password" placeholder="password" data-sb-validations="required" />
                                <label for="password">password</label>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                      
                          
                          
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                          
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                          
                            <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }
}

export default Contact;
