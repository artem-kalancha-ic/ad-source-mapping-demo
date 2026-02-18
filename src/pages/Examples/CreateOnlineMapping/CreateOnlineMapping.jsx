import { Globe } from 'lucide-react';
import PageWrapper from '../../../components/PageWrapper/PageWrapper';
import PlaceholderCard from '../../../components/PlaceholderCard/PlaceholderCard';

export default function CreateOnlineMapping() {
  return (
    <PageWrapper
      title="Create Online Mapping"
      subtitle="Set up a new online Ad Source Mapping"
      icon={Globe}
      accentColor="#4ecdc4"
    >
      <PlaceholderCard delay={0} />
      <PlaceholderCard delay={1} />
    </PageWrapper>
  );
}
