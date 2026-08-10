"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/**
 * Records how the visitor arrived, once per session, on first page view.
 * Renders nothing.
 */
export default function AttributionTracker() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}
