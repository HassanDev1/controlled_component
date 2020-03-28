import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './components/itemList';
import CreateNewItems from './components/createNewItem';
import DeleteLastItem from './components/deleteLastitem';

class App extends React.Component {
  state = {
    items: [],
  };
  addItem = item => {
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };
  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };
  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <CreateNewItems onAddItem={this.addItem} />
        <DeleteLastItem onDelete={this.deleteLastItem} onDisabled={this.noItemsFound()} />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;

