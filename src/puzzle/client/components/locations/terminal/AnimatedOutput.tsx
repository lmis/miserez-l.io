"use client";

import React, { FC, useEffect, useRef } from "react";

import { useStore } from "@/puzzle/client/store/store";

export const AnimatedOutput: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    userInput,
    acceptsInput,
    display,
    setScrollCallback,
    startAnimation,
  } = useStore();

  useEffect(() => {
    startAnimation();
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    if (container.scrollHeight > container.clientHeight) {
      container.scrollTop = container.scrollHeight;
    }

    const observer = new MutationObserver(() => {
      if (container.scrollHeight > container.clientHeight) {
        container.scrollTop = container.scrollHeight;
      }
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    setScrollCallback((height) => {
      container.scrollTop += height;
    });

    return () => {
      observer.disconnect();
      setScrollCallback(() => {});
    };
  }, [setScrollCallback]);

  return (
    <div ref={containerRef} className="flex h-full flex-col overflow-y-hidden">
      <div className="flex-1">
        <div className="p-4 lg:p-8" />
        {display.map(({ key, content, input }) => (
          <div key={key}>
            <code className="break-all whitespace-pre-wrap">
              {input && "> "}
              {content}
            </code>
          </div>
        ))}
        {acceptsInput && (
          <div>
            <code className="break-all whitespace-pre-wrap">
              {"> "}
              {userInput}
              <div className="animate-blink inline-block h-5 w-2 pl-1 align-bottom">
                _{" "}
              </div>
            </code>
          </div>
        )}
        <div className="p-4 lg:p-8" />
      </div>
    </div>
  );
};
