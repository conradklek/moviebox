"use client";
import useViewTransition from "@/hooks/useViewTransition";
import Link from "next/link";
import React from "react";

export default function AnimatedLink({ href, children }) {
  const { animatedRoute } = useViewTransition();
  return (
    <Link
      href={href}
      onClick={() => {
        animatedRoute(href);
      }}
      passHref
    >
      {children}
    </Link>
  );
}
