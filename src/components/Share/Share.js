import React from "react";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";
import {
	FacebookIcon,
	LinkedinIcon,
	TelegramIcon,
	TwitterIcon,
	WhatsappIcon,
} from "react-share";

export default function Share({ url }) {
	return (
		<>
			<FacebookShareButton url={url}>
				<FacebookIcon size={31} round={true} />
			</FacebookShareButton>

			<LinkedinShareButton url={url}>
				<LinkedinIcon size={31} round={true} />
			</LinkedinShareButton>

			<TelegramShareButton url={url}>
				<TelegramIcon size={31} round={true} />
			</TelegramShareButton>

			<TwitterShareButton url={url}>
				<TwitterIcon size={31} round={true} />
			</TwitterShareButton>

			<WhatsappShareButton url={url}>
				<WhatsappIcon size={31} round={true} />
			</WhatsappShareButton>
		</>
	);
}
