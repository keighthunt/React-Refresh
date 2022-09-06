import React from 'react';
import { formatPrice } from '../helpers';

export default class EditFishForm extends React.Component {

    handleChange = event => {

        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };

        this.props.updateFish(this.props.index, updatedFish);


    }

    render() {
        const {name, price, status, desc, image} = this.props.fish;
        return (
            <div className='fish-edit'>
                <input type="text" name="name" value={name} onChange={this.handleChange} />
                <input type="text" name="price" value={formatPrice(price)} onChange={this.handleChange} />
                <select type="text" name="status" value={status}onChange={this.handleChange} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" value={desc} onChange={this.handleChange} />
                <input type="text" name="image" value={image} onChange={this.handleChange} />
                <button className='' onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        )
    }

}