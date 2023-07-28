import React from 'react'
import "./Style.css";
import NavBar from './Navbar.js'
import { Card, Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
      <NavBar/>
      <div id="block">
          <div id = "FirstBlock">
              
                    <div id ="textblock">
                        <p> Sejal Goyal Krishna Goyal</p>
                        <h2>We are consulting your Business Finances</h2>
                        <p>
                          Consulting finances involves providing expert advice and guidance to individuals or businesses on various financial.Financial consultants are professionals with a deep understanding of financial markets, investment   
                        </p>
                        <button class="btn btn-primary" type="submit">Start Now</button>
                    </div>
                    <div id="imgblock">
                        <img src="https://thumbs.dreamstime.com/z/two-women-standing-back-to-back-against-window-formal-clothes-50007846.jpg?w=992" />
                    </div>
          </div>
        <div id="SecondBlock">
                    <div id="imgtext">
                        <div id="txt">
                            <h2>We have many years of experience in consutent Business</h2>
                            <p id="para">
                                Consulting finances involves providing expert advice and guidance to individuals or businesses on various financial.Financial consultants are professionals with a deep understanding of financial markets, investment strategies
                            </p>
                            <button class="btn btn-primary" type="submit">Know More</button>

                        </div>
                        <img src="https://img.freepik.com/premium-photo/two-young-women-leaders-dressed-black-suit-office-one-woman-standing-arms-crossed-other-woman-sitting-table-looking-camera-business-meeting_91014-5998.jpg?w=996"/>
                    </div> 
                    <div id="iconBlock">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-fill" viewBox="0 0 16 16">
                                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                            </svg>
                        <p>Construction</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-exclamation-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0Zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                            </svg>
                        <p>DummyLogo</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ev-station-fill" viewBox="0 0 16 16">
                                <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V9c0-.258-.104-.377-.357-.635l-.007-.008C13.379 8.096 13 7.71 13 7V4a.5.5 0 0 1 .146-.354l.5-.5a.5.5 0 0 1 .708 0l.5.5A.5.5 0 0 1 15 4v8.5a1.5 1.5 0 1 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm2 .5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5Zm2.631 9.96H4.14v-.893h1.403v-.505H4.14v-.855h1.49v-.54H3.485V13h2.146v-.54Zm1.316.54h.794l1.106-3.333h-.733l-.74 2.615h-.031l-.747-2.615h-.764L6.947 13Z" />
                            </svg>
                            <p>RandomLogo</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fan" viewBox="0 0 16 16">
                                <path d="M10 3c0 1.313-.304 2.508-.8 3.4a1.991 1.991 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8.368 8.368 0 0 0-.491-.454A5.976 5.976 0 0 1 8 2c.691 0 1.355.117 1.973.332.018.219.027.442.027.668Zm0 5c0 .073-.004.146-.012.217 1.018-.019 2.2-.353 3.331-1.006a8.39 8.39 0 0 0 .57-.361 6.004 6.004 0 0 0-2.53-3.823 9.02 9.02 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254Zm-.137.728a2.007 2.007 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377.2.116.402.222.605.317a5.986 5.986 0 0 0 2.053-4.111c-.208.073-.421.14-.641.199-1.264.339-2.493.356-3.482.11ZM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391 0 .23.01.457.027.678A5.99 5.99 0 0 0 8 14c.94 0 1.83-.216 2.623-.602a8.359 8.359 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96-.094.013-.191.02-.29.02ZM6 8c0-.08.005-.16.014-.239-1.02.017-2.205.351-3.34 1.007a8.366 8.366 0 0 0-.568.359 6.003 6.003 0 0 0 2.525 3.839 8.37 8.37 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A1.988 1.988 0 0 1 6 8Zm-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8.363 8.363 0 0 0-.594-.312 5.987 5.987 0 0 0-2.06 4.106c.206-.074.418-.14.637-.199ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z" />
                            </svg>
                            <p>RandomBrand</p>
                        </div>
                    </div>

          </div>
        <div id="ThirdBlock">
                    <div id="servicesBlock">
                         <h2>Our Services</h2>
                        <hr class="dashed-line" /> 
                        <p> services offered can vary based on the consulting firm's expertise their clients.
                        </p>
                    </div>
                    <div id="cards">
                        <div class="card">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
                                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z" />
                            </svg>
                            <p class="cardp">Financial Consulting</p>
                            <p class="about">Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and engage a specific target audience. </p>
                        
                        </div>  
                        <div class="card" id="card2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-collection-play-fill" viewBox="0 0 16 16">
                                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z" />
                            </svg>
                            <p class="cardp">Content Marketing</p>
                            <p class="about">Financial consulting involves providing expert guidance and advice to individuals, businesses, or organizations on various financial matters. </p>
                        </div>
                        <div class="card">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-back-fill" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z" />
                            </svg>
                            <p class="cardp">Financial Advice</p>
                            <p class="about">Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and engage a specific target audience. </p>
                        </div>
                     </div>  
                    <button id="but" class="btn btn-primary" type="submit">All Services</button>
                </div>
                <div class="footer">
                <div class="sentence">
                        <h5 >Subscribe our newsletter to be more updated</h5>
                        <p> please subscribe our channel and be updated</p>
                </div>
                <div class="form">
                        <input type="email" id="form5Example2" class="form-control" placeholder='Enter your mail' />
                        <button id="Button" class="btn btn-primary" type="submit">Subscribe</button>
                 </div>

                </div>
            </div>
        </div>
  )
}

export default Home
