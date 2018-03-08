<template>
	<div class="page-container">
		<Header />
		<div class="page-content">
		</div>
		<Footer />
	</div>
</template>

<script>
	const Header = require("./header.vue")
	const Footer = require("./footer.vue")

	module.exports = {
		props: [],
		components: {
			Header,
			Footer
		},
		data: function() {
			return {
			}
		},
		methods: {
		},
		computed: {
		}
	}
</script>

<style scoped>
	.page-container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	.page-content {
		flex-grow: 1;
		/*padding: 20px;*/
		background: linear-gradient(#603CC0, #f9efd5);
		/*background: linear-gradient(to right bottom, #603CC0, #f9efd5);*/
	}
</style>
