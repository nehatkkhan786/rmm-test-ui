export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Book Your Request",
      description:
        "Select your phone brand, model, and issue type to book your repair request.",
    },
    {
      number: "2",
      title: "Get Call Back",
      description:
        "Receive a call back from the nearest repair shop to confirm your appointment.",
    },
    {
      number: "3",
      title: "Get Your Phone Fixed",
      description: "Visit the repair shop and get your phone fixed promptly.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-lime-500 to-blue-500">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">How it Works ?</h2>

        <div className="bg-white rounded-lg shadow p-6 md:p-10 flex flex-col md:flex-row justify-between gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="h-10 w-10 min-w-[40px] rounded-full bg-lime-500 text-white flex items-center justify-center font-bold">
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
