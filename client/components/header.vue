<template>
	<div class="header-container">
		<!-- <div v-on:click="hoge"></div> -->
		<!-- <div><div id="logo"></div></div> -->
		<div class="title" v-show="!showButtons">{{ title }}</div>
		<div class="buttons" v-show="showButtons">
			<Button text="Home" :click="hoge" />
			<Button text="News" :click="hoge" />
			<Button text="YouTube" :click="hoge" />
			<Button text="Contact" :click="hoge" />
			<Button text="Downloads" :click="hoge" />
		</div>
	</div>
</template>

<script>
	const Button = require("./header-button.vue")

	module.exports = {
		props: ["title"],
		components: {
			Button
		},
		data: function() {
			return {
				showButtons: !this.title
			}
		},
		methods: {
			hoge: function(event) {
				console.log("びゃぁぁあああ")
			}
		},
		computed: {
		}
	}
</script>

<style scoped>
	.header-container {
		border-bottom: 2px solid #603CC0;
		border-bottom: 2px solid #f9efd5;
		background-color: #603CC0;
		color: #ccc;
		/*height: 100px;*/
		display: flex;
	}
	.header-container * {
		width: 100%;
	}
	#logo {
		background-image: url(https://raw.githubusercontent.com/TUS-OSK/VYT-site/grimoire/grimoire-logo.svg);
		/*background-image: url(https://grimoire.gl/css/images/logo-icon.svg);*/
		width: 50px;
		height: 100%;
	}
	.title {
		/*color: #a73F77;*/
		/*color: #971F57;*/
		color: #603CC0;
		color: #f9efd5;
		font-size: 30px;
		/*text-shadow: 
			#150E4C calc(1px) 0px,  #150E4C calc(-1px) 0px,
			#150E4C 0px calc(-1px), #150E4C 0px calc(1px),
			#150E4C calc(1px) calc(1px) , #150E4C calc(-1px) calc(1px),
			#150E4C calc(1px) calc(-1px), #150E4C calc(-1px) calc(-1px),
			#150E4C 1px calc(1px),  #150E4C -1px calc(1px),
			#150E4C 1px calc(-1px), #150E4C -1px calc(-1px),
			#150E4C calc(1px) 1px,  #150E4C calc(-1px) 1px,
			#150E4C calc(1px) -1px, #150E4C calc(-1px) -1px;*/
		text-align: center;
		font-family: 'Berkshire Swash', cursive;
		padding: 10px;
	}
	.buttons {
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		/*border-top: 2px solid #603CC0;*/
		font-family: 'Berkshire Swash', cursive;
	}
	.buttons * {
		border-left: 2px solid #603CC0;
		border-left: 2px solid #f9efd5;
	}
	.buttons :last-child {
		border-right: 2px solid #603CC0;
		border-right: 2px solid #f9efd5;
	}
</style>
