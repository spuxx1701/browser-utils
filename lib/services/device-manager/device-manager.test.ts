import { test, expect, vi, beforeEach } from 'vitest';
import { DeviceManager } from '.';

beforeEach(() => {
  // DeviceManager uses the bigger value of either document.documentElement.clientWidth and window.innerWidth.
  // We stick to stubbing window.innerWidth during tests to reduce the amount of test code.
  vi.stubGlobal('document', {
    documentElement: {
      clientWidth: 0,
    },
  });
});

test('properly recognizes a desktop viewport', () => {
  vi.stubGlobal('window', {
    innerWidth: 1600,
  });
  expect(DeviceManager.isDesktop).toBe(true);
});

test('properly recognizes a mobile viewport', () => {
  vi.stubGlobal('window', {
    innerWidth: 400,
  });
  expect(DeviceManager.isDesktop).toBe(false);
});

test('acknowledges a custom threshold', () => {
  vi.stubGlobal('window', {
    innerWidth: 1600,
  });
  DeviceManager.setOptions({ desktopBreakpoint: 2000 });
  expect(DeviceManager.isDesktop).toBe(false);
});
