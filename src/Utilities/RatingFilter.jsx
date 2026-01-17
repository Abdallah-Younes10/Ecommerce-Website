export const RatingFilter = ({ selected = [], onChange }) => {
  const ratings = [5, 4, 3, 2];

  return (
    <div className="p-5 border">
      <h2 className="font-semibold mb-4">Rating</h2>

      {ratings.map(r => (
        <label key={r} className="flex items-center mb-3">
          <input
            type="checkbox"
            checked={selected.includes(r)}
            onChange={() => onChange(r)}
          />
          <span className="ms-2">{r} ★ & up</span>
        </label>
      ))}
    </div>
  );
};
