/**
 * @jest-environment jsdom
 */
import React, { Component } from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("that jest is working", () => {
  render(<App />);
  expect(true).toBe(true);
});
