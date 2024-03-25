import React from "react";
import {IconBrandInstagram,IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react"
import { useRouter } from "next/navigation";
export default function Footer() {
	const year = new Date().getFullYear();
    const router = useRouter()
	return (
		<div className="flex md:flex-row flex-col justify-between border-t-2 border-gray-400 mt-2 w-[75%] h-[50px] absolute bottom-0">
			<p className="mt-2 font-mono tracking-normal">
			Made with 🩷 by <a href="https://github.com/vishisht-dubey" target="_blank">vishisht-dubey</a>
			</p>
			<div className="mt-2 flex flex-row gap-2 mb-2">
                <IconBrandLinkedin size={28} className="cursor-pointer" target="_blank" onClick={()=>{router.push("https://www.linkedin.com/in/vishisht-dubey-648097228/")}}/>
                <IconBrandGithub size={28} className="cursor-pointer" target="_blank" onClick={()=>{router.push("https://github.com/vishisht-dubey")}}/>
                <IconBrandInstagram size={28} className="cursor-pointer" target="_blank" onClick={()=>{router.push("https://www.instagram.com/vishisht_dubey/")}}/>
			</div>
		</div>
	);
}
