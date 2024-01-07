"use client";

import { ExtendedDocument } from "@/types/extendedDocument";
import { useRouter } from "next/navigation";

export default function useViewTransition() {
  const router = useRouter();
  const viewTransitionsStatus = () => {
    const extendedDocument = document as ExtendedDocument;
    let status = "Your browser doesn't support the View Transitions API";
    if (extendedDocument?.startViewTransition) {
      status = "Your browser supports the View Transitions API";
    }
    return status;
  };
  const animatedRoute = (url: string) => {
    const extendedDocument = document as ExtendedDocument;
    if (!extendedDocument.startViewTransition) {
      return router.push(url);
    } else {
      extendedDocument.startViewTransition(() => {
        router.push(url);
      });
    }
  };
  return { animatedRoute, viewTransitionsStatus };
}

