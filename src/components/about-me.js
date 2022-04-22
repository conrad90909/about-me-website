import React from 'react';
import SinceCounter from './since-counter';

function AboutMe() {

    return(
        <div>
            <section id="about-me">
                <div className="about-me-container">
                    <div className="about-me-text-container">
                        <h2>About Me</h2>
                        <p>
                        Hi! I am Conrad Hill, a software engineer with over 20 years of experience. 
                        I am passionate about the products I create, I enjoy designing, building and 
                        evolving clever solutions that make lives easier for users.
                        </p>
                        
                        <p>
                        I am always keep up to date with latest technologies, 
                        currently taking courses in more advanced ReactJS topics and Native iOS.    
                        </p>

                        <p>
                        In my free time I like to read about scientific developments,
                        mathematics, and computational mathematics. I also like to take my
                        chances of winning big.
                        </p>

                        <p>
                        I am always interested in hearing and discussing concepts and ideas so feel free to contact me if you’d like to connect..
                        </p>

                        <p>
                            <SinceCounter sinceDate="08-03-1998" />
                        </p>
                            
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe;