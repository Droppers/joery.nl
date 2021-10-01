import React from "react";
import { translateObject } from "utils/translate";
import SvgTimelineCurve from "assets/vector/timeline-curve.svg";

const TimelineItem = (props) => {
  const { item } = props;
  const from = translateObject(item, "from");
  const to = translateObject(item, "to");

  return (
    <div className="timeline-item">
      <div className="indicator" />
      <div className="inner-item">
        <If condition={item.logo}>
          <item.logo className="logo" />
        </If>
        <div className="content">
          <div className="title">{translateObject(item, "title")}</div>
          <div className="subtitle">
            {translateObject(item, "subtitle")}
            <If condition={from && to}>
              <div className="timespan">
                {from} – {to}
              </div>
            </If>
          </div>
          <div className="description">
            {translateObject(item, "description")}
          </div>
        </div>
      </div>
      <If condition={item.children && item.children.length}>
        <div className="children">
          <For each="child" of={item.children}>
            <TimelineItem
              item={child}
              key={
                translateObject(child, "title") +
                translateObject(child, "subtitle")
              }
            />
          </For>
          <SvgTimelineCurve className="curve" />
        </div>
      </If>
    </div>
  );
};

export default TimelineItem;
