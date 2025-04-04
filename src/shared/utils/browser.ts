"use client";

export const isBrowser = (): boolean => {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
};

export const getDocument = () => {
  if (isBrowser()) {
    return document;
  }
  return null;
};

export const getWindow = () => {
  if (isBrowser()) {
    return window;
  }
  return null;
}; 