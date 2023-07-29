import React from "react"
export default function About() {
    return (
        <>
            <section
                className="roadmap bg-cover bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400"
                id="roadmap"
            >
                <h1 className="roadmap-title text-center">Roadmap </h1>
                <div className="timeline roadmap-container">
                    <div className="entry">
                        <div className="title">
                            <h3>Phase 1</h3>
                        </div>
                        <div className="body">
                            <p>Done &#10003;</p>
                            <ul>
                                <li>Dapp Launched Testnet</li>
                                <li>Setup NFTs collection</li>
                            </ul>
                        </div>
                    </div>
                    <div className="entry">
                        <div className="title">
                            <h3>Phase 2</h3>
                        </div>
                        <div className="body">
                            <p>We are here!</p>
                            <ul>
                                <li>Community Grow</li>
                                <li>Testing Dapp testnet</li>
                                <li>Partners Collaboration</li>
                            </ul>
                        </div>
                    </div>
                    <div className="entry">
                        <div className="title">
                            <h3>Phase 3</h3>
                        </div>
                        <div className="body">
                            <p>Coming soon</p>
                            <ul>
                                <li>Deploy Nft drop dapp on mainnet</li>
                                <li>Deployed Nft Collection</li>
                                <li>Airdrop for tester</li>
                            </ul>
                        </div>
                    </div>
                    <div className="entry">
                        <div className="title">
                            <h3>Phase 4</h3>
                        </div>
                        <div className="body">
                            <p>Coming soon</p>
                            <ul>
                                <li>Growing Foundation</li>
                                <li>Community guess features...</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="roadmap-container">
                    <div className="roadmap-imgs">
                        <div className="roadmap-img">
                            {/* <img src={image3} className="sliderimg" alt="" /> */}
                        </div>
                        <div className="roadmap-img">
                            {/* <img src={image2} className="sliderimg" alt="" /> */}
                        </div>
                        <div className="roadmap-img">
                            {/* <img src={image1} className="sliderimg" alt="" /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
