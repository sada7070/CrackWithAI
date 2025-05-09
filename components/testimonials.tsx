import { TestimonialCard } from "@/components/ui/testimonialCard";

export function Testimonials() {
    return  <div className="container px-4 md:px-6 pb-32">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl md:pt-2">Success Stories</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Hear from users who landed their dream jobs after practicing with our AI interview platform.
                    </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    <TestimonialCard
                        imageSrc="/testimonial_female1.jpg" 
                        name="Sarah Johnson"
                        role="Software Engineer at Google"
                        review='"After practicing with CrackWithAI for just two weeks, I felt so much more confident in my technical
                        interviews. The AI voice agent helped me improve my communication skills and I landed my dream job!"'
                    />

                    <TestimonialCard
                        imageSrc="/testimonial_male.jpg"
                        name="Michael Chen"
                        role="Sales Executive at Amazon"
                        review='"The industry-specific questions were incredibly helpful. I was asked almost identical questions in my
                        real interview! The feedback on my delivery style helped me sound more confident and articulate."'
                    />
                   
                   <TestimonialCard
                        imageSrc="/testimonial_female2.jpg"
                        name="Jessica Williams"
                        role="Marketing Director at Netflix"
                        review='"As someone who gets nervous during interviews, practicing with the AI voice agent was a game-changer.
                        I could practice as many times as I needed until I felt confident."'
                    />
                </div>
            </div>
}