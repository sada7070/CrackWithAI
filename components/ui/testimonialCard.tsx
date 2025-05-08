import Image from "next/image";

interface TestimonialCardProps {
    name: string;
    role: string;
    review: string;
    imageSrc: string
}

export function TestimonialCard({name, role, review, imageSrc}: TestimonialCardProps) {
    return <div className="flex flex-col space-y-4 rounded-lg border p-6 mx-6 md:mx-0 shadow-lg shadow-slate-400 dark:shadow-slate-700">
        <div className="flex items-center space-x-4">
            <Image
                src={imageSrc}
                alt="User Avatar"
                width={60}
                height={60}
                className="rounded-full"
            />
            <div>
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm text-gray-500">{role}</p>
            </div>
        </div>

        <p className="text-gray-500">
            {review}
        </p>

        <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>
    </div>
}