import Partnerscomponent from "../components/Partnerscomponent"
import { useState, useEffect } from "react"
import abiJson from "../constants/erc721abi.json"
import { Collections } from "../constants/carousel"
import Slider from "react-slick"
// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useToasts } from "react-toast-notifications"
import {
    usePrepareContractWrite,
    useAccount,
    useContractRead,
    useNetwork,
    useSwitchNetwork,
    useContractWrite,
    useWaitForTransaction,
} from "wagmi"
import { ethers } from "ethers"
import styled from "styled-components"
import Carousel from "react-grid-carousel"

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    width: 100%;
`

const Row = styled.div`
    max-width: 1100px;
    padding: 0 50px;
    margin: 50px auto;

    @media screen and (max-width: 670px) {
        padding: 0;
    }
`

const ArrowBtn = styled.span`
    display: inline-block;
    position: absolute;
    top: 50%;
    right: ${({ type }) => (type === "right" ? "-40px" : "unset")};
    left: ${({ type }) => (type === "left" ? "-40px" : "unset")};
    width: 45px;
    height: 45px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
    cursor: pointer;

    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: ${({ type }) =>
            type === "right"
                ? "translate(-75%, -50%) rotate(45deg)"
                : "translate(-25%, -50%) rotate(-135deg)"};
        width: 10px;
        height: 10px;
        border-top: 2px solid #666;
        border-right: 2px solid #666;
    }

    &:hover::after {
        border-color: #333;
    }
`

const Card = styled.div`
    margin: 2px;
    border-radius: 6px;
    border: 1px solid #eaeaea;
    overflow: hidden;
    cursor: pointer;
    transition: box-shadow 0.25s;

    :hover {
        box-shadow: 2px 2px 6px 0px #000000bd;
    }
`

const Img = styled.div`
    height: 160px;
    margin-bottom: 4px;
    background-image: ${({ img }) => `url(${img})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Title = styled.div`
    margin: 0 10px 10px;
    font-size: 15px;
    font-weight: bold;
`

const Star = styled.div`
    float: left;
    margin: 10px;
    color: #26bec9;
    font-size: 15px;
`

const Price = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #999;
    float: right;
    margin: 10px;

    span {
        font-size: 15px;
        color: #26bec9;
    }
`

const Code = styled.pre`
    max-width: 1100px;
    margin: 15px auto;
    background: lightblue;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
`

const Reference = styled.div`
    margin: 50px auto;
    width: 100%;
    max-width: 1100px;
    border-top: 1px solid #666;

    img {
        width: 100%;
    }
`
export default function Home() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        className: "center",
        centerMode: true,
        centerPadding: '50px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    // const [msupply, setMsupply] = useState("10000")
    // const [tsupply, setTsupply] = useState("0")
    const [mintCostAmount, setMintCostAmount] = useState("0")
    const { address } = useAccount()
    const { addToast } = useToasts()
    const { chain } = useNetwork()
    const [collectiontype, setcollectiontype] = useState(1)
    const [chainnow, setchainnow] = useState("")
    const [messagejson, setMessagejson] = useState("")
    const { switchNetwork } = useSwitchNetwork()

    // const { data: totalSupplydata } = useContractRead({
    //     addressOrName: Collections.contractaddress,
    //     contractInterface: abiJson.abi,
    //     chains: Collections.chain,
    //     functionName: "totalSupply",
    //     watch: true,
    // })
    // const { data: maxSupplydata } = useContractRead({
    //     addressOrName: Collections.contractaddress,
    //     contractInterface: abiJson.abi,
    //     chains: Collections.chain,
    //     functionName: "maxSupply",
    //     watch: true,
    // })
    // useEffect(() => {
    //     if (collectiontype == 1) {
    //         pullerc721Json(Collections)
    //     }
    // }, [])
    // useEffect(() => {
    //     if (chain) {
    //         if (chain["id"] == 1) {
    //             if (collectiontype == 1) {
    //                 pullerc721Json(Collections)
    //             }
    //         }
    //         if (chain["id"] == 5) {
    //             if (collectiontype == 1) {
    //                 pullerc721Json(Collections)
    //             }
    //         }
    //         if (chain["id"] == 80001) {
    //             if (collectiontype == 1) {
    //                 pullerc721Json(erc721mumbai)
    //             }
    //         }
    //     }
    // }, [chain])
    // useEffect(() => {
    //     if (switchNetwork) {
    //         setchainnow(chain["id"])
    //         if (chain["id"] == 1) {
    //             if (collectiontype == 1) {
    //                 pullerc721Json(Collections)
    //             }
    //             // console.log(1)
    //         }
    //         if (chain["id"] == 5) {
    //             if (collectiontype == 1) {
    //                 pullerc721Json(Collections)
    //             }
    //             // console.log(1)
    //         }
    //     }
    // }, [chain])

    // useEffect(() => {
    //     if (totalSupplydata) {
    //         // console.log(totalSupplydata.toString())
    //         setTsupply(totalSupplydata.toString())
    //     }
    // }, [totalSupplydata])
    // useEffect(() => {
    //     if (maxSupplydata) {
    //         // console.log(maxSupplydata.toString())
    //         setMsupply(maxSupplydata.toString())
    //     }
    // }, [maxSupplydata])

    useEffect(() => {}, [])
    // let displayData
    // async function pullerc721Json(e) {
    //     console.log(e)
    //     displayData = await e.map(function (msg) {
    //         return (
    //             <Carousel cols={1} rows={1} gap={10} loop hideArrow scrollSnap autoplay={1000}>
    //                 <Carousel.Item>
    //                     {/* <img width="100%" src="https://picsum.photos/800/600?random=1" /> */}
    //                     <img
    //                         className="border-2 border-white rounded-2xl outline-3 mb-3"
    //                         src={msg.pic}
    //                         height="300"
    //                         width="300"
    //                     ></img>
    //                 </Carousel.Item>
    //             </Carousel>
    //             // <div
    //             //     key={msg.id}
    //             //     className="ml-4 mr-4 mt-4 mb-4 text-[#6d8ac9] font-Prompt rounded-2xl outline"
    //             // >
    //             //     <div className="ml-4 mr-4 mt-4 mb-4">
    //             //         <div className="ml-4 mr-4 mt-4 mb-4 text-md font-semibold text-[#3f5fa2]">{msg.name}</div>
    //             //         <div className="flex justify-center items-center">
    //             //             <img
    //             //                 className="border-2 border-white rounded-2xl outline-3 mb-3"
    //             //                 src={msg.pic}
    //             //                 height="300"
    //             //                 width="300"
    //             //             ></img>
    //             //         </div>
    //             //     </div>
    //             // </div>
    //         )
    //     })
    //     setMessagejson(displayData)
    // }
    return (
        <div className="scroll-smooth">
            <div className="h-full ...">
                <div className="items-center justify-items-center bg-cover bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 relative">
                    <div className="carouselContainer">
                        <p className="text-[#fff] text-5xl mb-10 sm:text-3xl md:text-5xl xl:text-5xl">
                            Available collections
                        </p>
                        {/* <Container>
                        <div className="carouselContainer">
                            <h1 className="text-[#fff] text-5xl mb-10">Available collections</h1>
                            <Carousel
                                // scrollSnap
                                loop
                                hideArrow
                                autoplay={2500}
                                cols={3}
                                rows={1}
                                gap={5}
                                responsiveLayout={[
                                    {
                                        breakpoint: 1200,
                                        cols: 3,
                                    },
                                    {
                                        breakpoint: 990,
                                        cols: 1,
                                    },
                                ]}
                                mobileBreakpoint={767}
                                arrowRight={<ArrowBtn type="right" />}
                                arrowLeft={<ArrowBtn type="left" />}
                            >
                                {Collections.map(({ name, symbol, pic, opensea }, i) => (
                                    <Carousel.Item key={i}>
                                        <img
                                            className="border-2 border-white rounded-2xl outline-3 mb-3"
                                            src={pic}
                                            height="300"
                                            width="300"
                                        ></img>
                                        <p className="text-[#fff] text-bold ml-3">{name}</p>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </Container> */}
                        <Slider {...settings}>
                            {Collections.map(({ name, symbol, pic, opensea }, i) => (
                                <div className="justify-ceter mx-auto" key={i}>
                                    <img
                                        className="imgSlide border-2 border-white rounded-2xl outline-3 mb-3 sm:h-40 sm:w-40 md:h-64 md:w-64 lg:h-72 lg:w-72"
                                        src={pic}
                                    ></img>
                                    <p className="text-[#fff] text-bold ml-3">{name}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
