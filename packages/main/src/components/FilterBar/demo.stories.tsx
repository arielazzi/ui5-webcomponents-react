import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { FilterBar } from '@ui5/webcomponents-react/lib/FilterBar';
import { FilterItem } from '@ui5/webcomponents-react/lib/FilterItem';
import { FilterType } from '@ui5/webcomponents-react/lib/FilterType';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { VariantManagement } from '@ui5/webcomponents-react/lib/VariantManagement';
import React from 'react';

const variantItems = [
  { label: 'Variant 1', key: '1' },
  { label: 'Variant 2', key: '2' }
];
const filterItems = [
  { text: 'Text 1', key: '1' },
  { text: 'Text 2', key: '2' }
];

export const renderStory = () => {
  return (
    <FilterBar
      search={<Input placeholder={'Search'} />}
      variants={
        <VariantManagement
          closeOnItemSelect={boolean('closeOnItemSelect', true)}
          selectedKey={'2'}
          variantItems={variantItems}
          placement={select('Placement', PlacementType, PlacementType.Bottom)}
          level={select('level', TitleLevel, TitleLevel.H6)}
        />
      }
    >
      <FilterItem
        filterItems={filterItems}
        label="Classification"
        key="classification"
        type={FilterType.Select}
        loading={boolean('loading', false)}
      />
      <FilterItem
        key={'filter2'}
        type={FilterType.Custom}
        label={'Custom Filter 1'}
        changeEventName={'onClick'}
        valueParamName={'state'}
      >
        <Switch />
      </FilterItem>
      <FilterItem
        onChange={action('onChange')}
        filterItems={filterItems}
        style={{
          maxWidth: '200px'
        }}
        label="Multi"
        key="Multi"
        type={FilterType.MultiSelect}
        loading={boolean('loading', false)}
      />
    </FilterBar>
  );
};
renderStory.storyName = 'Default';

export default {
  title: 'Components / FilterBar',
  component: FilterBar,
  parameters: {
    subcomponents: { FilterItem }
  }
};
