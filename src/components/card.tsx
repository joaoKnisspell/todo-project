import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const cardVariants = cva("bg-white rounded-lg shadow-sm border border-solid border-gray-200", {
	variants: {
		size: {
			none: "",
			md: "p-5",
		},
	},
	defaultVariants: {
		size: "none"
	}
});

interface CardProps
	extends VariantProps<typeof cardVariants>,
		React.ComponentProps<"div"> {
			as?: keyof React.JSX.IntrinsicElements;
		}

export default function Card({ as = "div", size, children, className, ...props }: CardProps) {
	return React.createElement(as, {
		size,
		className: cardVariants({size, className}),
		...props,
	}, children);
}
