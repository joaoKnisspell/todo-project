import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

interface TextProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements;
    children?: React.ReactNode;
    className?: string;
}

export const textVariants = cva("text-gray-400 font-sans", {

    variants: {
        variant: {
            "body-md": "text-base leading-6 font-normal",
            "body-md-bold": "text-base leading-6 font-semibold",
            "body-sm": "text-sm leading-5 font-semibold",
        },
        defaultVariants: {
            variant: "body-md",
        }
    }

});

export default function Text({ as = "span", className, variant, children, ...props } : TextProps) {
    return React.createElement(as, {
         className: textVariants({ variant, className}), 
         ...props
    }, children);
}