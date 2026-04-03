<script>
/**
 * For material icon references use https://material.io/resources/icons/
 * Code example: <MaterialIcon icon="android" />
 */
export default {
	props: {
		iconOnly: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
			default: "",
		},
		icon: {
			type: String,
			default: "",
		},
	},
};
</script>

<template>
	<i v-if="iconOnly" :class="name" class="material-icons">{{ icon }}</i>
	<div v-else :class="name" class="material-holder">
		<i class="material-icons">{{ icon }}</i>
	</div>
</template>

<style lang="css">
@import "~material-design-icons-iconfont/dist/material-design-icons.css";
</style>

<style lang="stylus">
.material-holder
	color #ffffff
	margin 0
	font-size 1em
	border-radius 3px
	display inline
.material-icons
	font-size 1.35em
	position relative
	top 0.4rem
</style>