import classNames from "classnames";
import React from "react";
import { translateObject, useTranslation } from "utils/translate";

const IconList = (props) => {
  useTranslation();
  const { items, className } = props;

  return (
    <div className={classNames("icon-list", className)}>
      <For
        of={items}
        each="item"
        body={(item) => (
          <div className="icon-list-item" key={translateObject(item, "text")}>
            <If condition={item.icon}>
              <item.icon className="icon" />
            </If>
            {translateObject(item, "text")}
          </div>
        )}
      />
    </div>
  );
};

export default IconList;
