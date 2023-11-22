import { IProduct } from '@/interfaces';
import mongoose, { Schema, model, Model } from 'mongoose';

const productSchema = new Schema({
    description: {type: String, required: true} ,
    images: [{type: String}],
    inStock: {type: Number, required: true, default: 0} ,
    price:  {type: Number, required: true} ,
    sizes: [{
        type: String,
        enum: {
            values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            message: '{VALUE} size is not supported',
        }
    }],
    slug: {type: String, required: true, unique: true},
    tags: [{type: String}],
    title: {type: String, required: true},
    type: {
        type: String,
        enum: {
            values: ['shirts','pants','hoodies','hats'],
            message: '{VALUE} type is not supported'
        }
    },
    gender: {
        type: String,
        enum: {
            values: ['men','women','kid','unisex'],
            message: '{VALUE} gender is not supported'
        }
    }

},{
    timestamps: true
});

productSchema.index({title: 'text', tags: 'text'});

const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema);

export default Product;