import React from "react"
import Image from "next/image"
export default function About() {
    return (
        <section className="roadmap py-16 md:py-20 lg:py-28 bg-cover bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-1/2">
                        <div
                            className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                            data-wow-delay=".15s"
                        >
                            <Image
                                className="border-2 border-white rounded-2xl outline-3 mb-3 shadow-xl"
                                src="/images/VerifyOpensea.png"
                                height="450"
                                width="600"
                            />
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                            <div className="mb-9">
                                <h3 className="mb-4 text-xl font-bold text-[#fff] dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                    Verify on openseatestnet
                                </h3>
                                <p className="text-sm font-medium leading-relaxed text-body-color sm:text-sm sm:leading-relaxed text-[#fff]">
                                    some time ago we have fulfilled the requirements to get a
                                    verify bedge on openseatestnet.
                                </p>
                            </div>
                            <div className="mb-9">
                                <h3 className="mb-4 text-xl font-bold text-[#fff] dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                    About Nft Drop Testnet
                                </h3>
                                <p className="text-sm font-medium leading-relaxed text-body-color sm:text-sm sm:leading-relaxed text-[#fff]">
                                    Nft Drop Dapp is a platform for minting nft on a testnet
                                    network, it is intended for a learning stage for new people to
                                    nft, where they can try minting, instead of using real funds.
                                    they can use the testnet funds obtained from the faucet,
                                    thereby minimizing losses due to unwanted errors.
                                </p>
                            </div>
                            <div className="mb-1">
                                <h3 className="mb-4 text-xl font-bold text-[#fff] dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                    Future plans and intentions
                                </h3>
                                <p className="text-sm font-medium leading-relaxed text-body-color sm:text-sm sm:leading-relaxed text-[#fff]">
                                    We plan to make nft drop as feature rich as mint nft
                                    finder directly on blockchain, make exchange between nfts
                                    interesting, where user can exchange nft A with Nft B, if nft A
                                    price is more expensive or vice versa, then nft owner will be
                                    it's cheaper to have to add some funds according to the
                                    agreement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
