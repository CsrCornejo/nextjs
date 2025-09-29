"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <>
      <div style={{ color: 'red', padding: '2rem' }}>Error in reviewId: {error.message}</div>
      <button
        onClick={reload}
        style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Try again
      </button>
    </>
  );
}
