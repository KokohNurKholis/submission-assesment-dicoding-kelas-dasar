import { test, expect } from 'bun:test';
import { sum } from './index.js';

test('menjumlahkan bilangan positif', () => {
  expect(sum(2, 3)).toBe(5);
});

test('menjumlahkan dengan nol', () => {
  expect(sum(5, 0)).toBe(5);
});

test('menjumlahkan bilangan negatif', () => {
  expect(sum(-2, -3)).toBe(-5);
});

test('menjumlahkan bilangan positif dan negatif', () => {
  expect(sum(10, -4)).toBe(6);
});

test('menjumlahkan bilangan desimal', () => {
  expect(sum(1.5, 2.5)).toBe(4);
});