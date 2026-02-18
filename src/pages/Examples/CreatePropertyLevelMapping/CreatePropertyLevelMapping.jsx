import { Home } from 'lucide-react';
import ExampleLayout from '../../../components/ExampleLayout/ExampleLayout';

const steps = [
  {
    buttonLabel: 'Create Property Mapping',
    buttonVariant: 'primary',
    description: 'Override for The Ariel',
    descriptionFields: [
      { label: 'source', value: 'apartmentlist.com' },
      { label: 'medium', value: 'ILS' },
    ],
    levels: {
      global:   { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: false, ignored: true },
      company:  { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / cpc' }, highlight: false },
      property: { status: 'Auto',   mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / cpc' }, highlight: true },
    },
  },
  {
    buttonLabel: 'Reset Example',
    buttonVariant: 'reset',
    description: 'The Ariel now overrides both company and global:',
    descriptionFields: [
      { label: 'source', value: 'apartmentlist.com' },
      { label: 'medium', value: 'ILS' },
    ],
    levels: {
      global:   { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: false, ignored: true },
      company:  { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / cpc' }, highlight: false, ignored: true },
      property: { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / ILS' }, highlight: true },
    },
  },
];

export default function CreatePropertyLevelMapping() {
  return (
    <ExampleLayout
      title="Create Property Level Mapping"
      subtitle="Define mapping at the property level for The Ariel"
      icon={Home}
      accentColor="#FD7943"
      explanation="This example shows creating a mapping at the most specific (Property) level for The Ariel. Global and RADCO company mappings are already defined. The Ariel's property-level mapping overrides both, providing a fully custom mapping for this specific property."
      steps={steps}
      levelLabels={{ company: 'RADCO', property: 'The Ariel' }}
    />
  );
}
