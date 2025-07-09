import { cva, type VariantProps, cx } from "class-variance-authority";
import { textVariants } from "./text";

export const textInputVariants = cva(`
    border-b border-gray-200 outline-none
    border-solid focus:border-pink-base bg-transparent
    `, {
    variants: {
        size: {
            md: "pb-2 px-2",
        },
        disabled: {
            true: "pointer-events-none",
        }
    },
    defaultVariants: {
        size: "md",
        disabled: false,
    }
})

interface InputTextProps extends VariantProps<typeof textInputVariants>, Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function InputText({size, disabled, className, ...props}:InputTextProps) {
    return(
        <input className={cx(textInputVariants({size, disabled}), textVariants(), className)} {...props}/>
    )
}