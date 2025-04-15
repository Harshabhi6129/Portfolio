import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
	const res = await fetch(
		`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${personalData.devUsername}`
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();

	if (!data.items) return [];

	// Extract first image from description or content
	const extractImage = (html) => {
		const match = html.match(/<img.*?src=["'](.*?)["']/);
		return match ? match[1] : null;
	};

	const filtered = data.items
		.map((item) => ({
			title: item.title,
			link: item.link,
			image: extractImage(item.description || item.content), // Extract image if exists
			pubDate: item.pubDate,
			cover_image: extractImage(item.description || item.content),
			public_reactions_count: item.public_reactions_count || 0,
			comments_count: item.comments_count || 0
		}))
		.filter((item) => item.image) // Only keep blogs with images
		.sort(() => Math.random() - 0.5); // Shuffle blogs

	console.log(filtered);
	return filtered;
}

export default async function Home() {
	const blogs = await getData();

	return (
		<div suppressHydrationWarning>
			<HeroSection />
			<AboutSection />
			<Experience />
			<Skills />
			<Projects />
			<Education />
			<Blog blogs={blogs} />
			<ContactSection />
		</div>
	);
}
