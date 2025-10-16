import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
return (
<section className="page">
<h2>Welcome to Nykaa App</h2>
<p>
It is a premier online beauty and wellness store with a wide range of authentic products, expert advice, and tutorials.
</p>


<div className="actions">
<Link className="btn" to="/about">About</Link>
<Link className="btn outline" to="/users">View Users</Link>
</div>
</section>
)
}