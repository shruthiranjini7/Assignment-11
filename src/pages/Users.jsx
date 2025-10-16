import React from 'react'
import { Link } from 'react-router-dom'
import { users } from '../data/users'


export default function Users() {
return (
<section className="page">
<h2>Nykaa Users</h2>
<p>Click a user to see details.</p>


<ul className="user-list">
{users.map((u) => (
<li key={u.id} className="user-item">
<div>
<strong>{u.name}</strong>
<div className="muted">{u.email}</div>
</div>
<Link className="btn small" to={`/users/${u.id}`}>Details</Link>
</li>
))}
</ul>
</section>
)
}