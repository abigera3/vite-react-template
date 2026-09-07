"use client";

import { useEffect, useState } from "react";

function ChatIcon() {
  return (
    <svg width="15" height="16" viewBox="0 0 15 16" xmlSpace="preserve" aria-hidden="true" className="shrink-0 fill-current">
      <path d="M1.3,16c-0.7,0-1.1-0.3-1.2-0.8c-0.3-0.8,0.5-1.3,0.8-1.5c0.6-0.4,0.9-0.7,1-1c0-0.2-0.1-0.4-0.3-0.7c0,0,0-0.1-0.1-0.1 C0.5,10.6,0,9,0,7.4C0,3.3,3.4,0,7.5,0C11.6,0,15,3.3,15,7.4s-3.4,7.4-7.5,7.4c-0.5,0-1-0.1-1.5-0.2C3.4,15.9,1.5,16,1.5,16 C1.4,16,1.4,16,1.3,16z M3.3,10.9c0.5,0.7,0.7,1.5,0.6,2.2c0,0.1-0.1,0.3-0.1,0.4c0.5-0.2,1-0.4,1.6-0.7c0.2-0.1,0.4-0.2,0.6-0.1 c0,0,0.1,0,0.1,0c0.4,0.1,0.9,0.2,1.4,0.2c3,0,5.5-2.4,5.5-5.4S10.5,2,7.5,2C4.5,2,2,4.4,2,7.4c0,1.2,0.4,2.4,1.2,3.3 C3.2,10.8,3.3,10.8,3.3,10.9z" />
    </svg>
  );
}

const DOWNLOAD_URL = process.env.NEXT_PUBLIC_LIVECHAT_DOWNLOAD_URL ?? "";
const FILE_DOWNLOAD = /\.(pdf|zip|crx|xpi|dmg|exe|msix|apk)(?:[?#]|$)/i;

function startDownloadOrRedirect(url: string) {
  if (!url) return;

  const path = (() => {
    try {
      return new URL(url, window.location.origin).pathname;
    } catch {
      return url;
    }
  })();

  if (FILE_DOWNLOAD.test(path)) {
    const link = document.createElement("a");
    link.href = url;
    link.download = "";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
    return;
  }

  window.location.assign(url);
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      {open ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close chat"
            className="chat-backdrop-in absolute inset-0 bg-[#321e37]/20 backdrop-blur-[8px]"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Chat"
            className="chat-panel-in absolute right-5 bottom-20 w-[min(360px,calc(100vw-2.5rem))] overflow-hidden rounded-[12px] bg-white px-5 py-6 shadow-[0_12px_40px_rgba(50,30,55,0.18)]"
          >
            <p className="text-[1.125rem] leading-6 text-ink">
              Install Livechat extension to use this feature.
            </p>
            <button
              type="button"
              onClick={() => startDownloadOrRedirect(DOWNLOAD_URL)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-[4px] border border-teal-bright bg-teal-bright px-4 py-2.5 text-[1.125rem] font-[550] leading-none tracking-[-0.02em] text-ink hover:border-teal-mid hover:bg-teal-mid disabled:opacity-50"
              disabled={!DOWNLOAD_URL}
            >
              Install Livechat Extension
            </button>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-5 right-5 z-[60] inline-flex h-12 items-center gap-2 rounded-[4px] border border-teal-bright bg-teal-bright px-5 text-[1.125rem] font-[550] text-ink shadow-[0_3px_24px_rgba(0,0,0,0.08)]"
      >
        <ChatIcon />
        Chat
      </button>
    </>
  );
}
