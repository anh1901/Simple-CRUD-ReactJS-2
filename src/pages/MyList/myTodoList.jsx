import React, { Component } from "react";
import ListItems from "./components/listItems";

export class MyTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isFiltered: false,
      currentItem: {
        value: "",
        id: "",
        isCompleted: false,
        isUpdating: false,
        time: "",
      },
    };
  }
  handleFilter = () => {
    this.setState({
      isFiltered: !this.state.isFiltered,
    });
  };
  handleUpdating = (id) => {
    const items = [...this.state.items]; // MUTABLE

    items.map((item) => {
      if (item.id === id) {
        item.isUpdating = !item.isUpdating;
      }
    });
    this.setState({
      items: items,
    });
  };
  handleStatusChange = (id) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
    });
    this.setState({
      items,
    });
  };
  handleCreateItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.value !== "") {
      const newList = [...this.state.items, newItem];
      this.setState({
        items: newList,
        currentItem: {
          value: "",
          id: "",
        },
      });
    }
  };
  handleChange = (e) => {
    this.setState({
      currentItem: {
        value: e.target.value,
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        isCompleted: false,
        isUpdating: false,
      },
    });
  };
  handleDeleteItem = (id) => {
    const newList = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: newList,
    });
  };
  handleUpdateItem = (value, id) => {
    const items = [...this.state.items];
    items.map((item) => {
      if (item.id === id) {
        item.value = value;
        item.id = Date.now();
        item.isUpdating = false;
        item.time = new Date().toLocaleTimeString();
      }
    });
    this.setState({
      items,
    });
  };
  //

  render() {
    const props = {
      isFiltered: this.state.isFiltered,
      items: this.state.items,
      currentItem: this.state.currentItem,
      onCreateItem: this.handleCreateItem,
      onChange: this.handleChange,
      onFilter: this.handleFilter,
      onDeleteItem: this.handleDeleteItem,
      onUpdateItem: this.handleUpdateItem,
      onStatusChange: this.handleStatusChange,
      onUpdating: this.handleUpdating,
    };
    return (
      <>
        <ListItems {...props} />
      </>
    );
  }
}

export default MyTodoList;
