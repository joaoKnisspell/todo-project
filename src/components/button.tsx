import { cva, type VariantProps } from "class-variance-authority"
import Text from "./text";

export const buttonVariants = cva(`
    cursor-pointer inline-flex items-center justify-center 
    gap-2 rounded-lg transition bg-gray-200 hover:bg-pink-light
    border border-gray-200
    `, {
     variants: {
        size: {
            md: "px-5 py-4 h-14"
        },
        disabled: {
            true: "opacity-50 pointer-events-none",
            false: ""
        }
     },
     defaultVariants:{
        size: "md",
        disabled: false
     }
})

interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">, VariantProps<typeof buttonVariants> {
    icon?: React.ReactNode;
}

export default function Button({ 
    size,
    disabled,
    className,
    children,
    icon,
    ...props
 }:ButtonProps) {

    return (
        <button className={buttonVariants({size, disabled, className})} {...props}>
            {icon && icon}
            <Text variant="body-md-bold">{children}</Text>
        </button>
    )

}