import Image from "next/image";

export function Testimonials() {
    return  <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl md:pt-2">Success Stories</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Hear from users who landed their dream jobs after practicing with our AI interview platform.
                    </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                    <div className="flex items-center space-x-4">
                        <Image
                        src="/testimonial_female1.jpg"
                        alt="User Avatar"
                        width={60}
                        height={60}
                        className="rounded-full"
                        />
                        <div>
                        <h3 className="text-lg font-bold">Sarah Johnson</h3>
                        <p className="text-sm text-gray-500">Software Engineer at Google</p>
                        </div>
                    </div>
                    <p className="text-gray-500">
                        "After practicing with CrackWithAI for just two weeks, I felt so much more confident in my technical
                        interviews. The AI voice agent helped me improve my communication skills and I landed my dream job!"
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
                    <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                    <div className="flex items-center space-x-4">
                        <Image
                        src="/testimonial_male.jpg"
                        alt="User Avatar"
                        width={60}
                        height={60}
                        className="rounded-full"
                        />
                        <div>
                        <h3 className="text-lg font-bold">Michael Chen</h3>
                        <p className="text-sm text-gray-500">Sales Executive at Amazon</p>
                        </div>
                    </div>
                    <p className="text-gray-500">
                        "The industry-specific questions were incredibly helpful. I was asked almost identical questions in my
                        real interview! The feedback on my delivery style helped me sound more confident and articulate."
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
                    <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                    <div className="flex items-center space-x-4">
                        <Image
                        src="/testimonial_female2.jpg"
                        alt="User Avatar"
                        width={60}
                        height={60}
                        className="rounded-full"
                        />
                        <div>
                        <h3 className="text-lg font-bold">Jessica Williams</h3>
                        <p className="text-sm text-gray-500">Marketing Director at Netflix</p>
                        </div>
                    </div>
                    <p className="text-gray-500">
                        "As someone who gets nervous during interviews, practicing with the AI voice agent was a game-changer.
                        I could practice as many times as I needed until I felt confident."
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
                </div>
            </div>
}