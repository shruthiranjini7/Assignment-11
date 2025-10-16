import React from 'react'
import { Link } from 'react-router-dom'


export default function About() {
return (
<section className="page">
<h2>About This Nykaa App</h2>
<p>
The Nykaa app is a popular Indian e-commerce platform offering a vast selection of makeup, skincare, hair care, and wellness products. It features a wide range of products from both international and domestic brands, as well as its own in-house labels. 
</p>
<Link to="/" className="btn">Back to Home</Link>
</section>
)
}