"use client";
import { useCursor } from './CustomCursor';
import { useState } from 'react';
import Loading from '@/app/loading';

export function CursorTester() {
  const { setCursorLoading, setCursorDefault } = useCursor();
  const [showLoading, setShowLoading] = useState(false);

  const handleShowLoading = () => {
    setShowLoading(true);
    // Auto hide after 5 seconds
    setTimeout(() => {
      setShowLoading(false);
    }, 5000);
  };

  return (
    <>
      {showLoading && <Loading />}

      <div className="fixed bottom-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg border">
        <h3 className="text-sm font-bold mb-2">Animation Tester</h3>
        <div className="flex flex-col gap-2">
          <button
            onClick={setCursorLoading}
            className="px-3 py-1 bg-blue-500 text-white rounded text-xs"
          >
            Force Cursor Loading
          </button>
          <button
            onClick={setCursorDefault}
            className="px-3 py-1 bg-gray-500 text-white rounded text-xs"
          >
            Reset Cursor
          </button>

          <button
            onClick={handleShowLoading}
            className="px-3 py-1 bg-green-500 text-white rounded text-xs"
          >
            Show Loading Page
          </button>

          {/* Elemento con clase loading para prueba */}
          <div
            className="loading px-3 py-2 bg-yellow-200 rounded text-xs cursor-pointer"
            data-loading="true"
          >
            Hover: Loading cursor
          </div>
        </div>
      </div>
    </>
  );
}
