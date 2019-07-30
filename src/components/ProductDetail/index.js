import React, {Component} from 'react'
import Card from '../Card'
class ProductDetail extends Component {

    state= {
        product: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id

        fetch(`http://localhost:4000/api/products/${id}`)
            .then(res => res.json())
            .then (data => {
                this.setState({
                    product: data.product
                })
            })
    }
    render() {
    return (
        <Card>
        <h2>{this.state.product.name}</h2>
        <img src={this.state.product.img_Url} alt="product view" />
        <h4>{this.state.product.description}</h4>
        <h3>${this.state.product.price/100}</h3>
        </Card>
            ) 
        }
    }

export default ProductDetail