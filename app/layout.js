import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Portfolio of Harsha Abhinav Kusampudi - An Aspiring Data Scientist & AI Enthusiast.",
	description:
		"I’m a curious mind wired for patterns, logic, and the beauty of data. I speak fluent Python, think in models, and dream in matrices. Right now, I’m deepening my craft in machine learning, AI, and the science behind smart systems. Whether it’s numbers, noise, or nuance — I’m here to decode it all. Learning, experimenting, evolving — one algorithm at a time."
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToastContainer />
				<main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[90rem] xl:max-w-[90rem] 2xl:max-w-[100rem] text-white">
					<Navbar />
					{children}
					<ScrollToTop />
				</main>
				<Footer />
			</body>
			<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
		</html>
	);
}
