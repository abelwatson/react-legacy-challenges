import React, { Component } from 'react';

export default class List extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            newItem: '',
            itemNumber: ''
        }
    }

    handleSubmit() {
        this.setState({ items: [...this.state.items, this.state.newItem] })
    }

    clearInput() {
        this.setState.newItem = ''
    }

    markComplete() {
        this.state.items.splice(this.state.itemNumber, 1,)
    }

    render() {
        return (
            <>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.handleSubmit()
                    this.clearInput()
                }}>
                    <label htmlFor="newItem"><b>Items:</b></label>
                    <br />
                    <input placeholder="New Item" name="newItem" type="text" maxLength="200" onChange={(e) => { this.setState({ newItem: e.target.value }) }} />
                    <br />
                    <br />
                    <button type="submit">Add An Item</button>
                </form>
                {this.state.items.map((t, index) => {
                    return (
                        <p key={index}>
                            <label htmlFor="checkbox">
                                {t}&nbsp;
                                <input name="checkbox" value={index} type="checkbox" onChange={(e) => {
                                    this.setState({ itemNumber: e.currentTarget.index })
                                    this.markComplete(this.state.itemNumber)
                                }} />
                            </label>
                            <br />
                        </p>
                    )
                })}
            </>
        )
    }
}