interface SimpleCradProps {
    num: number;
    label: string;
    content: string
}

export function SimpleCard({num, label, content}: SimpleCradProps) {
    return <div className="flex flex-col items-center space-y-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white dark:text-black text-2xl font-bold">
            {num}
        </div>
        <h3 className="text-2xl font-bold">{label}</h3>
        <p className="text-center text-gray-500">
            {content}
        </p>
</div>
}