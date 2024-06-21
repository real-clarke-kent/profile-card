const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["Noto Sans Variable", ...defaultTheme.fontFamily.sans],
		},
		colors: {
			brand: "#4338ca",
			"brand-emphasize": "#3730a3",
			"brand-subtle": "#eef2ff",
			"success-subtle": "#f0fdf4",
			disabled: "#f5f5f5",
			"disabled-emphasize": "#f3f4f6",
		},
		lineColors: {
			primary: "#e5e5e5",
			secondary: "#9ca3af",
			"brand-solid": "#4f46e5",
			"brand-subtle": "#c7d2fe",
			success: "#bbf7d0",
			"error-subtle": "#fecaca",
			"warning-subtle": "#fde68a",
			"focus-brand": "rgba(68, 76, 231, 0.12)"
		},
		borderColor: ({ theme }) => ({
			primary: theme("lineColors.primary"),
			secondary: theme("lineColors.secondary"),
			success: theme("lineColors.success"),
			"brand-solid": theme("lineColors.brand-solid"),
			"brand-subtle": theme("lineColors.brand-subtle"),
		}),
		backgroundColor:
			({ theme }) => ({
				primary: "#fff",
				"primary-hover": "#fafafa",
				secondary: "#e5e7eb",
				"secondary-hover": "#d1d5db",
				"brand-primary": theme("colors.brand"),
				"brand-primary-emphasize": theme("colors.brand-emphasize"),
				"brand-subtle": theme("colors.brand-subtle"),
				"success-subtle": theme("colors.success-subtle"),
				disabled: theme("colors.disabled"),
				"disabled-emphasize": theme("colors.disabled-emphasize"),
			}),
		ringColor: ((theme) => ({
			brand: theme("lineColors.focus-brand"),
		})),
		textColor: {
			primary: "#171717",
			"primary-hover": "#0a0a0a",
			"primary-invert": "#fff",
			secondary: "#525252",
			tertiary: "#737373",
			brand: "#4338ca",
			success: "#15803d",
			disabled: "#a3a3a3"
		},
		fontSize: {
			sm: [
				"0.875rem",
				{
					lineHeight: "1.25rem",
				},
			],
			base: [
				"1rem",
				{
					lineHeight: "1.5rem",
				},
			],
			lg: [
				"1.125rem",
				{
					lineHeight: "1.75rem",
				},
			],
			xl: [
				"1.25rem",
				{
					lineHeight: "1.75rem",
				},
			],
		},
		boxShadow: {
			base: "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
		},
		extend: {
			spacing: {
				min: "1px",
			},
		},
	},
	plugins: [],
};
