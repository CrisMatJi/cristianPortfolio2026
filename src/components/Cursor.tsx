"use client";

import { useEffect } from "react";

export function Cursor() {
  useEffect(() => {
    const d = document.getElementById("c1");
    const r = document.getElementById("c2");
    if (!d || !r) return;

    let mx = -99,
      my = -99,
      rx = -99,
      ry = -99;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener("mousemove", onMove);

    const tick = () => {
      d.style.left = mx + "px";
      d.style.top = my + "px";
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      r.style.left = rx + "px";
      r.style.top = ry + "px";
      requestAnimationFrame(tick);
    };
    tick();

    const interactives = document.querySelectorAll<HTMLElement>(
      "a,button,input,textarea"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        r.style.width = "56px";
        r.style.height = "56px";
        r.style.opacity = "0.5";
        d.style.opacity = "0";
      });
      el.addEventListener("mouseleave", () => {
        r.style.width = "38px";
        r.style.height = "38px";
        r.style.opacity = "0.25";
        d.style.opacity = "1";
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div id="c1" />
      <div id="c2" />
    </>
  );
}
