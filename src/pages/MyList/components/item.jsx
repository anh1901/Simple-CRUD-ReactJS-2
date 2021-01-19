import React from "react";
import { Input, Button, Popconfirm, Tooltip, Switch, Divider, Tag } from "antd";
import { CloseOutlined, CheckOutlined, EditOutlined } from "@ant-design/icons";
const Item = (props) => {
  const {
    items,
    isUpdating,
    onUpdateItem,
    onStatusChange,
    onDeleteItem,
  } = props;
  const listItems = items.map((item) => {
    return (
      <>
        <div key={item.id}>
          <Tag color={item.isCompleted ? "cyan" : "red"}>{item.value}</Tag> last
          updated at {item.id}.
          {item.isUpdating && (
            <Input
              autoFocus
              type="text"
              size="small"
              style={{ width: 78 }}
              onBlur={(e) => onUpdateItem(e.target.value, item.id)}
              onPressEnter={(e) => onUpdateItem(e.target.value, item.id)}
            />
          )}
          <Divider type="vertical" />
          <Tooltip
            title={
              item.isCompleted ? "Mark as uncompleted" : "Mark as completed"
            }
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              onChange={() => onStatusChange(item.id)}
              defaultChecked={item.isCompleted}
            />
            <Divider type="vertical" />
          </Tooltip>
          <Popconfirm
            title="Edit the task?"
            onConfirm={() => isUpdating(item.id)}
          >
            <Divider type="vertical" />
            <Button shape="circle" type="primary">
              <EditOutlined />
            </Button>
          </Popconfirm>
          <Popconfirm
            title="Are you sure you want to delete?"
            onConfirm={() => {
              onDeleteItem(item.id);
            }}
          >
            <Divider type="vertical" />
            <Button shape="circle" type="primary" danger>
              X
            </Button>
          </Popconfirm>
          <Divider type="horizontal" />
        </div>
      </>
    );
  });
  return <div>{listItems}</div>;
};
export default Item;
