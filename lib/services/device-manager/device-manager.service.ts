import { ServiceMixin } from '../mixin';
import { DeviceManagerOptions } from './types';

/**
 * `DeviceManager` provides functionality regarding user-agent recognition and responsiveness.
 *
 * @example
 * // Check whether the viewport is considered a desktop
 * const { isDesktop } = DeviceManager;
 *
 * // You may also customize DeviceManager's behavior
 * DeviceManager.setOptions({ desktopBreakpoint: 1200 });
 */
export class DeviceManager extends ServiceMixin<DeviceManager>() {
  private _options: DeviceManagerOptions = {
    desktopBreakpoint: 960,
  };

  /**
   * Sets the `DeviceManager`s options.
   * @param options (optional) The options to use.
   */
  static setOptions(options: Partial<DeviceManagerOptions>) {
    this.instance._options = { ...this.options, ...options };
  }

  static get options(): DeviceManagerOptions {
    return DeviceManager.instance._options;
  }

  /**
   * Whether the current viewport is considered a desktop.
   */
  static get isDesktop() {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
    const { desktopBreakpoint } = DeviceManager.options;
    return viewportWidth >= desktopBreakpoint;
  }
}
