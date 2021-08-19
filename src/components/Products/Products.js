import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     { id: '1', name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/B9FF/production/_117751674_satan-shoes1.jpg'},
//     { id: '2', name: 'Macbook', description: 'Apple macbook', price: '$10', image: 'https://static.toiimg.com/thumb/resizemode-4,msid-81328406,imgsize-1399554,width-720/81328406.jpg' },
// ];

const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;