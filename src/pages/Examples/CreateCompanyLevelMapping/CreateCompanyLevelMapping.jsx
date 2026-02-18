import { Building2 } from 'lucide-react';
import ExampleLayout from '../../../components/ExampleLayout/ExampleLayout';

const steps = [
  {
    buttonLabel: 'Create Company Override',
    buttonVariant: 'primary',
    description: 'Override for RADCO',
    descriptionFields: [
      { label: 'source', value: 'apartmentlist.com' },
      { label: 'medium', value: 'cpc' },
    ],
    levels: {
      global:   { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: false },
      company:  { status: 'Auto',   mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: true },
      property: { status: 'Auto',   mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: false },
    },
  },
  {
    buttonLabel: 'Reset Example',
    buttonVariant: 'reset',
    description: 'RADCO now overrides global. The Ariel inherits from company:',
    descriptionFields: [
      { label: 'source', value: 'apartmentlist.com' },
      { label: 'medium', value: 'cpc' },
    ],
    levels: {
      global:   { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / referral' }, highlight: false, ignored: true },
      company:  { status: 'Mapped', mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / cpc' }, highlight: true },
      property: { status: 'Auto',   mapping: { from: 'ApartmentList.com', to: 'apartmentlist.com / cpc' }, highlight: false },
    },
  },
];

export default function CreateCompanyLevelMapping() {
  return (
    <ExampleLayout
      title="Create Company Level Mapping"
      subtitle="Define mapping at the company level for RADCO"
      icon={Building2}
      accentColor="#00d4aa"
      explanation="This example shows creating a mapping override at the Company level for RADCO. The global mapping already exists. When RADCO creates a company-level mapping, it overrides the global rule. Properties under RADCO (like The Ariel) automatically inherit the company override."
      steps={steps}
      levelLabels={{ company: 'RADCO', property: 'The Ariel' }}
    />
  );
}
