import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export const ProfileDropdown = ({ user, navigation }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(!open)} className="p-2 rounded-full bg-gray-400">
        <img className="w-8 h-8 rounded-full" src={user.img2} alt={user.name} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-gray-200 rounded-lg shadow-md z-50">
          <div className="px-4 py-3 border-b">
            <span className="block font-medium">{user.name}</span>
            <span className="block text-sm text-gray-700 truncate">{user.email}</span>
          </div>
          <ul>
            {navigation.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.href}
                  className="block px-4 py-2 hover:bg-gray-300 rounded"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
