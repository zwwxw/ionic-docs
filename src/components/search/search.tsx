import { Component, State } from '@stencil/core';
import { Close, Search } from '../../icons';
import { debounce } from '../../utils';

@Component({
  tag: 'docs-search',
  styleUrl: 'search.css'
})
export class DocsSearch {
  private worker = new Worker('/docs/assets/search/worker.js');

  @State() focused = false;
  @State() results = [];
  @State() value = '';

  handleFocus = ({ type }: Event) => {
    this.focused = type === 'focus';
  }

  handleInput = debounce((event) => {
    this.value = event.target.value;

    if (this.value) {
      this.worker.postMessage(this.value);
    }
  }, 200);

  handleResult = (event) => {
    this.results = event.data || [];
    console.log(this.results);
  }

  clear = () => {
    this.value = '';
    this.results = [];
  }

  componentDidLoad() {
    this.worker.addEventListener('message', this.handleResult);
  }

  componentWillUnload() {
    this.worker.removeEventListener('message', this.handleResult);
  }

  hostData() {
    return {
      class: { 'is-focused': this.focused }
    };
  }

  render() {
    return [
      <Search class="Search-icon"/>,
      <input
        class="Search-field"
        type="text"
        placeholder="Search Docs"
        spellcheck="false"
        autocomplete="false"
        onInput={this.handleInput}
        onFocus={this.handleFocus}
        onBlur={this.handleFocus}
        value={this.value}
      />,
      this.value ? <Close class="Search-close" onClick={this.clear}/> : null
    ];
  }
}
