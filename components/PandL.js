import React from 'react'

export const PurchaseAndLicensing = ({ hidden, setShowPandL }) => {
    return (
        <div id="terms-modal" className={hidden ? '' : 'hidden'}>
            <div className="modal">
                <h2>NFT PURCHASE AND LICENSE AGREEMENT</h2>
                <button onClick={() => setShowPandL(false)}>close</button>
                <div className="modal-wrap">
                    <div className="modal-section">
                        <h3>1. AWOO STUDIOS</h3>
                        <p>Awoo Studios, LDA., legal person no. 516717030, with registered office at Rua Fialho de Almeida n.º 14, 2.º Esq. – Escritório DD5, 1070-129, Avenidas Novas, Lisboa, Portugal (hereinafter, "Awoo Studios") owns and operates the website www.fanggang.io (hereinafter, "Website").

                            Awoo Studios is the proprietor of an NFT collection running on the Ethereum blockchain based on trait-generative art (hereinafter, "Fang Gang") in which there are 8888 NFTs with distinguished qualities and characteristics (hereinafter, "Fangsters"). Moreover, Awoo Studios is also the proprietor of another two (2) NFT collections, "PxlFangs" (in which the characters are named "PxlFangsters") and "Fang Gang Goodies".

                            The Website is merely informative. Website users are entirely responsible for the safety and management of their own private Ethereum wallets and validating all transactions and contracts generated by the Website before approval. Furthermore, as the Awoo Studios smart contract runs on the Ethereum network, there is no ability to undo, reverse, or restore any transactions.

                            This NFT Purchase and License Agreement (hereinafter, "Agreement") governs the purchase of Awoo Studios' NFTs and constitutes a legally binding agreement between Awoo Studios and each person, natural or legal ("user", "you" or "your"), who purchases an Awoo Studios' NFT.

                            PLEASE READ THIS AGREEMENT CAREFULLY AS IT CONTAINS IMPORTANT INFORMATION AND AFFECTS YOUR LEGAL RIGHTS. BY PURCHASING AN AWOO STUDIOS' NFT YOU ARE DEEMED TO HAVE READ, ACCEPTED, EXECUTED AND AGREED TO BE BOUND BY THIS AGREEMENT.</p>
                    </div>

                    <div className="modal-section">
                        <h3>2. DEFINITIONS</h3>
                        <p>For the purposes of this Agreement, the terms down below will have the following meanings:

                            Art means any design, drawings and any other artwork that may be associated with an Awoo Studios' NFT that you Own.

                            Awoo Studios' NFT(s) means any blockchain-tracked, non-fungible token, complying with the ERC-721 or other similar non-fungible token standard which has been created and developed by Awoo Studios and of which Awoo Studios is the proprietor, such as Fangsters, PxlFangsters or Fang Gang Goodies.

                            Derivative Works means any modification to the Art of your Purchased NFT including, without limitation, the shapes, designs, drawings, attributes, or color schemes.

                            Intellectual Property Rights/IP rights means any copyright, designs, trade mark rights, patent rights or any other intellectual property rights recognized in any country or jurisdiction in the world.

                            NFT/NFTs means any blockchain-tracked, non-fungible token, such as those conforming to the ERC-721 standard or other similar non-fungible token standard. NFTs represent a unique Collectible, such as Awoo Studios' Fangsters, PxlFangsters or Fang Gang Goodies.

                            Own means, with respect to an Awoo Studios' NFT, an Awoo Studios' NFT that you have purchased or otherwise rightfully acquired from a legitimate source, where proof of such purchase is recorded on the relevant blockchain.

                            Purchased NFT means an Awoo Studios' NFT that you Own.

                            Smart Contract means a computer programme that operates on distributed ledger-based technologies and whose execution automatically binds two or more parties based on effects predefined by them.</p>
                    </div>

                    <div className="modal-section">
                        <h3>3. OWNERSHIP</h3>
                        <p>Awoo Studios'NFTs are protected under Intellectual Property Rights.

                            You acknowledge and agree that Awoo Studios owns all legal rights, titles and interests in and to the Art, and all IP rights therein. The rights that you have in and to the Art are limited to those described in this License. Awoo Studios reserves all rights in and to the Art not expressly granted to you in this License.

                            If you acquire an Awoo Studios'NFTs, you own all personal property rights to that Purchased NFT (e.g., the right to freely sell, transfer, or otherwise dispose of that Purchased NFT). Such rights, however, do not include the ownership of the Intellectual Property Rights in the Purchased NFT Art. Such rights are licensed pursuant to this Agreement, as prescribed below.</p>
                    </div>

                    <div className="modal-section">
                        <h3>4. LICENSE TERMS AND PERMITTED USE</h3>
                        <p>Subject to your continued compliance with the terms of this Agreement, Awoo Studios grants you a worldwide, non-exclusive, transferable, license to use your Purchased NFT.

                            You have broad rights to use your Purchased NFT and the Art associated with it. By acquiring a Fangster, for instance, you will own commercial rights to it as long as you continue to own and control the ERC-721 token. You may assign these rights to other commercial projects, but any future transfer of your ERC-721 token will be subject to those rights already assigned.

                            In the case of Awoo Studios' NFTs, you can do any of the following:

                            Use your Purchased NFT for your own personal use, including, on social media and marketplaces that allows the purchase and sale of your Purchased NFT;

                            Use your Purchased NFT for any commercial use, including, the purpose of commercializing your Own merchandise that includes, contains, or consists of the Art for your Purchased NFT;

                            Create derivative works as long as you own the ERC-721 token at the time of creation and assign such rights to other artists, creatives, or third-party projects given that you Own the ERC-721 token at the time you grant such permissive use.

                            The license granted in this Agreement applies only to the extent that you continue to Own the applicable purchased Awoo Studios' NFTs. If at any time you sell, trade, donate, give away, transfer, or otherwise dispose of your Awoo Studios' NFTs, for any reason, the license granted in this Agreement will immediately transfer to the new Owner with respect to those NFTs without the requirement of notice, and you will have no further rights in or to the Art for those NFTs.</p>
                    </div>

                    <div className="modal-section">
                        <h3>5. RESTRICTIONS</h3>
                        <p>You agree that you may not, nor permit any third party to do or attempt to do any of the foregoing without Awoo Studio's express prior written consent in each case:

                            Use the name "Fang Gang", "Fangsters", "PxlFangs" or "PxlFangsters" for any commercial use or with a commercial intent;

                            Attempt to trademark, copyright, or otherwise acquire any Intellectual Property Rights in or to the Art for your Purchased NFT;

                            Use your Purchased NFT and its Art in connection with images, videos, or other forms of media that depict hatred, intolerance, violence, cruelty, racism, pornography or anything else that could reasonably be found to constitute hate speech or otherwise infringe upon the rights of others or be deemed to be illegal.

                            Use your Purchased NFT and its Art in connection with political or religious views or otherwise political or religious content or propaganda;

                            Create Derivative Works of your Purchased NFT that mimic traits of any other Awoo Studios' NFT that you don't Own or that infringe upon third-party rights.</p>
                    </div>

                    <div className="modal-section">
                        <h3>6. WHERE AND HOW TO PURCHASE</h3>
                        <p>You may acquire an Awoo Studios' NFT by connecting an electronic wallet compatible with the NFT standard on the Ethereum network, such as the MetaMask electronic wallet, and minting an Awoo Studios' NFT through the Fang Gang Smart Contract: https://etherscan.io/address/0x9d418C2Cae665D877F909a725402EbD3A0742844

                            or the PxlFangs Smart Contract: https://etherscan.io/address/0x30917a657ae7d1132bdca40187d781fa3b60002f

                            MetaMask and other electronic wallets allow you to purchase, store, and engage in transactions using Ethereum cryptocurrency (hereinafter "ETH"). You will not be able to engage in any Awoo Studios' NFT transactions other than through MetaMask, or other Ethereum-compatible browsers.

                            At the moment, you may also acquire an Awoo Studios' NFT at OpenSea, Rarible, Looksrare, Niftygateway and NFTx marketplaces. In such cases, website terms of use and conditions (hereinafter, "T&C") of the referred marketplaces will also apply to you. Please read them carefully before purchasing an Awoo Studios' NFT through the above-mentioned platforms.</p>
                    </div>

                    <div className="modal-section">
                        <h3>7. FEES, ROYALTIES, TAXES AND OTHER CHARGES</h3>
                        <p>7.1. Fees. Creating, buying, selling or transferring Collectibles may be subject to fees, royalties, taxes and other charges. If you elect to purchase or trade an Awoo Studios' NFT, any financial transactions that you engage in will be conducted mainly through the Ethereum network. We will have no insight into or control over these payments or transactions, nor do we have the ability to reverse any transactions. With that in mind, we will have no liability to you or to any third party for any claims or damages that may arise as a result of any transactions that you engage in through the Ethereum network or by using smart contracts. Ethereum requires the payment of a transaction fee (hereinafter, "Gas Fee") for every transaction that occurs on the Ethereum network. The Gas Fee funds the network of computers that run the decentralized Ethereum network. This means that you will need to pay a Gas Fee for each transaction that occurs via Ethereum network.

                            7.2. Royalties. You also acknowledge and agree that Awoo Studios shall receive 5% of every subsequent sale of any Awoo Studios'NFTs you might own (hereinafter, "Royalty"). Awoo Studios has the right to collect Royalties for Awoo Studios' NFT sales in perpetuity and may use those funds in any manner Awoo Studios sees fit. As such, if you sell an Awoo Studios' NFT on a third-party NFT marketplace, the subsequent purchaser may confirm the Awoo Studios' NFT authenticity on Discord or Fang Gang Linktree account.

                            7.3. Taxes. You also acknowledge and agree that you will be solely responsible to pay any and all sales, use, value-added, transfer and other taxes, duties, and assessments now or hereafter claimed or imposed by any governmental authority (hereinafter, "Taxes") associated with your use of the Ethereum network (including, without limitation, any Taxes that may become payable as the result of your ownership or transfer of any of your Purchased NFTs). You agree that you are solely responsible for determining what, if any, Taxes apply to your transactions and to withhold, collect, report and remit the correct amounts of Taxes to the appropriate taxing authorities.</p>
                    </div>

                    <div className="modal-section">
                        <h3>8. RISKS, DISCLAIMERS, LIMITATIONS OF LIABILITY AND INDEMNIFICATION</h3>
                        <p>8.1. Risks. There are risks associated with using an internet-based currency, including, but not limited to, the risk of hardware, software and internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your wallet. You accept and acknowledge that Awoo Studios will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the Ethereum network, however caused. You acknowledge and agree that blockchain technologies, including, tokens, cryptocurrencies, stablecoins, smart contracts, and others, are novel, experimental, and speculative, and therefore there is significant uncertainty regarding the operation and effects and risks thereof. You also acknowledge and agree that prices of blockchain assets are extremely volatile. Fluctuations in the price of other digital assets could materially and adversely affect the value of your Purchased NFT, which may also be subject to significant price volatility. We cannot guarantee that any purchasers of Awoo Studios'NFTs will not lose money. Moreover, you also acknowledge and agree that blockchain technologies and digital assets are subject to many legal and regulatory uncertainties and Awoo Studios'NFTs could be adversely impacted by one or more regulatory or legal inquiries, actions, suits, investigations, claims, fines or judgments, which could impede or limit your ability to continue the use and enjoyment of such assets and technologies.

                            8.2. Disclaimers. This Website and its content are provided on an "as is" and "as available" basis without warranties or conditions of any kind, either express or implied. Awoo Studios makes no warranty that this Website will (i) meet your requirements; (ii) be available on an uninterrupted, timely, secure, or error-free basis; or (iii) be accurate, reliable, complete or safe. We will not be liable for any loss of any kind from any action taken or taken in reliance on material or information, contained on this Website. Awoo Studios does not represent or warrant that the Website content is accurate, complete, reliable, current or error-free. While we attempt to make your access to and use of this Website and its content safe, we cannot and do not represent or warrant that the Website or its content are free of viruses or other harmful components. We cannot guarantee the security of any data that you disclose online. You accept the inherent security risks of providing information and dealing online over the internet and will not hold us responsible for any breach of security.

                            8.3. Limitations of liability. You acknowledge and agree that Awoo Studios will not be liable to you or to any third party for any indirect damages which you may incur, howsoever caused and under any theory of liability, including, without limitation, any loss of profits (whether incurred directly or indirectly), loss of goodwill or business reputation, loss of data, cost of procurement of substitute goods or services, or any other intangible loss. You also acknowledge and agree to hold Awoo Studios harmless for any losses you may incur as a consequence of transferring your Purchased NFT. These potential losses include any Gas Fees for failed transactions, any excessive Gas Fees charged due to website or smart contract bugs, and any loss of your Purchased NFT due to Website or smart contract bugs.

                            8.4. Indemnification. You acknowledge and agree to defend, indemnify, compensate, reimburse and hold harmless Awoo Studios (and each of its directors, members and employees) from any claim, demand, action, damage, loss, cost or expense, including without limitation reasonable attorneys’ fees, arising out or relating to (i) your use of, or conduct in connection with a Purchased NFT; (ii) your violation of this Agreement or any other applicable policy or contract of Awoo Studios; or (iii) your violation of any rights of any other person or entity.</p>
                    </div>

                    <div className="modal-section">
                        <h3>9. GOVERNING LAW AND DISPUTE RESOLUTION</h3>
                        <p>This Agreement shall be governed by and construed and interpreted in accordance with Portuguese law. Any dispute arising from the use of this Website or an Awoo Studios' NFT purchase, including, without limitation, your access or use of the Website or the smart contract shall be governed by Portuguese law and shall be submitted to the exclusive jurisdiction of the Portuguese courts.</p>
                    </div>
                    <div className="modal-section">
                        <h3>10. MISCELLANEOUS</h3>
                        <p>10.1. Future Development. The roadmap displayed in this Website is a plan of intentions and is not binding. While we plan to work towards the announced goals to keep on developing the project, we have no liability regarding future developments. You acknowledge and agree that your Purchased NFT is all you are guaranteed. Any future benefits (e.g., Airdrops) are not to be taken into consideration with your purchase. You agree that you are not relying on any future commitments by Awoo Studios when acquiring an Awoo Studios' NFT.

                            10.2. Force Majeure. Awoo Studios shall not incur in any liability or penalty for not performing any act or fulfilling any duty or obligation hereunder or in connection with the matters contemplated hereby by reason of any occurrence that is not within its control, including any provision of any present or future law or regulation or any act of any governmental authority, any act of God or war or terrorism, any epidemic or pandemic, or the unavailability, disruption or malfunction of the internet, the world wide web or any other electronic network, the Ethereum network or blockchain or any aspect thereof, or any consensus attack, or hack, or denial-of-service or other attack on the foregoing or any aspect thereof, or on the other software, networks and infrastructure that enables Awoo Studios to provide Awoo Studios' NFT.

                            10.3. Children. Awoo Studios' NFTs are not targeted towards children. You affirm that you are over the age 18 or the legal age of majority where you reside if that jurisdiction has an older age of majority. If you are under the referred age, you acknowledge and agree that this Website and Awoo Studios' NFTs are not intended to you. Please refrain from using this Website and purchasing an Awoo Studios' NFT in such case.

                            10.4. Privacy and Data Protection. You acknowledge and agree that the Ethereum blockchain network is a public blockchain, and all of your transaction history initiated through the platform will be made public. You also understand that, by playing Fang Runner and connecting your Ethereum Wallet, your wallet address, scores, location and session times will be logged to prevent cheating. Fang Gang may work with third-party apps, such as Discord or Collab.Land, which collect and store user data. For more information on how Awoo Studios process your personal data in relation to the use of this Website, please see Awoo Studios Privacy Policy, available here.

                            10.5. Amendments and Modifications. This Agreement may only be amended, modified, altered or supplemented by Awoo Studios. Awoo Studios reserves the right, in its sole and absolute discretion, to amend, modify, alter or supplement this Agreement from time to time. The most current version of the Agreement will be posted on the Website. Any changes or modifications will be effective immediately upon the modified Agreement being posted to the Website. You are responsible for reviewing and becoming familiar with any such modifications. You will not receive specific notice of such changes or modifications. If you do not agree to any such modifications, you must immediately stop using this Website and purchasing Awoo Studios' NFTs.</p>
                    </div>
                    <hr />
                    <span id="last-updated">Last updated: <strong>19 February 2022</strong></span>
                </div>
            </div>
        </div>
    )
}
