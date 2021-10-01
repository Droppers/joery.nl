import React from "react";
import { translateObject, useTranslation } from "utils/translate";
import TimelineItem from "./item/item";

const Timeline = (props) => {
  useTranslation();

  const { items } = props;

  return (
    <div className="timeline">
      <For each="item" of={items}>
        <TimelineItem item={item} key={translateObject(item, "title")} />
      </For>
    </div>
  );
};

export default Timeline;
