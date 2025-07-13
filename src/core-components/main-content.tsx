import { cx } from "class-variance-authority";

type MainContentProps = React.ComponentProps<"main">

export default function MainContent({ className, children, ...props }: MainContentProps) {

    return(
        <main className={cx("mt-8", className)} {...props}>
            {children}
        </main>
    )

}