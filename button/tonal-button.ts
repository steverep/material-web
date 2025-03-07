/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators.js';

import {styles as sharedElevationStyles} from './internal/shared-elevation-styles.css.js';
import {styles as sharedStyles} from './internal/shared-styles.css.js';
import {TonalButton} from './internal/tonal-button.js';
import {styles as tonalStyles} from './internal/tonal-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-tonal-button': MdTonalButton;
  }
}

/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Filled tonal buttons have a lighter background color and
 * darker label color, making them less visually prominent than a regular,
 * filled button. They’re still used for final or unblocking actions in a flow,
 * but do so with less emphasis.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
@customElement('md-tonal-button')
export class MdTonalButton extends TonalButton {
  static override styles = [sharedStyles, sharedElevationStyles, tonalStyles];
}
