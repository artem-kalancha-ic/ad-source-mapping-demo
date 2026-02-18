import { Globe } from 'lucide-react';
import ExampleLayout from '../../../components/ExampleLayout/ExampleLayout';

const steps = [
  {
    buttonLabel: 'Create Global Mapping',
    buttonVariant: 'primary',
    description: 'Map ApartmentList.com globally',
    descriptionFields: [
      { label: 'source', value: 'apartmentlist.com' },
      { label: 'medium', value: 'referral' },
    ],
    levels: {
      global:   { status: 'Unmapped', mapping: { from: 'ApartmentList.com', to: '(not mapped)' }, highlight: true },
      company:  { status: 'Unmapped', mapping: { from: 'ApartmentList.com', to: '(not mapped)' }, highlight: false },
      property: { status: 'Unmapped', mapping: { from: 'ApartmentList.com', to: '(not mapped)' }, highlight: false },
    },
  },
  {
    buttonLabel: 'Reset Example',
    buttonVariant: 'reset',
    description: 'Global mapping created. All levels now inherit:',
    descriptionFields: [
      { label: 'source', value: 'apartmentlist.com' },
      { label: 'medium', value: 'referral' },
    ],
    levels: {
      global:   { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: true },
      company:  { status: 'Auto',   mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: false },
      property: { status: 'Auto',   mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: false },
    },
  },
];

export default function CreateGlobalLevelMapping() {
  return (
    <ExampleLayout
      title="Create Global Level Mapping"
      subtitle="Set up a new global-level Ad Source Mapping"
      icon={Globe}
      accentColor="#6c63ff"
      explanation="This example demonstrates creating a new mapping at the Global level. When a global mapping is created, it applies as the default rule for all companies and properties. Company and property levels inherit this mapping automatically (shown as 'Auto') unless overridden."
      steps={steps}
    />
  );
}
