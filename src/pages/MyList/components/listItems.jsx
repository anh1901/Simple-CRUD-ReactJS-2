import React from "react";
import Item from "./item";
import { Button, Divider, Checkbox, AutoComplete, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
const ListItems = (props) => {
  const {
    isFiltered,
    items,
    currentItem,
    onCreateItem,
    onChange,
    onFilter,
    ...others
  } = props;
  const other = { ...others };
  return (
    <div style={{ paddingTop: "2%" }}>
      <form onSubmit={onCreateItem}>
        <TextArea
          size="middle"
          type="text"
          placeholder="Add new task..."
          onChange={onChange}
          value={currentItem.value}
          onPressEnter={onCreateItem}
        />
        <Button htmlType="submit">
          <PlusCircleFilled />
        </Button>
      </form>
      <Checkbox onChange={onFilter}>Undone task only</Checkbox>
      <p>
        You have <strong>{items.length}</strong> task
        {items.length > 1 ? "s" : ""}.
      </p>
      <Divider />
      {items.length !== 0 ? (
        isFiltered ? (
          <Item
            items={items.filter((item) => item.isCompleted !== true)}
            {...other}
          />
        ) : (
          <Item items={items} {...other} />
        )
      ) : (
        <strong>No value yet.</strong>
      )}
    </div>
  );
};
export default ListItems;
Item.propTypes = {};
