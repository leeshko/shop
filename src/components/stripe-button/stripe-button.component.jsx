import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KrgFcJJzEdzXrWLgXlJZG20Yk6gSps7FZP3MP3mdvbtGUbxHr0ni9uDpIYNMVhX0AgxMPJUqCGqNRZVdt0KJRrI002gqUPNw3';

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={token => console.log(token)}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;