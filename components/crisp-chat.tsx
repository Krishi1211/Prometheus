"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
	useEffect(() => {
		if (process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID) {
			Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID);
		} else {
			console.error("CRISP WEBSITE ID is not defined.");
		}
	}, []);

	return null;
};
