<template>
	<div id="app">
			<TabBarMain></TabBarMain>
			<router-view />
	</div>
</template>
<script>
	let TabBarMain = () => import("./components/tabbar/TabBarMain.vue");
	export default {
		name: "App",
		components: {
			TabBarMain,
		}
	}
</script>
<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
