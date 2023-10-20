import React from "react";

export interface TabsTriggerProps {
  value: string;
  activeTab: string;
  setActiveTab: (value: string) => void;
  children: React.ReactNode;
}

export default function TabsTrigger(props: TabsTriggerProps) {
  const { value, activeTab, setActiveTab, children } = props;
  const isActive = activeTab === value;

  return (
    <button
      className={[
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive && "bg-white text-black shadow",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}
