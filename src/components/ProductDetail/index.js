import React, {Component} from 'react'
import Card from '../Card'
import styles from './product-detail.module.scss' 
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

    initiateStripeCheckout = async () => {
        console.log('initiating')
        const stripe = window.Stripe('pk_test_MTQSb4lGSImPrW41fw1Fe3EO00FsKG3fxd')
        const { product } = this.state

        const lineItem = {
            name: product.name,
            description: product.description,
            images: [product.img_Url],
            amount: product.price,
            currency: 'usd',
            quantity: 1,
          }
        try {
          // Initiate checkout session to get session id
          const response = await fetch('http://localhost:4000/api/checkout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(lineItem)
          })
          const data = await response.json()
          const sessionId = data.session.id
      
        //  Redirect to checkout
          const result = await stripe.redirectToCheckout({ sessionId })
      
        } catch (error) {
          console.log('STRIPE ERROR', error)
        }
      }

    render() {
    return (
            <Card>
            <h2>{this.state.product.name}</h2>
            <img src={this.state.product.img_Url} alt="product view" />
            <h4>{this.state.product.description}</h4>
            <h3>${this.state.product.price/100}</h3>
            <button className={styles.buttonStyle} onClick={this.initiateStripeCheckout}> Purchase </button>
            </Card>
            ) 
        }
    }

export default ProductDetail