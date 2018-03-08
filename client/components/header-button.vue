<template>
	<div class="container" v-on:click="cb">
		<div class="text">{{ text }}</div>
	</div>
</template>

<script>
	module.exports = {
		props: ["text", "click"],
		components: {
		},
		data: function() {
			return {
				cb: this.click ? this.click : () => {}
			}
		},
		methods: {
		},
		computed: {
		}
	}
</script>

<style scoped>
	.container {
		color: #ccc;
		cursor: pointer;
		user-select: none;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		padding: 10px;
	}
	.container:hover {
		background-color: rgba(151, 31, 87, 0.2);	/* #971F57 */
		background-color: #971F57;
	}
	.text {
		/*color: #a73F77;*/
		/*color: #971F57;*/
		color: #603CC0;
		color: #f9efd5;
		font-size: 27px;
		/*text-shadow: 
			#150E4C calc(1px) 0px,  #150E4C calc(-1px) 0px,
			#150E4C 0px calc(-1px), #150E4C 0px calc(1px),
			#150E4C calc(1px) calc(1px) , #150E4C calc(-1px) calc(1px),
			#150E4C calc(1px) calc(-1px), #150E4C calc(-1px) calc(-1px),
			#150E4C 1px calc(1px),  #150E4C -1px calc(1px),
			#150E4C 1px calc(-1px), #150E4C -1px calc(-1px),
			#150E4C calc(1px) 1px,  #150E4C calc(-1px) 1px,
			#150E4C calc(1px) -1px, #150E4C calc(-1px) -1px;*/
	}
</style>
