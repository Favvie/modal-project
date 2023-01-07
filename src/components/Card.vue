<template>
	<article class="card">
		<div class="card_image">
			<img src="../assets/rocket.png" alt="" />
			<h2>Optimizing CSS for faster page loads</h2>
		</div>
		<div>
			<div>
				<span class="tag">Front-end</span>
				<time class="time"> . {{ dateCreated }}</time>
				<h2 class="heading">{{ title }}</h2>
				<p>
					{{ text }}
				</p>

				<div class="readFull">
					<span>{{ time }}</span>
					<button class="read">
						Read Full <img src="../assets/arrow.svg" alt="" />
					</button>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	props: ["dateCreated", "time", "title", "text"],
	data() {
		return {
			// image: "../assets/rocket.png",
			// dateCreated: " 1 Month Ago",
			// title: "Css Grid",
			// text: "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
			// time: "12 Min Read",
		};
	},
};
</script>
