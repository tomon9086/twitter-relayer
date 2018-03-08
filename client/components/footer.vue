<template>
	<div class="footer-container">
		<div class="copyright">
			<div>© 2018 <a href="http://oskt.us/" target="_blank">OSK</a>-VTuber</div>
			<div>Supported by <a href="http://grimoire.gl" target="_blank">Grimoire.js</a></div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		components: {
		},
		data: function() {
			return {
			}
		},
		computed: {
		}
	}
</script>

<style scoped>
	.footer-container {
		background-color: #333;
		color: #ccc;
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding-top: 10px;
		padding-bottom: 5px;
	}
	.copyright {
		text-align: center;
	}
	.copyright a {
		color: #ccc;
		/*text-decoration: none;*/
	}
</style>
