import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "@/ui/components/ui/button";
import { TypographyLarge } from "@/ui/components/ui/typography";

export interface AssetSelectorItem {
  name: string;
  value: unknown;
}

export interface AssetSelectorProps {
  items: AssetSelectorItem[];
  onChange: (asset: AssetSelectorItem) => void;
}

export default function AssetSelector(props: AssetSelectorProps) {
  const { items, onChange } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items?.[currentIndex];

  function next() {
    const nextIndex = currentIndex + 1;
    const newIndex = nextIndex > items.length - 1 ? 0 : nextIndex;

    setCurrentIndex(newIndex);
    onChange(items[newIndex]);
  }

  function previous() {
    const previousIndex = currentIndex - 1;
    const newIndex = previousIndex < 0 ? items.length - 1 : previousIndex;

    setCurrentIndex(newIndex);
    onChange(items[newIndex]);
  }

  if (!currentItem) {
    return null;
  }

  return (
    <div className="flex justify-center items-center gap-x-6">
      <Button size="icon" onClick={previous}>
        <ArrowLeftIcon className="h-12" />
      </Button>
      <TypographyLarge>{currentItem.name}</TypographyLarge>
      <Button size="icon" onClick={next}>
        <ArrowRightIcon className="h-12" />
      </Button>
    </div>
  );
}
