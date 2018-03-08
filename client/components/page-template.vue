<template>
	<div class="page-container">
		<Header title="hoge" />
		<div class="page-content">
			Hello World!
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
	}
</style>
