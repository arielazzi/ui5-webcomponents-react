import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/MultiComboBoxItem';
import React, { FC } from 'react';

export interface NotificationOverflowActionPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the action design. <br><br> <b>Note:</b> Available options are "Default", "Emphasized", "Positive", "Negative", and "Transparent".
   */
  design?: ButtonDesign;
  /**
   * Defines if the action is disabled. <br><br> <b>Note:</b> a disabled action can't be pressed or focused, and it is not in the tab chain.
   */
  disabled?: boolean;
  /**
   * Defines the <code>icon</code> source URI. <br><br> <b>Note:</b> SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the text of the <code>ui5-notification-overflow-action</code>.
   */
  text?: string;
}

const NotificationOverflowAction: FC<NotificationOverflowActionPropTypes> = withWebComponent<
  NotificationOverflowActionPropTypes
>(
  'ui5-notification-overflow-action',
  () => import('@ui5/webcomponents-fiori/dist/NotificationOverflowAction'),
  ['design', 'icon', 'text'],
  ['disabled'],
  [],
  []
);

NotificationOverflowAction.displayName = 'NotificationOverflowAction';

NotificationOverflowAction.defaultProps = {
  design: ButtonDesign.Transparent,
  disabled: false
};

export { NotificationOverflowAction };
