import { Component } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

export default class Fish extends Component {

    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string, 
            name: PropTypes.string,
            price: PropTypes.number, 
            desc: PropTypes.string,
            status: PropTypes.string
        }),
        addToOrder: PropTypes.func,
        index: PropTypes.string
    }

    render() {

        if (!this.props.details) return;

        const {details, addToOrder, index} = this.props;
        const {image, name, price, desc, status} = details;

        const isAvailable = status === 'available';

        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className='fish-name'>
                    {name}
                    <span className='price'>{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button onClick={() => addToOrder(index)} disabled={!isAvailable}>{isAvailable ? 'Add to Cart' : 'sold out'}</button>
            </li>
        )
    }

}