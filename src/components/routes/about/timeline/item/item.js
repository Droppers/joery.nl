import React from "react";

class TimelineItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <div className="timeline-item">
        <div className="indicator"></div>
        <div className="inner-item">
          {item.logo && <item.logo className="logo" />}
          <div className="content">
            <div className="title">{item.title}</div>
            <div className="subtitle">{item.subtitle}</div>
            {item.from && item.to && (
              <div className="timespan">
                {item.from} – {item.to}
              </div>
            )}
          </div>
        </div>
        {(item.children && item.children.length) > 0 && (
          <div className="children">
            {item.children.map((child, key) => (
              <TimelineItem item={child} key={key} />
            ))}

            <svg className="curve">
              <path
                style={{
                  fill: "none",
                  strokeWidth: 3,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                }}
                className="stroke"
                d="m 1.5,0 c 0,11.19621 23,15.29388 23,26"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        )}
      </div>
    );
  }
}

export default TimelineItem;
