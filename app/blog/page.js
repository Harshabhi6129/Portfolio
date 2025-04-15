// @flow strict

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

async function getBlogs() {
	const res = await fetch(
		`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${personalData.devUsername}`
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();
	return data;
}

async function page() {
	const blogsData = await getBlogs();
	const blogs = blogsData.items || [];

	return (
		<div className="py-8">
			<div className="flex justify-center my-5 lg:py-8">
				<div className="flex  items-center">
					<span className="w-24 h-[2px] bg-[#1a1443]"></span>
					<span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
						All Blog
					</span>
					<span className="w-24 h-[2px] bg-[#1a1443]"></span>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
				{blogs.map((blog, i) => {
					// Extract image from description
					const match = blog.description.match(/<img[^>]+src="([^">]+)"/);
					const imageUrl = match ? match[1] : null;

					// If an image is found, pass it as `cover_image`
					return <BlogCard blog={{ ...blog, cover_image: imageUrl }} key={i} />;
				})}
			</div>
		</div>
	);
}

export default page;
