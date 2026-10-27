import type { ReactNode } from "react"

type MainDivProps = {
    children: ReactNode
}

export function MainDiv({ children }: MainDivProps) {
    return (
        <div className="mx-auto w-full max-w-7xl px-4">
            {children}
        </div>
    )
}