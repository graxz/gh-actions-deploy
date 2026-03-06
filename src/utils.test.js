import { describe, it, expect } from "vitest";
import { greet, sum, isEven } from "./utils.js";

describe("greet", () => {
  it("deve retornar o nome passado", () => {
    expect(greet("Mundo")).toBe("Mundo");
  });

  it("deve retornar string vazia quando receber string vazia", () => {
    expect(greet("")).toBe("");
  });
});

describe("sum", () => {
  it("deve somar dois números positivos", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("deve somar números negativos", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it("deve retornar zero ao somar zero com zero", () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe("isEven", () => {
  it("deve retornar true para número par", () => {
    expect(isEven(4)).toBe(true);
  });

  it("deve retornar false para número ímpar", () => {
    expect(isEven(3)).toBe(false);
  });

  it("deve retornar true para zero", () => {
    expect(isEven(0)).toBe(true);
  });
});
