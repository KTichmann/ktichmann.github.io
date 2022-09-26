import React from "react"
import Fade from "react-reveal/Fade"
import Footer from "../components/Footer"

const Work = ({ title, id, sectionContent }) => {
    return (
        <div className="work-section" id={id}>
            <div className="container">
                <div className="">
                    <Fade bottom cascade>
                        <div className="header">
                            <h1 className="text-center">
                                {title}
                            </h1>
                        </div>
                    </Fade>
                    {sectionContent.map((content, index) => (
                        <Fade bottom key={index}>
                            <div className={index % 2 === 0 ? "flex flex-reverse" : "flex"}>
                                {
                                    index % 2 === 0 && content.para ? (
                                        <p className={content.imageSrc ? "left" : "w-100"} dangerouslySetInnerHTML={{__html: content.para}}></p>
                                    ) : ''
                                }
                                {content.imageSrc && (
                                    <img src={content.imageSrc} alt="work" />
                                )}
                                {
                                    index % 2 !== 0 && content.para ? (
                                        <p className={content.imageSrc ? "right" : "w-100"} dangerouslySetInnerHTML={{__html: content.para}}></p>
                                    ) : ''
                                }
                            </div>
                        </Fade>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Work
