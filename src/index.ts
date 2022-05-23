// @ts-nocheck
import { App, inject, InjectionKey } from 'vue-demi';
import {CounterNumber} from './components/CounterNumber.ts';

export interface VueCounterOptions {
  theme: string;
}

export interface VueCounterPlugin {
  options?: VueCounterOptions;
  install(app: App): void;
}

export const VueCounterPluginSymbol: InjectionKey<VueCounterPlugin> = Symbol();

export function VueCounterPlugin(): VueCounterPlugin {
  const VueCounterPlugin = inject(VueCounterPluginSymbol);
  if (!VueCounterPlugin) throw new Error('No VueCounterPlugin provided!!!');

  return VueCounterPlugin;
}

export function createVueCounterPlugin(
  options?: VueCounterOptions,
): VueCounterPlugin {
  const plugin: VueCounterPlugin = {
    options,
    install(app: App) {
      app.component('vue-counter', CounterNumber);
    },
  };

  return plugin;
}
