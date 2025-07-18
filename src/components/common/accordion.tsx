"use client";

import React, { useState } from "react";
import { Icon } from "./icons/icon";

type AccordionData = {
  title: string;
  description: string;
  key: string;
};

type AccordionItemProps = {
  data: AccordionData;
  activeKey: string;
  setActiveTab: (tab: string) => void;
};

const AccordionItem = (props: AccordionItemProps) => {
  const { data, activeKey, setActiveTab } = props;
  const isActiveTab = activeKey === data.key;
  return (
    <div className={`border-b py-4 ${isActiveTab && "border-black"} grid gap-4`}>
      <button
        className="flex w-full items-center gap-2"
        onClick={() => setActiveTab(isActiveTab ? "" : data.key)}
      >
        <h5 className="w-full text-center md:text-start">{data.title}</h5>
        <div className="rounded-full border-2 border-dark_gray">
          <Icon
            name={isActiveTab ? "minus" : "plus"}
            size="sm"
            className="size-4 text-dark_gray"
          />
        </div>
      </button>
      {isActiveTab && (
        <p className="text-center text-darker_gray md:text-start">{data.description}</p>
      )}
    </div>
  );
};

type AccordionProps = {
  data: AccordionData[];
};

export const Accordion = (props: AccordionProps) => {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className="grid gap-4">
      {props.data.map((data) => (
        <AccordionItem
          key={data.key}
          data={data}
          activeKey={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
};
