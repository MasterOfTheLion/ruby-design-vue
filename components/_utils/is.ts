import type { ComponentPublicInstance, VNodeNormalizedChildren } from 'vue'
import { Dayjs } from 'dayjs'
import { VNode } from 'vue'

const opt = Object.prototype.toString

export function isArray(obj: any): obj is any[] {
  return opt.call(obj) === '[object Array]'
}

export function isNull(obj: any): obj is null {
  return opt.call(obj) === '[object Null]'
}

export function isBoolean(obj: unknown): obj is boolean {
  return opt.call(obj) === '[object Boolean]'
}
