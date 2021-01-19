import React, { Component } from "react";
import ListItems from "./components/listItems";

export class MyTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isFiltered: false,
      isSearching: false,
      filter: "",
      currentItem: {
        value: "",
        id: "",
        isCompleted: false,
        isUpdating: false,
      },
    };
  }
  handleSearch = (value) => {
    this.setState({
      filter: value,
      isSearching: !this.state.isSearching,
    });
  };
  handleFilter = () => {
    this.setState({
      isSearching: !this.state.isSearching,
      isFiltered: !this.state.isFiltered,
    });
  };
  isUpdating = (id) => {
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
      items: items,
    });
  };
  handleCreateItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newList = [...this.state.items, newItem];
      this.setState({
        items: newList,
        currentItem: {
          value: "",
          id: "",
          isCompleted: false,
        },
      });
    }
  };
  handleChange = (e) => {
    this.setState({
      currentItem: {
        value: e.target.value,
        id: new Date().toLocaleTimeString(),
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
        item.id = new Date().toLocaleTimeString();
        item.isUpdating = false;
      }
    });
    this.setState({
      items,
    });
  };
  //

  render() {
    return (
      <>
        <ListItems
          filterValue={this.state.filter}
          isFiltered={this.state.isFiltered}
          items={this.state.items}
          currentItem={this.state.currentItem}
          onCreateItem={this.handleCreateItem}
          onChange={this.handleChange}
          onDeleteItem={this.handleDeleteItem}
          onUpdateItem={this.handleUpdateItem}
          onStatusChange={this.handleStatusChange}
          onFilter={this.handleFilter}
          onSearch={this.handleSearch}
          isUpdating={this.isUpdating}
          isSearching={this.state.isSearching}
        />
      </>
    );
  }
}

export default MyTodoList;
