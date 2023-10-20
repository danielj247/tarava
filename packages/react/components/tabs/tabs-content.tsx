import React from "react";

interface TabsContentProps {
  value: string;
  activeTab: string;
  children: React.ReactNode;
}

export default function TabsContent(props: TabsContentProps) {
  const { value, activeTab, children } = props;
  const isActive = activeTab === value;

  if (!isActive) return null;

  return <div>{children}</div>;
}
