"use client";

import { useEffect, useState } from "react";

/**
 * Invisible bot bait. A real visitor never sees or fills the "company_website"
 * field; scripted submitters fill every input they find. The timestamp lets
 * the server reject anything completed faster than a human could read the page.
 *
 * Hidden with off-screen positioning rather than `display:none`, which the
 * more careful bots know to skip.
 */
export default function HoneypotFields() {
  const [renderedAt, setRenderedAt] = useState("");

  useEffect(() => {
    setRenderedAt(String(Date.now()));
  }, []);

  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
      <label htmlFor="company_website">Do not fill this in</label>
      <input
        id="company_website"
        name="company_website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
      <input type="hidden" name="rendered_at" value={renderedAt} readOnly />
    </div>
  );
}
