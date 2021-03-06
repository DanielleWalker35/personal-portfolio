import React from 'react'

function About() {
    return (
        <div className="profileWrapper">
            <div className="aboutPage">
                <p className="profileHeader">Profile</p>
                <p>Web developer</p>
                <div className="bioPicWrapper">
                    <div className="aboutMe">
                        <p className="pFirstHeading">About me</p>
                        <p>I am a full-stack web developer. I have experience in Angular, React, MongoDB and more. I love learning new techonologies and I am always up for a challenge! </p>
                    </div>
                    <div className="picOfMe"></div>
                    <div className="contactInfo">
                        <p className="pFirstHeading">Contact Info</p>
                        <p className="pHeading">Phone:</p>
                        <p>801-633-4338</p>
                        <p className="pHeading">Email:</p>
                        <p>yeller22@gmail.com</p>
                        <p className="pHeading">Location:</p>
                        <p>Lehi, Ut</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;