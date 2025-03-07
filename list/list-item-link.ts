/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators.js';

import {styles as forcedColors} from './internal/listitem/forced-colors-styles.css.js';
import {styles} from './internal/listitem/list-item-styles.css.js';
import {ListItemLinkOnly as ListItemLink} from './internal/listitemlink/list-item-link-only.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-list-item-link': MdListItemLink;
  }
}

/**
 * @summary
 * Lists are continuous, vertical indexes of text or images. Items are placed
 * inside the list. This is a linkable variant.
 *
 * @description
 * Lists consist of one or more list items, and can contain actions represented
 * by icons and text. List items come in three sizes: one-line, two-line, and
 * three-line.
 *
 * __Takeaways:__
 *
 * - Lists should be sorted in logical ways that make content easy to scan, such
 *   as alphabetical, numerical, chronological, or by user preference.
 * - Lists present content in a way that makes it easy to identify a specific
 *   item in a collection and act on it.
 * - Lists should present icons, text, and actions in a consistent format.
 *
 * Example slottable child variants are:
 *
 * - `video[data-variant=video]`
 * - `img,span[data-variant=avatar]`
 * - `img[data-variant=image]`
 * - `md-icon[data-variant=icon]`
 *
 *  @example
 * ```html
 * <md-list-item-link
 *     headline="User Name"
 *     supportingText="user@name.com"
 *     href="/accounts">
 *   <md-icon data-variant="icon" slot="start">account_circle</md-icon>
 *   <md-icon data-variant="icon" slot="end">open_in_new</md-icon>
 * </md-list-item-link>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
@customElement('md-list-item-link')
export class MdListItemLink extends ListItemLink {
  static override styles = [styles, forcedColors];
}
