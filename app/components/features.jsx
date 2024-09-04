import { BoltIcon, ChatBubbleOvalLeftEllipsisIcon, RectangleGroupIcon, PencilIcon, TagIcon, ShoppingBagIcon, AdjustmentsVerticalIcon, EnvelopeIcon, TruckIcon } from "@heroicons/react/24/outline";

export default function Features() {

  const featuresHeading =
    "All the features you need to manage all of your customers questions";

  const features = [
    {
      id: 1,
      heading: "Classic Static FAQ",
      description: "Answer customer questions quickly and efficiently.",
      icon: BoltIcon,
    },
    {
      id: 2,
      heading: "FAQ Templates",
      description: "Use a template to quickly create a FAQ page.",
      icon: RectangleGroupIcon,
    },
    {
      id: 3,
      heading: "Page Builder",
      description: "Customize your FAQ Page to fit your style and needs.",
      icon: PencilIcon,
    },
    {
      id: 4,
      heading: "Product FAQ’s",
      description:
        "Show an FAQ for every product with standard and custom questions.",
      icon: TagIcon,
    },
    {
      id: 5,
      heading: "Collection FAQ’s",
      description:
        "Show an FAQ for each collection with standard and custom questions.",
      icon: ShoppingBagIcon,
    },
    {
      id: 6,
      heading: "Powerful Admin Panel",
      description:
        "The admin panel is designed to provide simple and intuitive management.",
      icon: AdjustmentsVerticalIcon,
    },
    {
      id: 7,
      heading: "Email Contact Form",
      description: "Email form on every page in the customer support widget.",
      icon: EnvelopeIcon,
    },
    {
      id: 8,
      heading: "Order Tracking & Status",
      description: "Check order details in the customer support widget.",
      icon: TruckIcon,
    },
    {
      id: 9,
      heading: "WhatsApp Chat",
      description: "Use WhatsApp to chat in the customer support widget",
      icon: ChatBubbleOvalLeftEllipsisIcon,
    },
  ];

  return (
    <div className="my-8 md:my-48 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-4">
          {features.map((feature) => (
            <div key={feature.id} className="relative">
              <div className="py-12 px-2 relative ">
                <div className="ml-4 mb-1 h-16 w-16 bg-transparent">
                  <feature.icon className="size-12 text-400" />
                </div>
                <p className="ml-4 mb-4 text-2xl font-medium text-gray-100 dark:text-gray-100 ">
                  {feature.heading}
                </p>
                <p className="mt-2 mx-4 text-xl text-gray-300 dark:text-gray-300 font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
