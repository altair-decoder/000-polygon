import { useState, useEffect } from "react"
import { partnerlist } from "../constants/partnerslist"
export default function Partnerscomponent() {
    const [partnerInfo, setpartnerInfo] = useState("")
    useEffect(() => {
        pullpartnerInfo(partnerlist)
    }, [])
    let displayData
    async function pullpartnerInfo(e) {
        displayData = await e.map(function (msg) {
            return (
                <div key={msg.id} className="mt-4 mb-4">
                    <a href={msg.link}>
                        <div className="ml-4 mr-4 mt-4 mb-4 text-white">
                            <div className="flex justify-center items-center">
                                <img
                                    className="border-2 border-white rounded-2xl outline-2"
                                    src={msg.pic}
                                    height="50"
                                    width="50"
                                ></img>
                            </div>
                            <div className="font-bold text-xs">{msg.name}</div>
                        </div>
                    </a>
                </div>
            )
        })
        setpartnerInfo(displayData)
    }
    return (
        <div>
            <div className="mt-8 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-3 items-center justify-center text-center">
            {/* <div className="mt-8 md:flex-wrap-reverse items-center justify-center text-center"> */}
            {partnerInfo}
            </div>
        </div>
    )
}
