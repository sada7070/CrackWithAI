import React from "react";

interface FeaturesCardProps {
    label: string;
    content: string;
    icon: React.ReactNode;
}

export function FeaturesCard({label, content, icon}: FeaturesCardProps) {
    return <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-xl mx-6 md:mx-0 dark:shadow-slate-700 shadow-slate-400">
      <div>{icon}</div>
      <h3 className="text-xl font-bold">{label}</h3>
      <p className="text-center text-gray-500">
        {content}
      </p>
  </div>
}