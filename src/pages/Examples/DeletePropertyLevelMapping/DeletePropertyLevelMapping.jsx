import { Trash2 } from 'lucide-react';
import ExampleLayout from '../../../components/ExampleLayout/ExampleLayout';

const steps = [
  {
    buttonLabel: 'Delete Company Mapping',
    buttonVariant: 'danger',
    description: 'Remove RADCO\'s company override. The Ariel keeps its own mapping.',
    descriptionFields: [
      { label: 'source', value: 'apartmentlist.com' },
      { label: 'medium', value: 'cpc' },
    ],
    levels: {
      global:   { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: false, ignored: true },
      company:  { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / cpc' }, highlight: false, ignored: true },
      property: { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / ILS' }, highlight: true },
    },
  },
  {
    buttonLabel: 'Delete Property Mapping',
    buttonVariant: 'danger',
    description: 'Remove The Ariel\'s property mapping. It will fall back to global.',
    descriptionFields: [
      { label: 'source', value: 'apartmentlist.com' },
      { label: 'medium', value: 'ILS' },
    ],
    levels: {
      global:   { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: false, ignored: true },
      company:  { status: 'Auto',   mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: true, ignored: true },
      property: { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / ILS' }, highlight: false },
    },
  },
  {
    buttonLabel: 'Reset Example',
    buttonVariant: 'reset',
    description: 'All overrides removed. Both RADCO and The Ariel inherit from global:',
    descriptionFields: [
      { label: 'source', value: 'apartmentlist.com' },
      { label: 'medium', value: 'referral' },
    ],
    levels: {
      global:   { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: false },
      company:  { status: 'Auto',   mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: false },
      property: { status: 'Auto',   mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: true },
    },
  },
];

export default function DeletePropertyLevelMapping() {
  return (
    <ExampleLayout
      title="Delete Property Level Mapping"
      subtitle="Remove The Ariel's property level mapping"
      icon={Trash2}
      accentColor="#ff6b6b"
      explanation="This example demonstrates deleting mappings in two steps. First, RADCO's company-level mapping is removed — The Ariel keeps its own property mapping so nothing changes for it yet. Then, The Ariel's property mapping is deleted, and with no company override left, both levels fall back to inheriting from the global mapping (shown as 'Auto')."
      steps={steps}
      levelLabels={{ company: 'RADCO', property: 'The Ariel' }}
    />
  );
}
