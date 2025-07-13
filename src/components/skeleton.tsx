import { cva, type VariantProps } from "class-variance-authority"
import type React from "react"

const skeletonVariants = cva("bg-gray-200 animate-pulse pointer-events-none", {
    variants: {
        rounded: {
            sm: "rounded-sm",
            lg: "rounded-lg",
            full: "rounded-full"
        },
    },
    defaultVariants: {
        rounded: "lg",
    }
})

interface SkeletonProps extends VariantProps<typeof skeletonVariants>, React.ComponentProps<"div"> {}

export default function Skeleton({ rounded, className } : SkeletonProps) {
    return <div className={skeletonVariants({rounded, className})}></div>
}