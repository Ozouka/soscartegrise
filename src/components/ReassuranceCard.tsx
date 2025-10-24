import { ReactNode } from 'react';

interface ReassuranceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ReassuranceCard({ icon, title, description }: ReassuranceCardProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="text-carte-red">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

