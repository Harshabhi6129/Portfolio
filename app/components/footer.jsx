// @flow strict
import Link from "next/link";

function Footer() {
	return (
		<div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
			<div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 lg:py-12">
				<div className="flex justify-center">
					<div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
				</div>
				<div className="flex flex-col items-center gap-3 text-center">
					<p className="text-sm">You&apos;ve reached the footer! Thanks for scrolling this far</p>
					<p className="text-sm">
						This portfolio is built using a template from
						<Link
							target="_blank"
							href="https://github.com/said7388/developer-portfolio/"
							className="text-[#16f2b3] hover:underline"
						>
							{" "}
							this GitHub repository
						</Link>
						.
					</p>
					<p className="text-xs text-gray-400 mt-2">
						© {new Date().getFullYear()} Harsha Abhinav. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
