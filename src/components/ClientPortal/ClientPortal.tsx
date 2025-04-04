"use client";

import { createPortal } from "react-dom";

interface ClientPortalProps {
  children: React.ReactNode;
}

const ClientPortal = ({ children }: ClientPortalProps) => {
  return createPortal(children, document.body);
};

export default ClientPortal; 