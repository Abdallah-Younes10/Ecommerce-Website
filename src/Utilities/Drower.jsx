import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Drawer = ({
  icon,
  title,
  badgeCount = 0,
  children,
  buttonClassName = "",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className={`
          relative inline-flex items-center
          rounded-full p-2 dark:bg-white/30
          bg-slate-400 text-white
          focus:ring-4 focus:ring-slate-400
          ${buttonClassName}
        `}
      >
        {icon}

        {badgeCount > 0 && (
          <span className="
            absolute -top-1 -right-1
            min-w-[18px] h-[18px]
            px-1
            flex items-center justify-center
            rounded-full
            bg-red-600 text-xs font-bold text-white
          ">
            {badgeCount}
          </span>
        )}
      </button>

      {/* Drawer */}
      <Dialog open={open} onClose={setOpen} className="relative z-50">
        {/* Backdrop */}
        <DialogBackdrop className="fixed inset-0 bg-black/40" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 flex justify-end">
            <DialogPanel
              className="
                w-screen max-w-md
                bg-white shadow-xl
                outline-none
                transform transition duration-300
                data-[closed]:translate-x-full
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b px-6 py-4">
                <DialogTitle className="text-lg font-semibold">
                  {title}
                </DialogTitle>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded p-2 hover:bg-gray-100"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Drawer;
