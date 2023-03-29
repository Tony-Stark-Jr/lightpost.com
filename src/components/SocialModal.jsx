import React, { useEffect } from 'react'
import { FacebookShareButton, TwitterShareButton, FacebookShareCount, FacebookMessengerShareButton, FacebookMessengerIcon, FacebookIcon, TwitterIcon, TelegramShareButton, TelegramIcon, WhatsappShareButton, WhatsappIcon, InstapaperShareButton, InstapaperIcon } from "react-share";


function SocialModal({ link, setShareModal }) {

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';
        }
    })


    return (
        <>
            <div className="modal-wrapper" onClick={() => { setShareModal(false) }}></div>
            <div className="modal-container">
                <FacebookShareButton
                    url={link} onClick={() => setShareModal(false)}>
                    <FacebookIcon size={24} round={true} bgStyle={{ fill: "white" }} iconFillColor={"blue"} />
                </FacebookShareButton>

                <FacebookMessengerShareButton
                    url={link} onClick={() => setShareModal(false)}>
                    <FacebookMessengerIcon size={24} round={true} />
                </FacebookMessengerShareButton>

                <TelegramShareButton
                    url={link} onClick={() => setShareModal(false)}>
                    <TelegramIcon size={24} round={true} />
                </TelegramShareButton>

                <WhatsappShareButton
                    url={link} onClick={() => setShareModal(false)}>
                    <WhatsappIcon size={24} round={true} />
                </WhatsappShareButton>

                <TwitterShareButton
                    url={link} onClick={() => setShareModal(false)}>
                    <TwitterIcon size={24} round={true} />
                </TwitterShareButton>

                <InstapaperShareButton
                    url={link} onClick={() => setShareModal(false)}>
                    <InstapaperIcon size={24} round={true} />
                </InstapaperShareButton>

            </div>

        </>

    )


}

export default SocialModal