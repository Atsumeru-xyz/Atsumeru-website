module.exports = [
	["@vuepress/plugin-back-to-top"],
	["@vuepress/plugin-medium-zoom"],
	[
		"vuepress-plugin-container",
		{
			type: "c-tip",
			before: (info) => `<div class="custom-block c-tip"><h4 class="c-title">${info}</h4>`,
			after: "</div>",
			defaultTitle: "",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "c-warning",
			before: (info) => `<div class="custom-block c-warning"><h4 class="c-title">${info}</h4>`,
			after: "</div>",
			defaultTitle: "",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "c-danger",
			before: (info) => `<div class="custom-block c-danger"><h4 class="c-title">${info}</h4>`,
			after: "</div>",
			defaultTitle: "",
		},
	],

];