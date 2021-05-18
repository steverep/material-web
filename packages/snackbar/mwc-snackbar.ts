/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import {customElement} from 'lit-element';

import {SnackbarBase} from './mwc-snackbar-base';
import {styles} from './mwc-snackbar.css';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-snackbar': Snackbar;
  }
}

@customElement('mwc-snackbar')
export class Snackbar extends SnackbarBase {
  static styles = styles;
}
