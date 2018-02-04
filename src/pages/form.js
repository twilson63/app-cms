import React from 'react'
import { Link } from 'react-router-dom'

const Form = props => {
  return (
    <div className="pa4">
      <header>
        <h1>Add/Edit Content</h1>
      </header>
      <main>
        <div>
          <label className="db">Key</label>
          <input className="w-100 pa2 mv2" type="text" />
          <div className="ba pa2 mb4 mt2 bg-black-50 white">
            The key is the unique identifier for the content, it must be less
            than 50 characters and contain no spaces
          </div>
        </div>
        <div className="ba pa2 mb2 b--black-30 br2">
          <button className="w-100 pa2 mv2">Add Locale</button>

          <label className="db">Locales</label>
          <select className="w-100 mv2">
            <option>en</option>
            <option>es</option>
          </select>
          <textarea rows="3" className="w-100 pa2 mv2" />
        </div>
        <div>
          <button className="w-100 pa2">Save</button>
          <Link to="/" className="db mv2 link tc w-100 ba br2 pa2">
            Cancel
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Form
