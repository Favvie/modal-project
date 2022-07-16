<template>
	<div class="container">
		<Navbar />
		<!-- <Home /> -->
		<Detail />
	</div>
</template>

<script>
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import Detail from "./components/Detail.vue";

export default {
	name: "App",
	data() {
		return {
			title: "My first Vue App",
		};
	},
	components: { Home, Navbar, Detail },
};
</script>

<style>
/* #app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
} */
</style>
