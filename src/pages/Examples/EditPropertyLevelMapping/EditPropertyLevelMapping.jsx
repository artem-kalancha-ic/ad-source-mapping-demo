import { Pencil } from 'lucide-react';
import PageWrapper from '../../../components/PageWrapper/PageWrapper';
import PlaceholderCard from '../../../components/PlaceholderCard/PlaceholderCard';

export default function EditPropertyLevelMapping() {
  return (
    <PageWrapper
      title="Edit Property Level Mapping"
      subtitle="Modify an existing property level mapping"
      icon={Pencil}
      accentColor="#fb923c"
    >
      <PlaceholderCard delay={0} />
      <PlaceholderCard delay={1} />
    </PageWrapper>
  );
}
