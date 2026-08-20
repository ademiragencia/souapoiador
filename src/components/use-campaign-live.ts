import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

/** Relê o total e o mural no banco, para o número subir na hora em todas as telas. */
export function useCampaignLive(intervalMs = 8000) {
  const router = useRouter();

  useEffect(() => {
    const id = window.setInterval(() => {
      void router.invalidate();
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [router, intervalMs]);
}
