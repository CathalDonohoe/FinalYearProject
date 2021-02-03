import React from 'react';
 
export default class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onOwnerChange = this.onOwnerChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
 
        this.state = {
            name: props.item ? props.item.name : '',
            owner: props.item ? props.item.owner : '',
            description: props.item ? props.item.description : '',
            published: props.item ? props.item.published : 0,
 
            error: ''
        };
    }
 
    onNameChange(e) {
        const name = e.target.value;
        this.setState(() => ({ name: name }));
    }
 
    onOwnerChange(e) {
        const owner = e.target.value;
        this.setState(() => ({ owner: owner }));
    }
 
    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({ description: description }));
    }
 
    onSubmit(e) {
        e.preventDefault();
 
        if (!this.state.name || !this.state.owner ) {
            this.setState(() => ({ error: 'Please set title & author & published!' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitBook(
                {
                    name: this.state.name,
                    owner: this.state.owner,
                    description: this.state.description
                }
            );
        }
    }
 
    render() {
        return (
            <div>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className='add-item-form'>
 
                    <input type="text" placeholder="item" autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange} />
                    <br />
 
                    <input type="text" placeholder="owner"
                        value={this.state.owner}
                        onChange={this.onOwnerChange} />
                    <br />
 
                    <textarea placeholder="description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange} />
                    <br />
                    <button>Add Item</button>
                </form>
            </div>
        );
    }
}