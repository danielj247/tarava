import React, { useState } from "react";

export interface TabsChildrenProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export interface TabsProps {
  defaultValue: string;
  children: (props: TabsChildrenProps) => JSX.Element;
}

export default function Tabs(props: TabsProps): JSX.Element {
  const { defaultValue, children } = props;
  const [activeTab, setActiveTab] = useState(defaultValue);

  return <div>{children({ activeTab, setActiveTab })}</div>;
}
