import { Card } from "@/components/ui/card";

export default function ClientsSection() {
  const clients = new Array(18).fill(0);

  return (
    <section className="w-full bg-[#f7f7f7] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-full text-sm text-gray-600">
            <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white text-xs">
              👥
            </div>
            Our Customers
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Clients</h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg mb-14">
          Brands that trust us to elevate their digital presence.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">
          {clients.map((_, index) => (
            <Card
              key={index}
              className="h-16 flex items-center justify-center bg-transparent shadow-none border-none"
            >
              {/* Replace this div with actual image */}
              <div className="w-28 h-10 bg-gray-200 rounded-md" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
