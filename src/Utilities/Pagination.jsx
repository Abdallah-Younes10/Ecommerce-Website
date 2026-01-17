export const Pagination = ({
  page,
  total,
  limit,
  onPageChange,
  onLimitChange,
}) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <nav className="flex items-center justify-between mt-6">
      <ul className="flex text-sm gap-1">
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="px-3 h-9 border rounded"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`w-9 h-9 border rounded ${
              p === page
                ? "bg-tertiary text-blue-600"
                : "bg-secondary"
            }`}
          >
            {p}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className="px-3 h-9 border rounded"
        >
          Next
        </button>
      </ul>

      <select
        value={limit}
        onChange={(e) => {
          onLimitChange(+e.target.value);
          onPageChange(1);
        }}
        className="px-3 py-2 dark:bg-slate-600 bg-slate-400 text-white border rounded"
      >
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
        <option value={50}>50 per page</option>
      </select>
    </nav>
  );
};
