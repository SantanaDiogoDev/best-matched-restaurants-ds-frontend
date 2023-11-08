export default function Form({ form, handleChange, handleKeyDown }) {
    return (
      <form className="form-input" onKeyDown={handleKeyDown}>
        <label>
          Name: 
          <input type="text" name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Customer Rating:
          <input className="input-range" type="range" name="customerRating" value={form.customerRating} min="1" max="5" onChange={handleChange} />
          <span>{form.customerRating}</span>
        </label>
        <label>
          Distance:
          <input className="input-range" type="range" name="distance" value={form.distance} min="1" max="10" onChange={handleChange} />
          <span>{form.distance}</span>
        </label>
        <label>
          Price:
          <input className="input-range" type="range" name="price" value={form.price} min="10" max="50" onChange={handleChange} />
          <span>{form.price}</span>
        </label>
        <label>
          Cuisine:
          <input type="text" name="cuisine" value={form.cuisine} onChange={handleChange} />
        </label>
      </form>
    );
  }