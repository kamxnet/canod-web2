import { isValidElement, type ReactNode } from "react";

function readingText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(readingText).join(" ");
  if (isValidElement<{ children?: ReactNode }>(node)) return readingText(node.props.children);
  return "";
}

export function readingMinutes(sections: { title: string; content: ReactNode }[]) {
  const words = sections.map(section => `${section.title} ${readingText(section.content)}`).join(" ").trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}
