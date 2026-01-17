const priceRanges = [
  { label: "0 - 50", min: 0, max: 50 },
  { label: "50 - 100", min: 50, max: 100 },
  { label: "100 - 200", min: 100, max: 200 },
];

export const PriceFilter = ({ selected = [], onChange }) => {
  return (
    <div className="p-5 border">
      <h2 className="font-semibold mb-4">Price</h2>

      {priceRanges.map((range) => {
        const isChecked = selected.some(
          (r) => r.min === range.min && r.max === range.max
        );

        return (
          <label key={range.label} className="flex items-center mb-3">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => onChange(range)}
            />
            <span className="ms-2">{range.label}</span>
          </label>
        );
      })}
    </div>
  );
};
