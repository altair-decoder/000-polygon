import { useState, useEffect } from "react"
import abiJson from "../constants/DrrrtttAbi.json"
import { useContractRead } from "wagmi"
import { ethers } from "ethers"
export default function ERC721Mintednumber(props) {
    const [msupply, setMsupply] = useState("10000")
    const [tsupply, setTsupply] = useState("0")
    const [mintCostAmount, setMintCostAmount] = useState("0")
    const { data: totalSupplydata } = useContractRead({
        addressOrName: props.contractaddress,
        contractInterface: abiJson.abi,
        chains: props.chainid,
        functionName: "totalSupply",
        watch: true,
    })
    const { data: maxSupplydata } = useContractRead({
        addressOrName: props.contractaddress,
        contractInterface: abiJson.abi,
        chains: props.chainid,
        functionName: "maxSupply",
        watch: true,
    })
    useEffect(() => {
        if (totalSupplydata) {
            // console.log(totalSupplydata.toString())
            setTsupply(totalSupplydata.toString())
        }
    }, [totalSupplydata])
    useEffect(() => {
        if (maxSupplydata) {
            // console.log(maxSupplydata.toString())
            setMsupply(maxSupplydata.toString())
        }
    }, [maxSupplydata])

    // mint Cost
    const { data: mintCostData } = useContractRead({
        addressOrName: props.contractaddress,
        contractInterface: abiJson.abi,
        chains: props.chainid,
        functionName: "mintPrice",
        watch: true,
    })
    useEffect(() => {
        if (mintCostData) {
            setMintCostAmount(mintCostData.toString())
        }
        console.log("mintCost: " +mintCostData);
    }, [mintCostData])
    return (
        <div>
            <div className="flex justify-center outline rounded-2xl ...">
                <div className="font-bold text-sm text-[#6d8ac9]">
                    {ethers.utils.formatEther(mintCostAmount).toString()} Matic/item
                </div>
            </div>
            <div className="flex justify-center ...">
                <table className="border-separate border-spacing-2 ...">
                    <tbody>
                        <tr>
                            <td className="font-light text-xs">Minted</td>
                            <td className="font-bold text-xs">{tsupply}</td>
                            <td className="font-light text-xs">/</td>
                            <td className="font-light text-xs">MaxSupply</td>
                            <td className="font-bold text-xs">{msupply}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
