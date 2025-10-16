import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { users } from '../data/users'


export default function UserDetail() {
const { id } = useParams()
const navigate = useNavigate()
const userId = Number(id)
const user = users.find((u) => u.id === userId)


if (!user) {
return (
<section className="page">
<h2>User Not Found</h2>
<p>The user with id {id} does not exist.</p>
<button className="btn" onClick={() => navigate('/users')}>Back to Users</button>
</section>
)
}


return (
<section className="page">
<h2>{user.name}</h2>
<p><strong>Email:</strong> {user.email}</p>
<p><strong>Bio:</strong> {user.bio}</p>


<div className="actions">
<button className="btn" onClick={() => navigate(-1)}>Go Back</button>
<button className="btn outline" onClick={() => navigate('/users')}>Back to Users</button>
</div>
</section>
)
}