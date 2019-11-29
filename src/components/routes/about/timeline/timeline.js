import React from 'react';
import TimelineItem from "./item";

class Timeline extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <div className="timeline">
        {items.map((item, key) => (
          <TimelineItem item={item} key={key} />
        ))}
      </div>
    );
  }
}

export default Timeline;
