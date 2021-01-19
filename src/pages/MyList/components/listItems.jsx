import React from "react";
import Item from "./item";
import { Button, Divider, Checkbox, AutoComplete, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
const ListItems = (props) => {
  const {
    isFiltered,
    isUpdating,
    isSearching,
    items,
    onDeleteItem,
    onUpdateItem,
    onStatusChange,
    currentItem,
    onCreateItem,
    onChange,
    onFilter,
    onSearch,
    filterValue,
  } = props;
  const resultList = (
    <Item
      items={items.filter((item) => item.value.includes(filterValue))}
      onDeleteItem={onDeleteItem}
      onUpdateItem={onUpdateItem}
      onStatusChange={onStatusChange}
      isUpdating={isUpdating}
    />
  );
  const filteredList = (
    <Item
      items={items.filter((item) => item.isCompleted !== true)}
      onDeleteItem={onDeleteItem}
      onUpdateItem={onUpdateItem}
      onStatusChange={onStatusChange}
      isUpdating={isUpdating}
    />
  );
  const list = (
    <Item
      items={items}
      onDeleteItem={onDeleteItem}
      onUpdateItem={onUpdateItem}
      onStatusChange={onStatusChange}
      isUpdating={isUpdating}
    />
  );
  const noList = <strong>No value yet.</strong>;
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
      <AutoComplete dataSource={items.map((item) => item.value)}>
        <Input.Search
          allowClear
          autoComplete
          onPressEnter={(e) => onSearch(e.target.value)}
        ></Input.Search>
      </AutoComplete>
      <Checkbox onChange={onFilter}>Undone task only</Checkbox>
      <p>
        You have <strong>{items.length}</strong> task
        {items.length > 1 ? "s" : ""}.
      </p>
      <Divider />
      {items.length !== 0
        ? isSearching
          ? isFiltered
            ? filteredList
            : list
          : resultList
        : noList}
    </div>
  );
};
export default ListItems;
Item.propTypes = {};
