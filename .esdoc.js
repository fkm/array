'use strict';

module.exports = {
	source: './lib',
	destination: './docs',

	plugins: [
		{
			name: 'esdoc-accessor-plugin',
			option: {
				access: ['public', 'protected', 'private'],
				autoPrivate: true,
			},
		},
		{
			name: 'esdoc-coverage-plugin',
			option: {
				kind: [
					'class', 'function', 'variable',
					'constructor', 'method', 'member',
					'get', 'set',
				],
				enable: true,
			},
		},
		{
			name: 'esdoc-external-ecmascript-plugin',
		},
		{
			name: 'esdoc-ecmascript-proposal-plugin',
			option: { all: true }
		},
		{
			name: "esdoc-importpath-plugin",
			option: {
				stripPackageName: false,
				replaces: [
					{
						from: ".+",
						to: ""
					},
				],
			},
		},
		{
			name: 'esdoc-brand-plugin',
		},
		{
			name: 'esdoc-publish-html-plugin',
		},
	],
};
