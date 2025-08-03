import { Star, StarHalf } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Small Business Owner",
      quote:
        "Repair My Mobile saved my phone when no one else could! Their service was fast, affordable, and the staff was incredibly knowledgeable. I'll never go anywhere else.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Developer",
      quote:
        "As someone who depends on my phone for work, I was amazed at how quickly they fixed my cracked screen. The quality is exceptional and the warranty gives me peace of mind.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "College Student",
      quote:
        "The home service option was a lifesaver during finals week! The technician arrived on time, fixed my charging port in 20 minutes, and was super friendly.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-5 h-5 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="w-5 h-5 fill-yellow-400 text-yellow-400"
        />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Customer Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our satisfied customers say about our services
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              {/* Stars Rating */}
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 relative">
                <span className="absolute -top-4 -left-1 text-4xl text-gray-200 font-serif">
                  "
                </span>
                <p className="pl-5 pt-2">{testimonial.quote}</p>
                <span className="absolute -bottom-4 -right-1 text-4xl text-gray-200 font-serif">
                  "
                </span>
              </blockquote>

              {/* Customer Info */}
              <div className="mt-6">
                <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
