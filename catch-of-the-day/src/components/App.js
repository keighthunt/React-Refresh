import { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes'

export default class App extends Component {

    componentDidMount() {

        const localStorageRef = localStorage.getItem('order');
        if (localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)});
        }
    }

    componentWillUnmount() {
        const localStorageRef = localStorage.getItem('order');
    }

    componentDidUpdate() {
        localStorage.setItem('order', JSON.stringify(this.state.order))
    }

    state = {
        fishes: {},
        order: {}
    };

    addFish = fish => {
        const fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;

        this.setState({ fishes });
    }

    updateFish = (key, updatedFish) => {

        const fishes = {...this.state.fishes};

        fishes[key] = updatedFish;

        this.setState({fishes});

    }

    deleteFish = key => {


        const fishes = {...this.state.fishes};
        
        delete fishes[key];
        
        this.setState({fishes});
    }

    addToOrder = key => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({order})
    }

    removeFromOrder = key => {
        const order = {...this.state.order};

        delete order[key];

        this.setState({order})
    }

    loadSamplesFishes = () => {
        this.setState({fishes: sampleFishes})
    }

    render() {

        const {fishes, order} = this.state;
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"  />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key =>
                            <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
                        )}
                    </ul>
                </div>
                <Order fishes={fishes} order={order} removeFromOrder={this.removeFromOrder} />
                <Inventory addFish={this.addFish} loadSamplesFishes={this.loadSamplesFishes} fishes={fishes} updateFish={this.updateFish} deleteFish={this.deleteFish} />
            </div>
        )
    }

}