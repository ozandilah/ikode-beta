import { ReactElement, ReactNode } from 'react';
type TFeature = {
    key: string;
    title: string;
    paragraph: string;
    icon: ReactNode;
};
interface Props {
    features: TFeature[];
}
declare function FeaturedItems({ features }: Props): ReactElement;
export default FeaturedItems;
