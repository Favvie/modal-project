<template>
	<!-- <div class="container"> -->

	<main>
		<article class="hero">
			<div class="orange-bg">
				<img src="../assets/rocket.png" alt="" />
				<h1>Optimizing CSS for faster page loads</h1>
			</div>
			<section class="text-section">
				<div>
					<span class="tag">Front-end</span>
					<span class="time"> . 1 Hour Ago</span>
					<h2 class="heading">Optimizing CSS for faster page loads</h2>
					<p>
						Not long ago I decided to improve the loading times of my website.
						It already loads pretty fast, but I knew there was still room for
						improvement and one of them was CSS loading. I will walk you through
						the process and show you how you can improve your load times as
						well.
					</p>
					<p>
						To see how CSS affects the load time of a webpage we first have to
						know how the browser converts an HTML document into a functional
						webpage...
					</p>

					<router-link class="readFull" to="/details">
						<!-- <span>3 Min Read</span> -->
						3 Min Read
						<button>Read Full <img src="../assets/arrow.svg" alt="" /></button>
					</router-link>
				</div>
			</section>
		</article>

		<section class="card-section">
			<Card
				v-for="article in blogData"
				:dateCreated="article.dateCreated"
				:time="article.time"
				:title="article.title"
				:text="article.text"
				:key="article.id"
			/>
		</section>

		<section class="join-section">
			<h3>Join our Team of Writers</h3>
			<p>On dasdas, writers earn a living doing what they love.</p>
			<p>
				Getting started is easy. Just pay a one time $25 fee and everything is
				ready to go.
			</p>
			<button>JOIN US</button>
		</section>
	</main>
	<!-- </div> -->
</template>
<script>
import { response } from "express";
import Card from "../components/Card.vue";
export default {
	data() {
		return {
			list: [1, 2, 3, 4],
			// blogData: [
			// 	{
			// 		id: 0,
			// 		image: "../assets/rocket.png",
			// 		dateCreated: " 2 Month Ago",
			// 		title: "Css Grid",
			// 		text: "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
			// 		time: "12 Min Read",
			// 	},
			// 	{
			// 		id: 1,
			// 		image: "../assets/rocket.png",
			// 		dateCreated: " 2 Month Ago",
			// 		title: "Colors in Css",
			// 		text: "Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.",
			// 		time: "8 Min Read",
			// 	},
			// 	{
			// 		id: 2,
			// 		image: "../assets/rocket.png",
			// 		dateCreated: " 2 Month Ago",
			// 		title: "Css Variables",
			// 		text: "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved -- prefix, and there are no real rules about their value.",
			// 		time: "10 Min Read",
			// 	},
			// ],
			blogData: [],
		};
	},
	components: {
		Card,
	},

	// async getData() {
	// 	let response = await axios.get(
	// 		"https://techcrunch.com/wp-json/wp/v2/posts"
	// 	);
	// 	this.blogData = await response.data;
	// },
	// mounted() {
	// 	try {
	// 		getData();
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// },
};
</script>
